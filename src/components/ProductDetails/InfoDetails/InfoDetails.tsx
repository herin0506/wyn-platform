import { Button, Typography } from '@mui/material';
import { StyledInfoDetails } from './styled';

interface InfoDetailsComponentProps {
  title: string;
  subTitle: string;
}

const InfoDetailsComponent = ({
  title,
  subTitle,
}: InfoDetailsComponentProps) => {
  return (
    <StyledInfoDetails maxWidth="xl">
      <Typography pb={3} variant="h4">
        {title}
      </Typography>
      <Typography variant="h6" mb={5}>
        {subTitle}
      </Typography>
      <Button variant="contained" size="small">
        Read More
      </Button>
    </StyledInfoDetails>
  );
};

export default InfoDetailsComponent;
