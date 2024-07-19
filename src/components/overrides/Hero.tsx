import { SectionOverride } from "@faststore/core";

const SECTION = "Hero" as const;

const override: SectionOverride = {
  section: SECTION,
  components: {
    HeroHeader: {
      props: {
        title: "Bem-vindo ao nosso site!",
        subtitle: "Subtitulo Bem-vindo ao nosso site",
      },
    },
  },
};

export { override };
