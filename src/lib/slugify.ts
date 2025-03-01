/**
 * @param input - The string to be slugified.
 * @returns The slugified string.
 */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, "") // Remove invalid characters.
    .replace(/\s+/g, "-") // Replace whitespace with hyphens.
    .replace(/-+/g, "-"); // Collapse multiple hyphens into one.
}
