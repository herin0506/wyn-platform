import { Link, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import { APP_COLORS } from '@wyn/styles/colors/colors';
import { countries, states } from '@wyn/utils/constants';
import { useState } from 'react';
import { StyledAddress } from './styled';

const AddressComponent = () => {
  const [isAptSuiteChecked, setAptSuiteChecked] = useState(false);

  const handleAptSuiteClick = () => {
    setAptSuiteChecked(true);
  };
  return (
    <StyledAddress>
      {/* ADDress */}
      <TextField
        fullWidth
        id="outlined-select-currency"
        select
        label="Country/Region"
        defaultValue="ind"
        margin="none"
        className="my-2"
      >
        {countries.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Grid container spacing={1}>
        <Grid item xs={12} lg={6}>
          <TextField
            fullWidth
            id="firstname"
            label="First Name"
            variant="outlined"
            margin="none"
            className="mb-0 mt-2 my-lg-2"
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            fullWidth
            id="lastname"
            label="Last Name"
            variant="outlined"
            margin="none"
            className="my-2"
          />
        </Grid>
      </Grid>

      <TextField
        fullWidth
        id="company"
        label="Company(Optional)"
        variant="outlined"
        margin="none"
        className="my-2"
      />
      <TextField
        fullWidth
        id="address"
        label="Address"
        variant="outlined"
        margin="none"
        className="my-2"
      />

      {!isAptSuiteChecked && (
        <Typography my={1} variant="subtitle2">
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
          margin="none"
          className="my-2"
        />
      )}

      <Grid container spacing={1}>
        <Grid item xs={12} lg={4}>
          <TextField
            fullWidth
            id="city"
            label="City"
            variant="outlined"
            margin="none"
            className="my-2"
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextField
            fullWidth
            id="outlined-select-currency"
            select
            label="State"
            defaultValue="MH"
            margin="none"
            className="my-2"
          >
            {states.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextField
            fullWidth
            id="pincode"
            label="Pincode"
            variant="outlined"
            margin="none"
            className="my-2"
          />
        </Grid>
      </Grid>
      {/*  */}
    </StyledAddress>
  );
};

export default AddressComponent;
