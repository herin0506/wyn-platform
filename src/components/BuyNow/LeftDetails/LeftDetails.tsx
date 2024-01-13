import {
  Box,
  Button,
  Card,
  Checkbox,
  Link,
  TextField,
  Typography,
  Divider,
} from '@mui/material';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddressComponent from '@wyn/components/BuyNow/Address/Address';
import AccordionComponent from '@wyn/components/Common/AccordionList/AccordionList';
import { useRouter } from 'next/router';
import useMediaQuery from '@mui/material/useMediaQuery';

const LeftDetailsComponent = () => {
  const isDesktopView = useMediaQuery('(min-width:960px)');
  const isMobileTabletView = useMediaQuery('(max-width:959px)');

  const router = useRouter();

  const [isSaveInfoChecked, setSaveInfoChecked] = useState(false);
  const [isTextMeChecked, setTextMeChecked] = useState(false);
  const [isEmailNewsOffersChecked, setEmailNewsOffersChecked] = useState(false);

  const saveInfolabel = {
    inputProps: { 'aria-label': 'Save Information Checkbox' },
  };
  const textMelabel = { inputProps: { 'aria-label': 'Text Me Checkbox' } };
  const emailNewsOfferslabel = {
    inputProps: { 'aria-label': 'Email News Offers Checkbox' },
  };

  const handleSaveInformationCheckboxChange = (event:any) => {
    setSaveInfoChecked(event.target.checked);
  };
  const handleTextMeCheckboxChange = (event:any) => {
    setTextMeChecked(event.target.checked);
  };
  const handleEmailNewsOffersCheckboxChange = (event:any) => {
    setEmailNewsOffersChecked(event.target.checked);
  };
  const handleNaviagte = () => {
    router.push('/login');
  };

  const handlePayNow = () => {};

  const paymentAccordionData = [
    {
      title: (
        <Typography display={'flex'} alignItems={'center'}>
          CCAvenue
        </Typography>
      ),
      content: (
        <Typography display={'flex'} alignItems={'center'}>
          After clicking “Pay now”, you will be redirected to CCAvenue to
          complete your purchase securely.
        </Typography>
      ),
    },
    {
      title: (
        <Typography display={'flex'} alignItems={'center'}>
          Cash on Delivery(COD)
        </Typography>
      ),
      content: null,
    },
    // Add more items as needed
  ];
  const addressAccordionData = [
    {
      title: (
        <Typography display={'flex'} alignItems={'center'}>
          Same as shipping address
        </Typography>
      ),
      content: null,
    },
    {
      title: (
        <Typography display={'flex'} alignItems={'center'}>
          Use a different billing address
        </Typography>
      ),
      content: <AddressComponent />,
    },
    // Add more items as needed
  ];

  const isLoggedIn = false;
  return (
    <StyledLeftDetails className="col-md-10" >
      {isLoggedIn ? (
        <Accordion elevation={0} className="w-100">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="p-0"
          >
            <Box>
              <Typography>Account</Typography>
              <Typography>useremail@git.com</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails className="p-0">
            <Typography variant="subtitle1">
              <Link
                onClick={handleNaviagte}
                sx={{ cursor: 'pointer', color: APP_COLORS.LIGHTBLUE }}
              >
                Logout
              </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ) : (
        <>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="end"
            width="100%"
          >
            <Typography variant="h4" mb={1}>
              Contact
            </Typography>
            <Typography variant="subtitle1" mt={3} mb={1}>
              Have an account?
              <Link
                onClick={handleNaviagte}
                sx={{ cursor: 'pointer', color: APP_COLORS.LIGHTBLUE }}
              >
                Login
              </Link>
            </Typography>
          </Box>
          <TextField
            fullWidth
            id="email-mobile"
            label="Email or mobile phone number"
            variant="outlined"
            margin="none"
            className="my-2"
          />
        </>
      )}

      <Divider sx={{ borderBottom: '2px solid black', margin: '15px 0px' }} />
      <Box display={'inline-flex'} alignItems={'center'} width="100%">
        <Checkbox
          {...emailNewsOfferslabel}
          onChange={handleEmailNewsOffersCheckboxChange}
        />
        <Typography my={0} variant="subtitle1">
          Email me with news and offers
        </Typography>
      </Box>

      <Typography variant="h4" mt={3} mb={1}>
        Delivery
      </Typography>

      <AddressComponent />

      <Box display={'inline-flex'} alignItems={'center'} width="100%">
        <Checkbox
          {...saveInfolabel}
          onChange={handleSaveInformationCheckboxChange}
        />
        <Typography my={0} variant="subtitle1">
          Save this information for next time
        </Typography>
      </Box>

      <Box display={'inline-flex'} alignItems={'center'} width="100%">
        <Checkbox {...textMelabel} onChange={handleTextMeCheckboxChange} />
        <Typography my={0} variant="subtitle1">
          Text me with news and offers
        </Typography>
      </Box>

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

      <Typography variant="h5" mt={3} mb={1}>
        Shipping method
      </Typography>
      <Card variant="outlined" className="p-3">
        Standard Free
      </Card>

      <Typography variant="h4" mt={3} mb={0}>
        Payment
      </Typography>
      <Typography variant="subtitle1" mb={2}>
        All transactions are secure and encrypted.
      </Typography>

      <AccordionComponent data={paymentAccordionData} />

      <Typography variant="h4" mt={3} mb={1}>
        Billing Address
      </Typography>

      <AccordionComponent data={addressAccordionData} />

      {isDesktopView && (
        <Button
          variant="contained"
          size="large"
          color="info"
          onClick={handlePayNow}
          fullWidth
          className="mt-4"
        >
          Pay Now
        </Button>
      )}
    </StyledLeftDetails>
  );
};

export default LeftDetailsComponent;
