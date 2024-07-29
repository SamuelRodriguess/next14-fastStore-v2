import styles from "./styles/CustomProductCard.module.scss";
import "@faststore/ui/src/components/molecules/ProductCard/styles.scss";

import {
  ProductCard as UIProductCard,
  ProductCardImage as UIProductCardImage,
  SkuSelector as UISkuSelector,
} from "@faststore/ui";
import { useMemo } from "react";
import { ImageProps } from "next/image";
import { Image } from "../Image";
import { ProductCardContent as UIProductCardContent } from "../ProductCardContent/ProductCardContent";
import { useFormattedPrice } from "../../utils/formattedPrice";

/* import Image from "next/image";

import { useFormattedPrice } from "../../utils/formattedPrice";
 */
type Variant = "wide" | "default";

export interface ProductCardProps {
  product: any;
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
  } = product as any;
  console.log("🚀 ~ product:", product);

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

  console.log("🚀 ~ listPrice:", listPrice);

  const hasDiscount = spotPrice <= listPrice;

  const product2 = {
    name: "Tech Shirt",
    isVariantOf: {
      name: "Tech Shirt",
      productGroupID: "99995945",
      skuVariants: {
        activeVariations: {
          Size: "40",
        },
        slugsMap: {
          "Size-40": "tech-shirt-99988216",
          "Size-41": "tech-shirt-99988212",
          "Size-42": "tech-shirt-99988210",
        },
        availableVariations: {
          Size: [
            {
              alt: "skuvariation",
              label: "Size: 40",
              value: "40",
            },
            {
              alt: "skuvariation",
              label: "Size: 41",
              value: "41",
            },
            {
              alt: "skuvariation",
              label: "Size: 42",
              value: "42",
              disabled: true,
            },
          ],
        },
      },
    },
  };

  return (
    <UIProductCard
      outOfStock={outOfStock}
      bordered={bordered}
      variant={variant}
      data-fs-product-card-sku={sku}
      className={styles.CustomProductCard}
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
        linkProps={{
          href: product?.slug,
          target: "_blank",
          rel: "noopener noreferrer",
        }}
        outOfStock={outOfStock}
      />

      <UISkuSelector
        skuPropertyName="Size"
        availableVariations={
          product2?.isVariantOf?.skuVariants?.availableVariations
        }
        activeVariations={product2.isVariantOf.skuVariants?.activeVariations}
        slugsMap={product2.isVariantOf.skuVariants?.slugsMap}
      />
    </UIProductCard>
  );
};

export default CustomProductCard;
