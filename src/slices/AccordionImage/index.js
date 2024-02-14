import Accordion from "@/components/AccordionWithImage";

/**
 * @typedef {import("@prismicio/client").Content.AccordionImageSlice} AccordionImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AccordionImageSlice>} AccordionImageProps
 * @param {AccordionImageProps}
 */
const AccordionImage = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Accordion title={slice.primary.title} items={slice.items} />
    </section>
  );
};

export default AccordionImage;
