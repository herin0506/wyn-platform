import { Button, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { StyledNutrientsDetails } from './styled';

interface NutrientsDetailsComponentProps {
  title: string;
  subTitle: string;
}

const NutrientsDetailsComponent = ({
  title,
  subTitle,
}: NutrientsDetailsComponentProps) => {
  return (
    <StyledNutrientsDetails maxWidth="xl">
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
    </StyledNutrientsDetails>
  );
};

export default NutrientsDetailsComponent;
