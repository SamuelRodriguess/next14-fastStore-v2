import { useCallback, useMemo } from "react";

interface PriceFormatterOptions {
  decimals?: boolean;
}

export const usePriceFormatter = ({ decimals }: PriceFormatterOptions = {}) => {
  return useCallback(
    (price: number) =>
      Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      }).format(price),
    [decimals],
  );
};

export const useFormattedPrice = (price: number) => {
  const formatter = usePriceFormatter();

  return useMemo(() => formatter(price), [formatter, price]);
};
