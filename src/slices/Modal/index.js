import { PrismicRichText } from "@prismicio/react";
import { PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import MyModal from "@/components/Modal";
import styles from '@/styles/variables.module.scss';

/**
 * @typedef {import("@prismicio/client").Content.ModalSlice} ModalSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ModalSlice>} ModalProps
 * @param {ModalProps}
 */
const Modal = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className={`${styles.flex} ${styles.items_center} ${styles.justify_center} ${styles.w_screen}`}
      >
        <div
          className={`${styles.container} ${styles.flex} ${styles.items_center} ${styles.justify_center} ${styles.w_screen} ${styles.py_24}`}
        >
          {slice.items.map((item) => {
            return (
              <div
                key={JSON.stringify(item)}
                className={`${styles.flex} ${styles.flex_item} ${styles.flex_col} ${styles.items_center} ${styles.px_2} ${styles.py_24}`}
                style={{
                  alignItems: `flex-${slice.primary.itemsAlignment}`
                }}
              >
                <PrismicNextImage
                  field={item.image}
                  className={`${styles.w_full} ${styles.h_auto} ${styles.rounded_3xl}`}
                  style={{
                    height: `${slice.primary.imageHeight}%`,
                    width: `${slice.primary.imageWidth}%`
                  }}
                />
                <h2
                  style={{
                    color: `${slice.primary.titleColor}`
                  }}
                >
                  {item.title}</h2>
                <div
                  style={{
                    color: `${slice.primary.textColor}`
                  }}
                >
                  <PrismicRichText field={item.body} />
                </div>
                <MyModal
                  image={item.modalImage}
                  label={item.buttonLabel}
                  title={item.modalTitle}
                  body={item.modalBody}
                  imageWidth={item.modalImageWidth}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Modal;
