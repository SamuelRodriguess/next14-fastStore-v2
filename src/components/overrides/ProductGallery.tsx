import { SectionOverride } from "@faststore/core";
/* import CustomFilters from "../CustomFilters/Filter";
 */ const SECTION = "ProductGallery" as const;

const override: SectionOverride = {
  section: SECTION,
  components: {
    /*  __experimentalFilterDesktop: { Component: CustomFilters }, */
  },
};

export { override };
