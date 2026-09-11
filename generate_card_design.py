import os
import math
import qrcode
from PIL import Image, ImageDraw, ImageFont, ImageOps, ImageFilter

OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))
FRONT_PNG = os.path.join(OUTPUT_DIR, "card_front_preview.png")
BACK_PNG = os.path.join(OUTPUT_DIR, "card_back_preview.png")

# Dimensions for 300 DPI CR80 with 3mm bleed
WIDTH = 1082
HEIGHT = 708
BLEED = 35
SAFE_MARGIN = BLEED + 41

# Brand Color Palette (Burgundy, Charcoal Black, Off-White, Gold Accent)
COLOR_KAVIBE_PRIMARY = (161, 36, 58)      # #A1243A Rich Crimson Burgundy
COLOR_KAVIBE_DARK = (104, 20, 35)         # #681423 Deep Wine Burgundy
COLOR_CHARCOAL = (25, 22, 21)             # #191615 Deep Charcoal Black
COLOR_OFF_WHITE = (250, 248, 245)         # #FAF8F5 Warm Off-White Space
COLOR_GOLD_ACCENT = (197, 160, 89)        # #C5A059 Restrained Brass / Gold
COLOR_GOLD_LIGHT = (229, 200, 135)        # #E5C887 Soft Gold
COLOR_WHITE = (255, 255, 255)

# Fonts (Montserrat Sans-Serif Across All Elements)
FONTS_DIR = os.path.join(OUTPUT_DIR, "fonts_cache")
FONT_SANS_BOLD = os.path.join(FONTS_DIR, "Montserrat-Bold.ttf")
FONT_SANS_SEMIBOLD = os.path.join(FONTS_DIR, "Montserrat-SemiBold.ttf")
FONT_SANS_MEDIUM = os.path.join(FONTS_DIR, "Montserrat-Medium.ttf")
FONT_SANS_REG = os.path.join(FONTS_DIR, "Montserrat-Regular.ttf")

def get_font(font_path, size):
    try:
        return ImageFont.truetype(font_path, size)
    except Exception as e:
        print(f"Font load fallback for {font_path}: {e}")
        return ImageFont.load_default()

def draw_text_spaced(draw, position, text, font, fill, spacing=2):
    x, y = position
    for char in text:
        draw.text((x, y), char, font=font, fill=fill)
        bbox = font.getbbox(char)
        char_w = bbox[2] - bbox[0] if bbox else font.getlength(char)
        x += char_w + spacing
    return x

def get_text_spaced_width(text, font, spacing=2):
    total = 0
    for char in text:
        bbox = font.getbbox(char)
        char_w = bbox[2] - bbox[0] if bbox else font.getlength(char)
        total += char_w + spacing
    return total - spacing if text else 0


# ==========================================
# 1. FRONT CARD (Montserrat Sans-Serif)
# ==========================================
def render_front():
    img = Image.new("RGB", (WIDTH, HEIGHT), COLOR_OFF_WHITE)

    cx_arc = 160
    cy_arc = HEIGHT // 2
    r_arc = 510

    bg_mask = Image.new("L", (WIDTH, HEIGHT), 0)
    mask_draw = ImageDraw.Draw(bg_mask)
    
    mask_draw.rectangle([0, 0, cx_arc, HEIGHT], fill=255)
    mask_draw.ellipse([cx_arc - r_arc, cy_arc - r_arc, cx_arc + r_arc, cy_arc + r_arc], fill=255)

    burgundy_img = Image.new("RGB", (WIDTH, HEIGHT), COLOR_KAVIBE_DARK)
    img.paste(burgundy_img, (0, 0), bg_mask)

    draw = ImageDraw.Draw(img)

    draw.arc([cx_arc - r_arc, cy_arc - r_arc, cx_arc + r_arc, cy_arc + r_arc], start=-90, end=90, fill=COLOR_GOLD_ACCENT, width=4)
    draw.arc([cx_arc - r_arc - 4, cy_arc - r_arc - 4, cx_arc + r_arc + 4, cy_arc + r_arc + 4], start=-85, end=85, fill=COLOR_GOLD_LIGHT, width=1)

    photo_path = os.path.join(OUTPUT_DIR, "public", "images", "joan", "9.jpg")
    if os.path.exists(photo_path):
        portrait_src = Image.open(photo_path).convert("RGBA")
        pw, ph = portrait_src.size
        crop_size = min(pw, ph)
        crop_box = ((pw - crop_size) // 2, (ph - crop_size) // 2, (pw + crop_size) // 2, (ph + crop_size) // 2)
        portrait_cropped = portrait_src.crop(crop_box)
        
        circle_diam = 450
        portrait_resized = portrait_cropped.resize((circle_diam, circle_diam), Image.Resampling.LANCZOS)
        
        mask = Image.new("L", (circle_diam, circle_diam), 0)
        p_mask_draw = ImageDraw.Draw(mask)
        p_mask_draw.ellipse((0, 0, circle_diam, circle_diam), fill=255)
        
        circular_portrait = Image.new("RGBA", (circle_diam, circle_diam), (0, 0, 0, 0))
        circular_portrait.paste(portrait_resized, (0, 0), mask)
        
        px = int(WIDTH * 0.75) - circle_diam // 2
        py = cy_arc - circle_diam // 2
        img.paste(circular_portrait, (px, py), circular_portrait)
        
        draw.ellipse([px - 5, py - 5, px + circle_diam + 5, py + circle_diam + 5], outline=COLOR_GOLD_ACCENT, width=4)
        draw.ellipse([px - 12, py - 12, px + circle_diam + 12, py + circle_diam + 12], outline=(225, 215, 200), width=1)

    left_x = SAFE_MARGIN + 20
    
    logo_path = os.path.join(OUTPUT_DIR, "public", "logo", "kavibe.png")
    if os.path.exists(logo_path):
        logo_img = Image.open(logo_path).convert("RGBA")
        r, g, b, a = logo_img.split()
        white_logo = Image.merge("RGBA", (Image.new("L", r.size, 255), Image.new("L", r.size, 255), Image.new("L", r.size, 255), a))
        
        lw, lh = white_logo.size
        target_h = 42
        target_w = int(lw * (target_h / lh))
        logo_resized = white_logo.resize((target_w, target_h), Image.Resampling.LANCZOS)
        
        logo_y = SAFE_MARGIN + 15
        img.paste(logo_resized, (left_x, logo_y), logo_resized)

    font_name = get_font(FONT_SANS_BOLD, 50)
    name_y = SAFE_MARGIN + 175
    draw.text((left_x, name_y), "Joan E. Apio", font=font_name, fill=COLOR_WHITE)
    
    font_title = get_font(FONT_SANS_SEMIBOLD, 14)
    title_y = name_y + 80
    draw_text_spaced(draw, (left_x, title_y), "STRATEGIC COMMUNICATOR", font_title, COLOR_GOLD_LIGHT, spacing=2)
    draw_text_spaced(draw, (left_x, title_y + 25), "& CREATIVE STORYTELLER", font_title, COLOR_GOLD_LIGHT, spacing=2)
    
    bar_y = title_y + 68
    draw.rectangle([left_x, bar_y, left_x + 95, bar_y + 4], fill=COLOR_GOLD_ACCENT)

    draw.rectangle([BLEED, BLEED, WIDTH - BLEED, HEIGHT - BLEED], outline=(225, 215, 200), width=1)

    img.save(FRONT_PNG, "PNG")


# ==========================================
# 2. BACK CARD (Strictly Montserrat Sans-Serif Font Matching Front)
# ==========================================
def render_back():
    img = Image.new("RGB", (WIDTH, HEIGHT), COLOR_KAVIBE_DARK)
    draw = ImageDraw.Draw(img)

    cx, cy = WIDTH // 2, HEIGHT // 2 - 15
    for r_bg, width_bg, alpha_color in [(320, 1, (135, 30, 48)), (390, 1, (125, 25, 42)), (460, 2, (155, 35, 52)), (540, 1, (120, 22, 38))]:
        draw.ellipse([cx - r_bg, cy - r_bg, cx + r_bg, cy + r_bg], outline=alpha_color, width=width_bg)

    draw.ellipse([cx - 240, cy - 240, cx + 240, cy + 240], outline=(155, 120, 60), width=1)

    # Top Left Header: SKY TOUCH™ (Montserrat Bold)
    font_sky = get_font(FONT_SANS_BOLD, 16)
    sky_text = "SKY TOUCH™"
    sky_x = SAFE_MARGIN + 12
    sky_y = SAFE_MARGIN + 12
    draw_text_spaced(draw, (sky_x, sky_y), sky_text, font_sky, COLOR_WHITE, spacing=2)
    
    sky_w = get_text_spaced_width(sky_text, font_sky, spacing=2)
    icon_x = sky_x + sky_w + 14
    icon_cy = sky_y + 9
    for r in range(6, 18, 5):
        draw.arc([icon_x + r - 16, icon_cy - r, icon_x + r, icon_cy + r], start=-45, end=45, fill=COLOR_GOLD_LIGHT, width=2)

    font_tag = get_font(FONT_SANS_REG, 10)
    draw.text((sky_x, sky_y + 24), "NFC DIGITAL IDENTITY", fill=COLOR_GOLD_LIGHT, font=font_tag)

    logo_path = os.path.join(OUTPUT_DIR, "public", "logo", "kavibe.png")
    if os.path.exists(logo_path):
        logo_img = Image.open(logo_path).convert("RGBA")
        r, g, b, a = logo_img.split()
        white_logo = Image.merge("RGBA", (Image.new("L", r.size, 255), Image.new("L", r.size, 255), Image.new("L", r.size, 255), a))
        
        lw, lh = white_logo.size
        target_h = 34
        target_w = int(lw * (target_h / lh))
        logo_resized = white_logo.resize((target_w, target_h), Image.Resampling.LANCZOS)
        
        logo_x = WIDTH - SAFE_MARGIN - target_w - 10
        logo_y = SAFE_MARGIN + 8
        img.paste(logo_resized, (logo_x, logo_y), logo_resized)

    # Center QR Code
    site_url = "https://joan-apio-portfolio.vercel.app"
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=1,
    )
    qr.add_data(site_url)
    qr.make(fit=True)
    qr_img = qr.make_image(fill_color=COLOR_CHARCOAL, back_color=COLOR_WHITE).convert("RGBA")
    
    qr_size = 250
    qr_resized = qr_img.resize((qr_size, qr_size), Image.Resampling.LANCZOS)
    
    card_w, card_h = 305, 305
    card_box = [cx - card_w // 2, cy - card_h // 2, cx + card_w // 2, cy + card_h // 2]
    
    corner_radius = 32
    draw.rounded_rectangle([card_box[0] - 4, card_box[1] - 4, card_box[2] + 4, card_box[3] + 4], radius=corner_radius + 4, outline=(160, 130, 70), width=1)
    draw.rounded_rectangle(card_box, radius=corner_radius, fill=COLOR_WHITE, outline=COLOR_GOLD_ACCENT, width=2)
    
    qr_mask = Image.new("L", (qr_size, qr_size), 0)
    q_mask_draw = ImageDraw.Draw(qr_mask)
    q_mask_draw.rounded_rectangle([0, 0, qr_size, qr_size], radius=16, fill=255)
    
    qr_composite = Image.new("RGBA", (qr_size, qr_size), (255, 255, 255, 0))
    qr_composite.paste(qr_resized, (0, 0), qr_mask)
    
    img.paste(qr_composite, (cx - qr_size // 2, cy - qr_size // 2), qr_composite)

    # CTA Text Below QR Code (Montserrat Bold)
    cta_y = cy + card_h // 2 + 20
    font_cta = get_font(FONT_SANS_BOLD, 16)
    cta_text = "SCAN TO CONNECT WITH JOAN"
    cta_w = get_text_spaced_width(cta_text, font_cta, spacing=3)
    draw_text_spaced(draw, (cx - cta_w // 2, cta_y), cta_text, font_cta, COLOR_WHITE, spacing=3)

    # Sub CTA Text (Montserrat Medium - Strictly matching front sans-serif!)
    font_subcta = get_font(FONT_SANS_MEDIUM, 13)
    sub_text = "Official Editorial Profile • Portfolio • Direct Contact"
    sub_w = draw.textlength(sub_text, font=font_subcta)
    draw.text((cx - sub_w // 2, cta_y + 26), sub_text, fill=COLOR_GOLD_LIGHT, font=font_subcta)

    # Footer Attribution (Montserrat Regular)
    font_foot = get_font(FONT_SANS_REG, 12)
    foot_text = "DEVELOPED AND MANAGED BY SKYRIX TECHNOLOGIES"
    foot_w = draw.textlength(foot_text, font=font_foot)
    draw.text((cx - foot_w // 2, HEIGHT - SAFE_MARGIN - 18), foot_text, fill=(180, 150, 95), font=font_foot)

    draw.rectangle([BLEED, BLEED, WIDTH - BLEED, HEIGHT - BLEED], outline=(120, 22, 38), width=1)

    img.save(BACK_PNG, "PNG")
    print(f"Back card saved: {BACK_PNG}")

if __name__ == "__main__":
    render_front()
    render_back()
