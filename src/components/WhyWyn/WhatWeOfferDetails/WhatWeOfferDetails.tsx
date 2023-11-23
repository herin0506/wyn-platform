import { Button, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { StyledWhatWeOfferDetails } from './styled';

interface WhatWeOfferDetailsComponentProps {
  title: string;
  subTitle: string;
}

const WhatWeOfferDetailsComponent = ({
  title,
  subTitle,
}: WhatWeOfferDetailsComponentProps) => {
  return (
    <StyledWhatWeOfferDetails maxWidth="xl">
      <Typography pb={3} variant="h4">
        {title}
      </Typography>
      <Divider />
      <Typography variant="h6" mb={5}>
        {subTitle}
      </Typography>
      <Button variant="contained" size="small">
        Read More
      </Button>
    </StyledWhatWeOfferDetails>
  );
};

export default WhatWeOfferDetailsComponent;
