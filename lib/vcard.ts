import { PROFILE_DATA } from './data/profile';

export async function generateVCardStringWithPhoto(): Promise<string> {
  const { name, primaryTitle, contact, badge } = PROFILE_DATA;
  const rawPhone = contact.phone.replace(/[^\d+]/g, '');

  let photoBase64 = '';
  try {
    const response = await fetch('/images/joan/9.jpg');
    if (response.ok) {
      const blob = await response.blob();
      const buffer = await blob.arrayBuffer();
      const bytes = new Uint8Array(buffer);
      let binary = '';
      for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      photoBase64 = btoa(binary);
    }
  } catch (err) {
    console.warn('Could not load contact picture for vCard:', err);
  }

  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Apio;Joan;E.;;',
    `FN:${name}`,
    `ORG:${contact.organization}`,
    `TITLE:${primaryTitle}`,
    `EMAIL;TYPE=INTERNET,WORK:${contact.email}`,
    `TEL;TYPE=CELL,VOICE:${rawPhone}`,
    `URL;TYPE=WORK:${contact.website}`,
    `URL;TYPE=LinkedIn:${contact.linkedin}`,
    `ADR;TYPE=WORK:;;${contact.location};;;`,
    `NOTE:${primaryTitle} | ${badge}`
  ];

  if (photoBase64) {
    lines.push(`PHOTO;ENCODING=b;TYPE=JPEG:${photoBase64}`);
  }

  lines.push('END:VCARD');

  return lines.join('\r\n');
}

export function generateVCardString(): string {
  const { name, primaryTitle, contact, badge } = PROFILE_DATA;
  const rawPhone = contact.phone.replace(/[^\d+]/g, '');

  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Apio;Joan;E.;;',
    `FN:${name}`,
    `ORG:${contact.organization}`,
    `TITLE:${primaryTitle}`,
    `EMAIL;TYPE=INTERNET,WORK:${contact.email}`,
    `TEL;TYPE=CELL,VOICE:${rawPhone}`,
    `URL;TYPE=WORK:${contact.website}`,
    `URL;TYPE=LinkedIn:${contact.linkedin}`,
    `ADR;TYPE=WORK:;;${contact.location};;;`,
    `NOTE:${primaryTitle} | ${badge}`,
    'END:VCARD'
  ].join('\r\n');
}

export async function downloadVCard(): Promise<void> {
  const vcardData = await generateVCardStringWithPhoto();
  const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Joan_E_Apio_Contact.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
