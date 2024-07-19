import { SectionOverride } from "@faststore/core";

const SECTION = "ProductDetails" as const;

const override: SectionOverride = {
  section: SECTION,
  components: {
    BuyButton: { props: { size: "small", iconPosition: "right" } },
  },
};

export { override };
