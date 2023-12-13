import React from 'react';
import CollectionInfoComponent from '@wyn/components/Common/CollectionInfo/CollectionInfo';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProductCardComponent from '@wyn/components/Common/ProductCard/ProductCard';
import { dailyWellnessProduct } from '@wyn/utils/constants';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

const StyledCollectionPageContainer = styled(Container)(() => ({
  paddingTop: 150,
  paddingBottom: 150,
}));

const DailyHealth = () => {
  return (
    <StyledCollectionPageContainer maxWidth="xl">
      <CollectionInfoComponent
        title="Everyday Wellness"
        subTitle="We ensure affordability: WYN's Menstrual Hygiene Products"
        infoContent="Empowering Women's Health: Menstrual Hygiene Products"
      />
      <Box mt={4}>
        <Grid container spacing={5}>
          {dailyWellnessProduct.map((product) => (
            <Grid key={product?._id} item md={3}>
              <ProductCardComponent {...product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </StyledCollectionPageContainer>
  );
};

export default DailyHealth;
