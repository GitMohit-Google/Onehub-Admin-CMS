import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CustomAccordion = ({ title, children }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${title}-content`} id={`${title}-header`}>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
      </AccordionSummary>
      <AccordionDetails>
        {children.map((item, index) => (
          <div key={index}>{index + 1}. {item}{' '}</div>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
