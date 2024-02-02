"use client";

import { PrismicNextImage } from "@prismicio/next";
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '@/styles/variables.module.scss';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

/**
 * @typedef {import("@prismicio/client").Content.SwiperSlice} SwiperSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SwiperSlice>} SwiperProps
 * @param {SwiperProps}
 */
const Slider = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container>
        <div
          className={`${styles.flex} ${styles.items_center} ${styles.justify_center}`}
          style={{
            backgroundColor: `${slice.primary.backgroundColor}`,
          }}
        >
          <div
            className={`${styles.container} ${styles.flex} ${styles.items_center} ${styles.justify_center} ${styles.w_screen} ${styles.py_24}`}
            style={{
              height: '450px'
            }}
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              className="mySwiper"
              style={{
                width: '100%',
                height: '100%',
                textAlign: 'center',
                fontSize: '18px',
                /* Center slide text vertically */
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            >
              {slice.items.map((item) => {
                return (
                  <div
                    key={JSON.stringify(item)}
                    className={`${styles.flex} ${styles.flex_item} ${styles.items_center} ${styles.flex_col} ${styles.items_center} ${styles.px_2} ${styles.py_24}`}
                  >
                    <SwiperSlide>
                      <PrismicNextImage
                        field={item.image}
                        className={`${styles.w_full} ${styles.h_auto} ${styles.rounded_3xl}`}
                        style={{
                          width: `${slice.primary.imageWidth}%`
                        }}
                      />
                    </SwiperSlide>
                  </div>
                )
              })}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Slider;
