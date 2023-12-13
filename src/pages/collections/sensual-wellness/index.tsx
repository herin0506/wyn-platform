import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import CollectionInfoComponent from '@wyn/components/Common/CollectionInfo/CollectionInfo';
import ProductCardComponent from '@wyn/components/Common/ProductCard/ProductCard';
import {sensualWellnessProducts } from '@wyn/utils/constants';
import React from 'react';

const StyledCollectionPageContainer = styled(Container)(() => ({
  paddingTop: 150,
  paddingBottom: 150,
}));

const SensualWellnessPage = () => {
  return (
    <StyledCollectionPageContainer maxWidth="xl">
      <CollectionInfoComponent
        title="Sensual Wellness"
        subTitle="Intimate Hygiene For Women: WYN &apos;s Care Essentials"
        infoContent='Intimate Hygiene For Women - WYN Brand'
      />
      <Box mt={4}>
      <Grid container spacing={5}>
        {sensualWellnessProducts.map((product) => (
          <Grid key={product?._id} item md={3}>
            <ProductCardComponent {...product} />
          </Grid>
        ))}
      </Grid>
      </Box>
    </StyledCollectionPageContainer>
  );
};

export default SensualWellnessPage;
