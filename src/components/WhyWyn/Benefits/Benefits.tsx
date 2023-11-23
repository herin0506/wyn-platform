import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import ImageView from '@wyn/components/Common/ImageViewComponent/ImageView';
import { BenefitsData } from '@wyn/utils/constants';
import { StyledBenefits } from './styled';

const BenefitsComponent = () => {
  return (
    <StyledBenefits>
      <Container disableGutters maxWidth="lg">
        <Typography pb={3} variant="h4">
          {'A Treasure Trove of Benefits'}
        </Typography>
        <Divider />
        <Box>
          {BenefitsData.map((item) => (
            <Grid container my={2}>
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
          ;
        </Box>
      </Container>
    </StyledBenefits>
  );
};

export default BenefitsComponent;
