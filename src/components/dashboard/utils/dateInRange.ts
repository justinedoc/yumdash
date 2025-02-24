export const dateInRange = (
  testDate: string,
  startDate: string | null,
  endDate: string | null
): boolean => {
  const test = new Date(testDate);
  const start = startDate ? new Date(startDate) : null;
  const end = endDate ? new Date(endDate) : null;

  return (!start || test >= start) && (!end || test <= end);
};
