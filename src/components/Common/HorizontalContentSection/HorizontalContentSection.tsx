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
  const subTitleLines = subTitle.split('\n');
  return (
    <StyledHorizontalContentSection maxWidth="xl">
      <Typography pb={1} pt={2} variant="h4" borderBottom={"1px solid black"}>
        {title}
      </Typography>
      <Divider />
      {subTitleLines.map((line) => (
        <Typography variant="h6" mt={2} mb={2} >
        {line}
      </Typography>
      ))}
      <Button variant="contained" size="small">
        Read More
      </Button>
    </StyledHorizontalContentSection>
  );
};

export default HorizontalContentSectionComponent;
