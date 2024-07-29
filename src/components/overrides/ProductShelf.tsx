import { SectionOverride } from "@faststore/core";
const SECTION = "ProductShelf" as const;

const override: SectionOverride = {
  section: SECTION,
  components: {
    /* ProductShelf: { Component: CustomShelf },  */
  },
};

export { override };
