"use client";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PrismicRichText } from '@prismicio/react';


import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function AccordionUsage({title, items}) {
  return (
    <Container>
      <Box>
       <h3
          style={{
            textAlign: 'center',
            fontSize: '22px',
            paddingBottom: '2em'
          }} 
        >{title}</h3>
        {items.map((item, index) => {
          return (
            <Accordion defaultExpanded={index === 0 ? true : false} key={JSON.stringify(item)}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {item.title}
              </AccordionSummary>
              <AccordionDetails>
                <PrismicRichText field={item.content} />
              </AccordionDetails>
            </Accordion>
          )
        })}
      </Box>
    </Container>
  );
}
