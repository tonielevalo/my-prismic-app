import AccordionUsage from "@/components/Accordion";

/**
 * @typedef {import("@prismicio/client").Content.FrequentlyAskedQuestionsSlice} FrequentlyAskedQuestionsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FrequentlyAskedQuestionsSlice>} FrequentlyAskedQuestionsProps
 * @param {FrequentlyAskedQuestionsProps}
 */
const FrequentlyAskedQuestions = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <AccordionUsage title={slice.primary.title} items={slice.items} />      
    </section>
  );
};

export default FrequentlyAskedQuestions;
