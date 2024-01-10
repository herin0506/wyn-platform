import { Card, Checkbox, Link, TextField, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import { APP_COLORS } from '@wyn/styles/colors/colors';
import { countries, states, termsAndCondition } from '@wyn/utils/constants';
import { useState } from 'react';
import { StyledLeftDetails } from './styled';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
interface LeftDetailsComponentProps {
  category: string;
  rating: number;
  title: string;
  subTitle: string;
  price: number;
}
const LeftDetailsComponent = ({
  category,
  rating,
  title,
  subTitle,
  price,
}: LeftDetailsComponentProps) => {
  const [isSaveInfoChecked, setSaveInfoChecked] = useState(false);
  const [isTextMeChecked, setTextMeChecked] = useState(false);
  const [isAptSuiteChecked, setAptSuiteChecked] = useState(false);
  const [selectedAccordion, setSelectedAccordion] = useState(null);

  const saveInfolabel = {
    inputProps: { 'aria-label': 'Save Information Checkbox' },
  };
  const textMelabel = { inputProps: { 'aria-label': 'Text Me Checkbox' } };

  const handleSaveInformationCheckboxChange = (event) => {
    setSaveInfoChecked(event.target.checked);
  };
  const handleTextMeCheckboxChange = (event) => {
    setTextMeChecked(event.target.checked);
  };
  const handleAptSuiteClick = () => {
    setAptSuiteChecked(true);
  };
  const handleAccordionChange = (accordion) => {
    setSelectedAccordion(accordion === selectedAccordion ? null : accordion);
  };
  const isAccordionSelected = (accordion) => accordion === selectedAccordion;

  return (
    <StyledLeftDetails>
      <Typography variant="h6">Delivery</Typography>
      <TextField
        fullWidth
        id="outlined-select-currency"
        select
        label="Country/Region"
        defaultValue="ind"
        margin="normal"
      >
        {countries.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        fullWidth
        id="firstname"
        label="First Name"
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        id="lastname"
        label="Last Name"
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        id="company"
        label="Company(Optional)"
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        id="address"
        label="Address"
        variant="outlined"
        margin="normal"
      />

      {!isAptSuiteChecked && (
        <Typography my={3} variant="subtitle2">
          <Link
            onClick={handleAptSuiteClick}
            mb={3}
            sx={{ cursor: 'pointer', color: APP_COLORS.LIGHTBLUE }}
            underline="none"
          >
            + Add apartment, suite, etc.
          </Link>
        </Typography>
      )}

      {isAptSuiteChecked && (
        <TextField
          fullWidth
          id="apt-suite"
          label="Apartment, suite, etc. (optional)"
          variant="outlined"
          margin="normal"
        />
      )}

      <Grid container spacing={1}>
        <Grid item lg={4}>
          <TextField
            fullWidth
            id="city"
            label="City"
            variant="outlined"
            margin="normal"
          />
        </Grid>
        <Grid item lg={4}>
          <TextField
            fullWidth
            id="outlined-select-currency"
            select
            label="State"
            defaultValue="ind"
            margin="normal"
          >
            {states.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item lg={4}>
          <TextField
            fullWidth
            id="pincode"
            label="Pincode"
            variant="outlined"
            margin="normal"
          />
        </Grid>
      </Grid>

      <FormControlLabel
        label="Save this information for next time"
        control={
          <Checkbox
            {...saveInfolabel}
            onChange={handleSaveInformationCheckboxChange}
          />
        }
      />
      <FormControlLabel
        label="Text me with news and offers"
        control={
          <Checkbox {...textMelabel} onChange={handleTextMeCheckboxChange} />
        }
      />
      {isTextMeChecked && (
        <>
          <TextField
            fullWidth
            id="phonenumber"
            label="Mobile phone number"
            variant="outlined"
            margin="normal"
            defaultValue="+91"
          />
          <Typography my={3} variant="subtitle2">
            {termsAndCondition}
          </Typography>
        </>
      )}

      <Typography variant="h6">Shipping method</Typography>
      <Card variant="outlined" className="p-3">
        Standard Free
      </Card>

      <Typography variant="h6">Payment</Typography>
      <Typography variant="subtitle1">
        All transactions are secure and encrypted.
      </Typography>
      <Accordion
        expanded={selectedAccordion === 'panel1'}
        onChange={() => handleAccordionChange('panel1')}
      >
        <AccordionSummary
          sx={{ flexDirection: 'row-reverse' }}
          expandIcon={
            <div>
              {isAccordionSelected('panel1') ? (
                <RadioButtonCheckedIcon style={{ color: 'blue' }} />
              ) : (
                <RadioButtonUncheckedIcon style={{ color: 'blue' }} />
              )}
            </div>
          }
        >
          <Typography>CCAvenue</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            After clicking “Pay now”, you will be redirected to CCAvenue to
            complete your purchase securely.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={selectedAccordion === 'panel2'}
        onChange={() => handleAccordionChange('panel2')}
      >
        <AccordionSummary
          sx={{ flexDirection: 'row-reverse' }}
          expandIcon={
            <div>
              {isAccordionSelected('panel2') ? (
                <RadioButtonCheckedIcon style={{ color: 'blue' }} />
              ) : (
                <RadioButtonUncheckedIcon style={{ color: 'blue' }} />
              )}
            </div>
          }
        >
          <Typography>Cash on Delivery(COD)</Typography>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography>Accordion Content 2</Typography>
        </AccordionDetails> */}
      </Accordion>

      <Typography variant="subtitle1">
        All transactions are secure and encrypted.
      </Typography>
      <Typography variant="h6">Billing Address</Typography>

      <Accordion
        expanded={selectedAccordion === 'panel3'}
        onChange={() => handleAccordionChange('panel3')}
      >
        <AccordionSummary
          sx={{ flexDirection: 'row-reverse' }}
          expandIcon={
            <div>
              {isAccordionSelected('panel3') ? (
                <RadioButtonCheckedIcon style={{ color: 'blue' }} />
              ) : (
                <RadioButtonUncheckedIcon style={{ color: 'blue' }} />
              )}
            </div>
          }
        >
          <Typography>Same as shipping address</Typography>
        </AccordionSummary>
        {/* <AccordionDetails>
          <Typography>
            
          </Typography>
        </AccordionDetails> */}
      </Accordion>

      <Accordion
        expanded={selectedAccordion === 'panel4'}
        onChange={() => handleAccordionChange('panel4')}
      >
        <AccordionSummary
          sx={{ flexDirection: 'row-reverse' }}
          expandIcon={
            <div>
              {isAccordionSelected('panel4') ? (
                <RadioButtonCheckedIcon style={{ color: 'blue' }} />
              ) : (
                <RadioButtonUncheckedIcon style={{ color: 'blue' }} />
              )}
            </div>
          }
        >
          <Typography>Use a different billing address</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Accordion Content 2</Typography>
        </AccordionDetails>
      </Accordion>
    </StyledLeftDetails>
  );
};

export default LeftDetailsComponent;
