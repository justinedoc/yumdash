export const includesIgnoreCase = (text: string, search: string): boolean => {
  return text.toLowerCase().includes(search.toLowerCase());
};
