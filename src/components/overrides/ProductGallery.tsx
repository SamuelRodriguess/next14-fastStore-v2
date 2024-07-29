import { SectionOverride } from "@faststore/core";
import CustomProductCard from "../CustomProductCard";
const SECTION = "ProductGallery" as const;

const override: SectionOverride = {
  section: SECTION,
  components: {
    __experimentalProductCard: { Component: CustomProductCard },
  },
};

export { override };
