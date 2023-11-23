import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImageView from '@wyn/components/Common/ImageViewComponent/ImageView';
import { StyledProductImage } from './styled';

const ProductImageComponent = () => {
  return (
    <StyledProductImage maxWidth="xl">
      <Box component="div">
        <ImageView src="/images/rectangle.png" alt="Your Image" />
      </Box>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={4} md={4}>
            <ImageView src="/images/group1.png" alt="Your Image" />
          </Grid>
          <Grid item xs={4} md={4}>
            <ImageView src="/images/group1.png" alt="Your Image" />
          </Grid>
          <Grid item xs={4} md={4}>
            <ImageView src="/images/group1.png" alt="Your Image" />
          </Grid>
        </Grid>
      </Box>
    </StyledProductImage>
  );
};

export default ProductImageComponent;
