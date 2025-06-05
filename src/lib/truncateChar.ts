export function truncateChar(
  text: string,
  maxChars: number,
  ellipsis = "…",
): string {
  const words = text.trim();
  if (words.length <= maxChars) {
    return text;
  }
  return text.slice(0, maxChars) + ellipsis;
}
