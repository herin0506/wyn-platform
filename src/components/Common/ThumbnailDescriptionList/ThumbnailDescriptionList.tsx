import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import ImageView from '@wyn/components/Common/ImageViewComponent/ImageView';
import { StyledThumbnailDescriptionList } from './styled';

interface dataValidation {
  title: string;
  subTitle: string;
  src: string;
}
interface ThumbnailDescriptionListComponentProps {
  heading: string;
  itemList: dataValidation[];
}
const ThumbnailDescriptionListComponent = ({
  heading,
  itemList,
}: ThumbnailDescriptionListComponentProps) => {


  console.log(itemList);


  return (
    <StyledThumbnailDescriptionList>
      <Container disableGutters maxWidth="lg">
        <Typography pb={3} variant="h4">
          {heading}
        </Typography>
        <Divider />
        <Box>
          {itemList.map((item, index) => (
            <Grid container my={2} key={index}>
              <Grid item xs={2} md={1} p={1}>
                <ImageView alt="image" src={item.src} />
              </Grid>
              <Grid item xs={10} md={11} p={1}>
                <Typography variant="h5">{item.title}</Typography>
                <Typography pb={3} variant="subtitle1">
                  {item.subTitle}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Container>
    </StyledThumbnailDescriptionList>
  );
};

export default ThumbnailDescriptionListComponent;
