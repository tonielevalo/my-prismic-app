import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.TextBlockSlice} TextBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextBlockSlice>} TextBlockProps
 * @param {TextBlockProps}
 */
const TextBlock = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        style={{
          backgroundColor: `${slice.primary.backgroundColor}`,
          color: `${slice.primary.textColor}`,
          textAlign: `${slice.primary.textAlignment}`
        }}
      >
        <PrismicRichText field={slice.primary.text} />
      </div>
    </section>
  );
};

export default TextBlock;
