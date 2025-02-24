export const isValidDate = (date: string | null): boolean => {
  if (!date) return false;
  const parsedDate = new Date(date);
  return parsedDate instanceof Date && !isNaN(parsedDate.getTime());
};
