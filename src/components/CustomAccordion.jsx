import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const dateUpdated = "date";
const updatedBy = "Update";
const options = "Options";

const level = 1;


const CustomAccordion = ({ title, children }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${title}-content`} id={`${title}-header`}>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
      </AccordionSummary>
      <AccordionDetails>
        {/* Table Header */}
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left p-2">Title</th>
              <th className="text-left p-2">Date Updated</th>
              <th className="text-left p-2">Updated By</th>
              <th className="text-left p-2">Options</th>
            </tr>
          </thead>
          <tbody>
            {children.map((item, index) => (
              <tr key={index}>
                <td className="p-2">{index+1}. {item}</td>
                <td className="p-2">{dateUpdated}</td>
                <td className="p-2">{updatedBy}</td>
                <td className="p-2">{options}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </AccordionDetails> 
      {/* <AccordionDetails>
        {children.map((item, index) => (
          <div key={index}>{index + 1}. {item}{' '} 
          </div>
        ))}
      </AccordionDetails> */}
    </Accordion>
  );
};

export default CustomAccordion;
