import { SectionOverride } from "@faststore/core";
import CustomToastIconSuccess from "../CustomToastIconSuccess/CustomToastIconSuccess";
import NewsletterHeader from "../CustomNewsletter/HeaderNewsletter";

const SECTION = "Newsletter" as const;

const override: SectionOverride = {
  section: SECTION,
  components: {
    NewsletterHeader: { Component: NewsletterHeader },
    ToastIconSuccess: { Component: CustomToastIconSuccess },
    Button: { props: { size: "regular", iconPosition: "left" } },
  },
};

export { override };
