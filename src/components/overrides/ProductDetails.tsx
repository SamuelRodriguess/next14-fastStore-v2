import { SectionOverride } from "@faststore/core";
import CustomBuyButton from "../CustomBuyButton/CustomBuyButton";

const SECTION = "ProductDetails" as const;

const override: SectionOverride = {
  section: SECTION,
  components: {
    BuyButton: {
      /*       props: { size: "small", iconPosition: "right" },
       */ Component: CustomBuyButton,
    },
  },
};

export { override };
