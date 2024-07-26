import {
  ProductCard as UIProductCard,
  ProductCardContent as UIProductCardContent,
  ProductCardImage as UIProductCardImage,
} from "@faststore/ui";
import { useMemo } from "react";
import { ImageProps, Image } from "next/image";
import NextLink from "next/link";
import { useFormattedPrice } from "../../utils/formattedPrice";

type Variant = "wide" | "default";

export interface ProductCardProps {
  product: ProductSummary_ProductFragment;
  index: number;
  /**
   * Sets a border to the component.
   */
  bordered?: boolean;
  /**
   * Sets the component's size.
   */
  variant?: Variant;
  /**
   * Specifies the ProductCard image's aspect ratio.
   */
  aspectRatio?: number;
  /**
   * Specifies the ProductCard image's props.
   */
  imgProps?: Partial<ImageProps>;
  /**
   * Specifies Rating Value of the product.
   */
  ratingValue?: number;
  /**
   * Callback function when button is clicked.
   */
  onButtonClick?: () => void;
  /**
   * Specifies the button's label.
   */
  buttonLabel?: string;
  /**
   * Enables a DiscountBadge to the component.
   */
  showDiscountBadge?: boolean;
  /**
   * Define taxes configuration, if taxes should be considered
   */
  taxesConfiguration?: {
    usePriceWithTaxes?: boolean;
    taxesLabel?: string;
  };
}

const CustomProductCard = ({
  product,
  index,
  bordered = true,
  variant = "default",
  aspectRatio = 1,
  imgProps,
  ratingValue,
  buttonLabel = "Add",
  onButtonClick,
  showDiscountBadge = true,
  taxesConfiguration,
  ...otherProps
}: ProductCardProps) => {
  const {
    sku,
    isVariantOf: { name },
    image: [img],
    offers: {
      lowPrice,
      lowPriceWithTaxes,
      offers: [{ listPrice: listPriceBase, availability, listPriceWithTaxes }],
    },
  } = product;

  const outOfStock = useMemo(
    () => availability !== "https://schema.org/InStock",
    [availability]
  );

  const spotPrice = taxesConfiguration?.usePriceWithTaxes
    ? lowPriceWithTaxes
    : lowPrice;
  const listPrice = taxesConfiguration?.usePriceWithTaxes
    ? listPriceWithTaxes
    : listPriceBase;

  const hasDiscount = spotPrice <= listPrice;

  return (
    <UIProductCard
      outOfStock={outOfStock}
      bordered={bordered}
      variant={variant}
      data-fs-product-card-sku={sku}
      {...otherProps}
    >
      <UIProductCardImage aspectRatio={aspectRatio}>
        <Image
          src={img.url}
          alt={img.alternateName}
          sizes={`${imgProps?.sizes ?? "(max-width: 768px) 40vw, 30vw"}`}
          width={imgProps?.width ?? 360}
          height={Math.round((Number(imgProps?.height) || 360) / aspectRatio)}
          loading={imgProps?.loading}
        />
      </UIProductCardImage>
      <UIProductCardContent
        title={name}
        price={{
          value: spotPrice,
          listPrice: listPrice,
          formatter: useFormattedPrice,
        }}
        ratingValue={ratingValue}
        outOfStock={outOfStock}
        onButtonClick={onButtonClick}
        showDiscountBadge={hasDiscount && showDiscountBadge}
        includeTaxes={taxesConfiguration?.usePriceWithTaxes}
        includeTaxesLabel={taxesConfiguration?.taxesLabel}
      />
      <div>teste</div>
    </UIProductCard>
  );
};

export default CustomProductCard;