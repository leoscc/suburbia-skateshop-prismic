import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded className="bg-brand-pink relative h-dvh overflow-hidden text-zinc-800 bg-texture">
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <Heading>
          <PrismicText field={slice.primary.heading} />
        </Heading>
        <PrismicRichText field={slice.primary.body} />
        <PrismicNextLink field={slice.primary.button} />
      </section>
    </Bounded>
  );
};

export default Hero;
