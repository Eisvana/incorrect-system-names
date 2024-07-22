const systemIndexLength = 3;
const regionGlyphs = ['A21117FF', 'A11117FF', 'A11127FF', 'A21127FF', 'A21107FF', 'A21107FE', 'A21117FE'];

function getRegionNumber(glyphs: string): number {
  const regionGlyphsSubstring = glyphs.slice(4);
  const regionIndex = regionGlyphs.indexOf(regionGlyphsSubstring);
  return regionIndex + 1;
}

export function getPrefix(glyphs: string): string {
  const systemIndexString = glyphs.slice(1, 4);
  const systemIndex = parseInt(systemIndexString, 16);
  const regionNumber = getRegionNumber(glyphs);
  if (!regionNumber || isNaN(systemIndex) || systemIndexString.length !== systemIndexLength) return '';
  const expectedIndex = systemIndex.toString(16).toUpperCase();
  return `EV${regionNumber}-${expectedIndex}`;
}
