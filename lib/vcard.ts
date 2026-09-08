import { PROFILE_DATA } from './data/profile';

export function generateVCardString(): string {
  const { name, primaryTitle, contact, badge } = PROFILE_DATA;
  const nameParts = name.split(' ');
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : name;
  const firstName = nameParts.length > 1 ? nameParts.slice(0, -1).join(' ') : '';

  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${lastName};${firstName};;;`,
    `FN:${name}`,
    `ORG:${contact.organization}`,
    `TITLE:${primaryTitle}`,
    `EMAIL;TYPE=INTERNET,WORK:${contact.email}`,
    `TEL;TYPE=CELL,VOICE:${contact.phone}`,
    `URL;TYPE=KAVIBE:${contact.website}`,
    `URL;TYPE=LinkedIn:${contact.linkedin}`,
    `ADR;TYPE=WORK:;;${contact.location};;;`,
    `NOTE:${primaryTitle} | ${badge}`,
    'END:VCARD'
  ].join('\r\n');
}

export function downloadVCard(): void {
  const vcardData = generateVCardString();
  const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Joan_Apio_Contact.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
