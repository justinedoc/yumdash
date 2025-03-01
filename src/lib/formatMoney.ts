export interface MoneyFormatterOptions {
  currencySymbol?: string;
  decimals?: number;
  showCurrencySymbol?: boolean;
}

/**
 * @param amount - The monetary amount to format.
 * @param options - Configuration options for formatting.
 * @returns A formatted money string.
 *
 * @example
 * formatMoney(1234567.89);
 * // Returns "$1,234,567.89"
 */
export function formatMoney(
  amount: number,
  options: MoneyFormatterOptions = {}
): string {
  const {
    currencySymbol = "₦",
    decimals = 2,
    showCurrencySymbol = true,
  } = options;
  
  const fixed = amount.toFixed(decimals);

  // Insert commas as thousand separators using a regex
  const parts = fixed.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const formattedNumber = parts.join(".");

  return showCurrencySymbol
    ? `${currencySymbol}${formattedNumber}`
    : formattedNumber;
}
