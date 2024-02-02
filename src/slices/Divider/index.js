import variables from '@/styles/variables.module.scss'
/**
 * @typedef {import("@prismicio/client").Content.DividerSlice} DividerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DividerSlice>} DividerProps
 * @param {DividerProps}
 */
const Divider = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={`${variables.flex} ${variables.items_center} ${variables.justify_center} ${variables.w_screen}`}
        style={{
          backgroundColor: slice.primary.backgroundColor,
          height: `${slice.primary.thickness}px`,
          marginTop: `${slice.primary.spaceAbove}px`,
          marginBottom: `${slice.primary.spaceBelow}px`
        }}
      >
      </div>
    </section>
  );
};

export default Divider;
