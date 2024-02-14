"use client";

import { Container, Grid, Box } from '@mui/material';
import React, { useState } from 'react';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

const Accordion = ({ title, items }) => {
  const [activePanel, setActivePanel] = useState(0);

  const handleClick = (index) => {
    setActivePanel(index === activePanel ? null : index);
  };

  return (
    <Container>
      <Box>
        <h3
          style={{
            textAlign: 'center',
            fontSize: '22px',
            paddingBottom: '2em'
          }} 
        >
          {title}
        </h3>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid container md={6}>
          {items.map((item, index) => (
            <>
              <Grid item md={12}>
                <Grid className={`accordion-item ${activePanel === index ? 'active' : ''}`}>
                  <PrismicNextImage field={item.image}
                    width={500}
                    height={500}
                    sizes='(max-width: 768px) 100vw, 33vw'
                    alt='some alt'
                    className='accordion-content'
                  />
                </Grid>
              </Grid>
            </>
          ))}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container md={12}>
            {items.map((item, index) => (
              <>
                <Grid item xs={12}>
                  <div className={`accordion-item ${activePanel === index ? 'active' : ''}`}>
                    <h2 onClick={() => handleClick(index)}>{item.itemtitle}</h2>
                    <div className="accordion-content">
                      <PrismicRichText field={item.content} />
                    </div>
                  </div>
                </Grid>
              </>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Accordion;
