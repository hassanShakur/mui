import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string | boolean>(false);

  const panelExpansionHandler = (
    isExpanded: boolean,
    panel: string
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={(_: any, isExpanded: boolean) =>
          panelExpansionHandler(isExpanded, 'panel1')
        }
      >
        <AccordionSummary id='panel-1' expandIcon='More'>
          <Typography>Lorem 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officiis, provident rerum minus corporis eius quae! Enim
            labore sint amet! Voluptatem accusantium sit eius quam rem
            deserunt consectetur magnam. Porro, nesciunt!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel2'}
        onChange={(_: any, isExpanded: boolean) =>
          panelExpansionHandler(isExpanded, 'panel2')
        }
      >
        <AccordionSummary id='panel-2' expandIcon='More'>
          <Typography>Lorem 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officiis, provident rerum minus corporis eius quae! Enim
            labore sint amet! Voluptatem accusantium sit eius quam rem
            deserunt consectetur magnam. Porro, nesciunt!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAccordion;
