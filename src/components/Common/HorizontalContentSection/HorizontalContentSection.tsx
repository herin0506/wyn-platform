import { Button, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { StyledHorizontalContentSection } from './styled';

interface HorizontalContentSectionComponentProps {
  title: string;
  subTitle: string;
}

const HorizontalContentSectionComponent = ({
  title,
  subTitle,
}: HorizontalContentSectionComponentProps) => {
  return (
    <StyledHorizontalContentSection maxWidth="xl">
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
    </StyledHorizontalContentSection>
  );
};

export default HorizontalContentSectionComponent;
