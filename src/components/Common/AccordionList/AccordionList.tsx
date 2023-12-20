import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  Checkbox,
  Link,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import { StyledAccordionList } from './styled';
import { APP_COLORS } from '@wyn/styles/colors/colors';

interface AccordionListComponentProps {
  data: any;
}

const AccordionList = ({ data }: AccordionListComponentProps) => {
  const [selectedAccordion, setSelectedAccordion] = useState(0);

  const handleChange = (index: any) => {
    setSelectedAccordion(index === selectedAccordion ? null : index);
  };

  return (
    <StyledAccordionList>
      {data.map((item, index) => (
        <Accordion
          key={index}
          expanded={index === selectedAccordion}
          onChange={() => handleChange(index)}
        >
          <AccordionSummary
            sx={{
              backgroundColor:
                index === selectedAccordion ? '#f0f5ff' : 'inherit', // Light blue if selected
              marginBottom: 0,
              border:
                index === selectedAccordion
                  ? `2px solid ${APP_COLORS.LIGHTBLUE}`
                  : '0px solid #e0e0e0',
              borderRadius: '6px',
              borderTopLeftRadius: index === 0 ? '6px' : '0px',
              borderTopRightRadius: index === 0 ? '6px' : '0px',
              borderBottomLeftRadius: index === data.length - 1 ? '6px' : '0px',
              borderBottomRightRadius:
                index === data.length - 1 ? '6px' : '0px',
            }}
          >
            <FormControlLabel
              value="expanded"
              control={
                <Radio
                  color="primary"
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={
                    <RadioButtonCheckedIcon
                      style={{ color: APP_COLORS.LIGHTBLUE }}
                    />
                  }
                  checked={index === selectedAccordion}
                />
              }
              label=""
            />
            {item.title}
          </AccordionSummary>
          {item.content && <AccordionDetails sx={{background:APP_COLORS.GREY}} >{item.content}</AccordionDetails>}
        </Accordion>
      ))}
    </StyledAccordionList>
  );
};

export default AccordionList;
