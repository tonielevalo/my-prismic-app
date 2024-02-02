"use client";

import { Box, Container } from '@mui/material';
import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activePanel, setActivePanel] = useState(null);

  const handleClick = (index) => {
    setActivePanel(index === activePanel ? null : index);
  };

  return (
    <Container>
      <Box>
        <div className="accordion">
          {items.map((item, index) => (
            <div key={index} className={`accordion-item ${activePanel === index ? 'active' : ''}`}>
              <h2 onClick={() => handleClick(index)}>{item.title}</h2>
              <div className="accordion-content">{item.content}</div>
            </div>
          ))}
        </div>
      </Box>
    </Container>
  );
};

export default Accordion;
