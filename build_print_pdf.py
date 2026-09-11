import os
import qrcode
from PIL import Image, ImageDraw

from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# Directories
PROJECT_DIR = os.path.dirname(os.path.abspath(__file__))
PDF_PATH = os.path.join(PROJECT_DIR, "Joan_Apio_NFC_Business_Card_Print_Ready.pdf")
TEMP_DIR = os.path.join(PROJECT_DIR, ".temp_pdf_assets")
FONTS_DIR = os.path.join(PROJECT_DIR, "fonts_cache")
os.makedirs(TEMP_DIR, exist_ok=True)

# Register Montserrat Fonts in ReportLab
pdfmetrics.registerFont(TTFont("Montserrat-Bold", os.path.join(FONTS_DIR, "Montserrat-Bold.ttf")))
pdfmetrics.registerFont(TTFont("Montserrat-SemiBold", os.path.join(FONTS_DIR, "Montserrat-SemiBold.ttf")))
pdfmetrics.registerFont(TTFont("Montserrat-Medium", os.path.join(FONTS_DIR, "Montserrat-Medium.ttf")))
pdfmetrics.registerFont(TTFont("Montserrat-Regular", os.path.join(FONTS_DIR, "Montserrat-Regular.ttf")))

# Physical Card Dimensions (CR80 + 3mm Bleed)
PAGE_WIDTH = 91.60 * mm
PAGE_HEIGHT = 59.98 * mm
BLEED = 3.00 * mm
TRIM_W = 85.60 * mm
TRIM_H = 53.98 * mm

# Brand Color Palette (Burgundy, Charcoal Black, Off-White, Gold Accent)
COLOR_KAVIBE_PRIMARY = HexColor("#A1243A")     # Rich Crimson Burgundy
COLOR_KAVIBE_DARK = HexColor("#681423")        # Deep Wine Burgundy
COLOR_CHARCOAL = HexColor("#191615")           # Deep Charcoal Black
COLOR_OFF_WHITE = HexColor("#FAF8F5")         # Warm Off-White Space
COLOR_GOLD_ACCENT = HexColor("#C5A059")       # Brass / Gold
COLOR_GOLD_LIGHT = HexColor("#E5C887")
COLOR_WHITE = HexColor("#FFFFFF")

def prepare_circular_portrait():
    photo_path = os.path.join(PROJECT_DIR, "public", "images", "joan", "9.jpg")
    out_path = os.path.join(TEMP_DIR, "portrait_circular.png")
    
    src = Image.open(photo_path).convert("RGBA")
    pw, ph = src.size
    crop_size = min(pw, ph)
    crop_box = ((pw - crop_size) // 2, (ph - crop_size) // 2, (pw + crop_size) // 2, (ph + crop_size) // 2)
    cropped = src.crop(crop_box)
    
    target_dim = 1200
    resized = cropped.resize((target_dim, target_dim), Image.Resampling.LANCZOS)
    
    mask = Image.new("L", (target_dim, target_dim), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.ellipse((0, 0, target_dim, target_dim), fill=255)
    
    circular = Image.new("RGBA", (target_dim, target_dim), (0, 0, 0, 0))
    circular.paste(resized, (0, 0), mask)
    circular.save(out_path, "PNG")
    return out_path

def prepare_white_logo():
    logo_path = os.path.join(PROJECT_DIR, "public", "logo", "kavibe.png")
    out_path = os.path.join(TEMP_DIR, "kavibe_white.png")
    if os.path.exists(logo_path):
        logo_img = Image.open(logo_path).convert("RGBA")
        r, g, b, a = logo_img.split()
        white_logo = Image.merge("RGBA", (Image.new("L", r.size, 255), Image.new("L", r.size, 255), Image.new("L", r.size, 255), a))
        white_logo.save(out_path, "PNG")
        return out_path
    return None

def prepare_qr_code():
    out_path = os.path.join(TEMP_DIR, "qr_code.png")
    site_url = "https://joan-apio-portfolio.vercel.app"
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=20,
        border=1,
    )
    qr.add_data(site_url)
    qr.make(fit=True)
    qr_img = qr.make_image(fill_color="#191615", back_color="#FFFFFF").convert("RGBA")
    
    qw, qh = qr_img.size
    qr_mask = Image.new("L", (qw, qh), 0)
    q_draw = ImageDraw.Draw(qr_mask)
    q_draw.rounded_rectangle([0, 0, qw, qh], radius=75, fill=255)
    
    qr_rounded = Image.new("RGBA", (qw, qh), (255, 255, 255, 0))
    qr_rounded.paste(qr_img, (0, 0), qr_mask)
    qr_rounded.save(out_path, "PNG")
    return out_path


# ==========================================
# REPORTLAB PDF GENERATOR
# ==========================================
def generate_pdf():
    c = canvas.Canvas(PDF_PATH, pagesize=(PAGE_WIDTH, PAGE_HEIGHT))
    c.setTitle("Joan E. Apio NFC Business Card — Master Print Specification")
    c.setAuthor("Skyrix Technologies")
    c.setSubject("Production Print PDF for Joan E. Apio NFC Business Card")

    portrait_png = prepare_circular_portrait()
    white_logo_png = prepare_white_logo()
    qr_png = prepare_qr_code()

    # ------------------------------------------
    # PAGE 1: FRONT OF CARD (Montserrat)
    # ------------------------------------------
    c.setFillColor(COLOR_OFF_WHITE)
    c.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, fill=True, stroke=False)

    cx_arc = 13.5 * mm
    cy_arc = PAGE_HEIGHT / 2.0
    r_arc = 43.2 * mm

    path = c.beginPath()
    path.moveTo(0, 0)
    path.lineTo(cx_arc, 0)
    path.arcTo(cx_arc - r_arc, cy_arc - r_arc, cx_arc + r_arc, cy_arc + r_arc, startAng=-90, extent=180)
    path.lineTo(0, PAGE_HEIGHT)
    path.close()

    c.setFillColor(COLOR_KAVIBE_DARK)
    c.drawPath(path, fill=True, stroke=False)

    c.setLineWidth(1.0)
    c.setStrokeColor(COLOR_GOLD_ACCENT)
    c.arc(cx_arc - r_arc, cy_arc - r_arc, cx_arc + r_arc, cy_arc + r_arc, startAng=-90, extent=180)

    portrait_size = 38.0 * mm
    px = 68.7 * mm - (portrait_size / 2.0)
    py = cy_arc - (portrait_size / 2.0)
    c.drawImage(portrait_png, px, py, width=portrait_size, height=portrait_size, mask='auto')

    c.setLineWidth(1.0)
    c.setStrokeColor(COLOR_GOLD_ACCENT)
    c.circle(68.7 * mm, cy_arc, (portrait_size / 2.0) + 0.4 * mm, fill=False, stroke=True)

    lx = BLEED + 4.5 * mm

    if white_logo_png and os.path.exists(white_logo_png):
        logo_h = 3.5 * mm
        logo_w = logo_h * (897.0 / 278.0)
        c.drawImage(white_logo_png, lx, PAGE_HEIGHT - BLEED - 5.5 * mm - logo_h, width=logo_w, height=logo_h, mask='auto')

    y_name = PAGE_HEIGHT - BLEED - 21.0 * mm
    c.setFont("Montserrat-Bold", 14.5)
    c.setFillColor(COLOR_WHITE)
    c.drawString(lx, y_name, "Joan E. Apio")

    y_title = y_name - 7.5 * mm
    c.setFont("Montserrat-SemiBold", 4.2)
    c.setFillColor(COLOR_GOLD_LIGHT)
    c.drawString(lx, y_title, "STRATEGIC COMMUNICATOR")
    c.drawString(lx, y_title - 2.2 * mm, "& CREATIVE STORYTELLER")

    c.setFillColor(COLOR_GOLD_ACCENT)
    c.rect(lx, y_title - 7.0 * mm, 8.5 * mm, 0.4 * mm, fill=True, stroke=False)

    c.showPage()  # Finish Page 1 (FRONT)


    # ------------------------------------------
    # PAGE 2: BEAUTIFIED BACK OF CARD (Montserrat Sans-Serif)
    # ------------------------------------------
    c.setFillColor(COLOR_KAVIBE_DARK)
    c.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, fill=True, stroke=False)

    cx_back = PAGE_WIDTH / 2.0
    cy_back = PAGE_HEIGHT / 2.0 - 1.0 * mm

    # Radial Concentric Watermark Rings
    c.setLineWidth(0.2)
    c.setStrokeColor(HexColor("#871E30"))
    for r_mm in [27.0, 33.0, 39.0, 45.0]:
        c.circle(cx_back, cy_back, r_mm * mm, fill=False, stroke=True)

    c.setLineWidth(0.3)
    c.setStrokeColor(HexColor("#9B783C"))
    c.circle(cx_back, cy_back, 20.5 * mm, fill=False, stroke=True)

    # Header Top Left: SKY TOUCH™ (Montserrat Bold)
    c.setFont("Montserrat-Bold", 4.6)
    c.setFillColor(COLOR_WHITE)
    c.drawString(BLEED + 4.5 * mm, PAGE_HEIGHT - BLEED - 5.5 * mm, "SKY TOUCH™")

    c.setFont("Montserrat-Regular", 3.4)
    c.setFillColor(COLOR_GOLD_LIGHT)
    c.drawString(BLEED + 4.5 * mm, PAGE_HEIGHT - BLEED - 7.5 * mm, "NFC DIGITAL IDENTITY")

    # Header Top Right: KAVIBE Logo
    if white_logo_png and os.path.exists(white_logo_png):
        logo_h = 2.8 * mm
        logo_w = logo_h * (897.0 / 278.0)
        c.drawImage(white_logo_png, PAGE_WIDTH - BLEED - 4.5 * mm - logo_w, PAGE_HEIGHT - BLEED - 6.2 * mm, width=logo_w, height=logo_h, mask='auto')

    # Center QR Code Container Box (Curved Rounded Corners!)
    qr_card_size = 25.5 * mm
    corner_r = 3.0 * mm

    c.setFillColor(COLOR_WHITE)
    c.setStrokeColor(COLOR_GOLD_ACCENT)
    c.setLineWidth(0.5)
    c.roundRect(cx_back - (qr_card_size / 2.0), cy_back - (qr_card_size / 2.0), qr_card_size, qr_card_size, corner_r, fill=True, stroke=True)

    qr_size = 21.5 * mm
    c.drawImage(qr_png, cx_back - (qr_size / 2.0), cy_back - (qr_size / 2.0), width=qr_size, height=qr_size, mask='auto')

    # CTA Text Below QR Code (Montserrat Bold)
    y_cta = cy_back - (qr_card_size / 2.0) - 4.2 * mm
    c.setFont("Montserrat-Bold", 4.6)
    c.setFillColor(COLOR_WHITE)
    c.drawCentredString(cx_back, y_cta, "SCAN TO CONNECT WITH JOAN")

    # Sub CTA Text (Montserrat Medium)
    c.setFont("Montserrat-Medium", 3.8)
    c.setFillColor(COLOR_GOLD_LIGHT)
    c.drawCentredString(cx_back, y_cta - 2.2 * mm, "Official Editorial Profile • Portfolio • Direct Contact")

    # Bottom Attribution: DEVELOPED AND MANAGED BY SKYRIX TECHNOLOGIES (Montserrat Regular)
    c.setFont("Montserrat-Regular", 3.6)
    c.setFillColor(HexColor("#B4965F"))
    c.drawCentredString(cx_back, BLEED + 3.8 * mm, "DEVELOPED AND MANAGED BY SKYRIX TECHNOLOGIES")

    c.showPage()  # Finish Page 2 (BACK)

    c.save()
    print(f"Master Print-Ready PDF saved successfully: {PDF_PATH}")

if __name__ == "__main__":
    generate_pdf()
