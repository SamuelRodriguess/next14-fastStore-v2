import styles from "../CustomProductCard/styles/CustomProductCard.module.scss";
import React from "react";
import { ProductCardContentProps, Link, Price } from "@faststore/ui";
import { useFormattedPrice } from "../../utils/formattedPrice";

export function ProductCardContent(props: ProductCardContentProps) {
  return (
    <div className={styles.CardContent} data-fs-product-card-content {...props}>
      <div data-fs-product-card-heading>
        <h3 data-fs-product-card-title>
          <Link href={props?.linkProps?.href + "/p"}>
            <p>{props?.title}</p>
          </Link>
        </h3>
        {props?.outOfStock === false ? (
          <div className={styles.DivPrices}>
            <div className={styles.DivPriceProduct}>
              <Price
                className={styles.ValuePrice}
                value={props?.price?.value || 0}
                data-value={props?.price?.value || 0}
                formatter={useFormattedPrice}
              />

              <Price
                className={styles.SellignPrice}
                variant="listing"
                data-fs-product-card-prices
                value={props?.price?.listPrice || 0}
                data-value={props?.price?.listPrice || 0}
                formatter={useFormattedPrice}
              />
            </div>
          </div>
        ) : (
          <div className={styles.DivContentUnavaible}>
            <p className={styles.txtUnavaible}>
              {" "}
              Produto indisponível para entrega{" "}
            </p>
            <p className={styles.txtLinkUnavaible}>Avise-me</p>
          </div>
        )}
      </div>
    </div>
  );
}
