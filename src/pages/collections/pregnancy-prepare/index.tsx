import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import CollectionInfoComponent from '@wyn/components/Common/CollectionInfo/CollectionInfo';
import ProductCardComponent from '@wyn/components/Common/ProductCard/ProductCard';
import { pregnancyProducts } from '@wyn/utils/constants';
import React from 'react';

const StyledCollectionPageContainer = styled(Container)(() => ({
  paddingTop: 150,
  paddingBottom: 150,
}));

const PregnancyPreparePage = () => {
  return (
    <StyledCollectionPageContainer maxWidth="xl">
      <CollectionInfoComponent
        title="Pregnancy Care"
        subTitle=" WYN ' s Pregnancy Care Products for Expecting Moms"
        infoContent='Explore Our Range of Pregnancy Care Products'
      />
      <Box mt={4}>
        <Grid container spacing={5}>
          {pregnancyProducts.map((product) => (
            <Grid key={product?._id} item md={3}>
              <ProductCardComponent {...product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </StyledCollectionPageContainer>
  );
};

export default PregnancyPreparePage;
