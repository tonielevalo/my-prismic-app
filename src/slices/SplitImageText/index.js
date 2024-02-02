import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import styles from '@/styles/variables.module.scss';

/**
 * @typedef {import("@prismicio/client").Content.SplitImageTextSlice} SplitImageTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SplitImageTextSlice>} SplitImageTextProps
 * @param {SplitImageTextProps}
 */
const SplitImageText = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className={`${styles.flex} ${styles.items_center} ${styles.justify_center} ${styles.w_screen}`}
        style={{
          backgroundColor: `${slice.primary.backgroundColor}`,
        }}
      >
        <div
          className={`${styles.container} ${styles.grid} ${styles.grid_cols_1} ${styles.grid_cols_2} ${styles.gap_24} ${styles.items_center} ${styles.py_24}`}
        >
        <PrismicNextImage field={slice.primary.image}
          className={`${styles.w_full} ${styles.h_auto} ${styles.rounded_3xl} ${['default'].includes(slice.variation) ? '' : `${styles.order_last}`}`.trim()}
        />
          <div
            className={`${styles.flex} ${styles.flex_col} ${styles.items_start} ${styles.gap_4}`}
            style={{
              color: `${slice.primary.textColor}`,
              textAlign: `${slice.primary.textAlignment}`
            }}
          >
            <PrismicRichText field={slice.primary.text} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitImageText;
