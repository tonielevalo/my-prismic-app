"use client";
import React, { useState } from 'react';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import { PrismicNextImage } from "@prismicio/next";
import styles from '@/styles/variables.module.scss';
import { PrismicRichText } from '@prismicio/react';


Modal.setAppElement('#root'); // Required for React Modal

const MyModal = ({label, image, title, body, imageWidth}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        onClick={() => setIsOpen(true)}
        style={{
          color: "#ffffff",
          borderWidth: "1px",
          borderColor: "#ff6700",
          borderRadius: "30px",
          letterSpacing: "0px",
          backgroundColor: "#ff6700",
          padding: "0.3em 1em"
        }}
      >
        {label}
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
          },
          content: {
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px'
          }
        }}
      >
        {/* Modal content here */}
        <div
          className={`${styles.flex} ${styles.flex_col} ${styles.items_center} ${styles.px_2}`}
        >
          <PrismicNextImage 
            field={image}
            className={`${styles.h_auto} ${styles.rounded_3xl}`}
            style={{
              width: `${imageWidth}%`
            }}
          />
          <span 
            style={{
              position: "absolute",
              top: "10px",
              right: "10px"
            }}
          >
            <CloseIcon onClick={() => setIsOpen(false)} />
          </span>
          <h2>{title}</h2>
          <div className={`${styles.textCenter} ${styles.w_50}`}>
            <PrismicRichText field={body} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MyModal;