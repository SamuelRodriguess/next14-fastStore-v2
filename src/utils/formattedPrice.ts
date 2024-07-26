import { useSession } from '@faststore/core/src/sdk/session'
import { useCallback, useMemo } from 'react'


interface PriceFormatterOptions {
  decimals?: boolean
}

export const usePriceFormatter = ({ decimals }: PriceFormatterOptions = {}) => {
  const { currency, locale } = useSession()

  return useCallback(
    (price: number) =>
      Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency.code,
        minimumFractionDigits: decimals ? 2 : 0,
      }).format(price),
    [currency.code, locale, decimals]
  )
}

export const useFormattedPrice = (price: number) => {
  const formatter = usePriceFormatter()

  return useMemo(() => formatter(price), [formatter, price])
}
