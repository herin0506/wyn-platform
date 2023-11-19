import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface PlaceHolderComponentProps {
  content: string;
}

const StyledPlaceHolderComponent = styled(Box)(() => ({
  minHeight: 800,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  '& img': {
    width: 200,
  },
}));

const PlaceHolderComponent = ({ content }: PlaceHolderComponentProps) => {
  return (
    <StyledPlaceHolderComponent>
      <Box mb={3}>
        <img
          alt="place-holder"
          src="https://img.freepik.com/free-vector/web-design-production-maintenance-websites-web-graphic-interface-design-responsive-website-software-engineering-development-colorful-icon_335657-2699.jpg?w=1380&t=st=1699539145~exp=1699539745~hmac=1625a5d3642684ec989ca7ee4dd72a795263d3ffd048b157146d7b9d2646c1a0"
        />
      </Box>
      <Box>
        <Typography textAlign="center" variant="h5">
          {content}
        </Typography>
      </Box>
    </StyledPlaceHolderComponent>
  );
};

export default PlaceHolderComponent;
