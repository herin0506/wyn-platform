import React from 'react';
import CollectionInfoComponent from '@wyn/components/Common/CollectionInfo/CollectionInfo';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProductCardComponent from '@wyn/components/Common/ProductCard/ProductCard';
import { menopausalProducts } from '@wyn/utils/constants';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

const StyledCollectionPageContainer = styled(Container)(() => ({
  paddingTop: 150,
  paddingBottom: 150,
}));

const MenopausalWellness = () => {
  return (
    <StyledCollectionPageContainer maxWidth="xl">
      <CollectionInfoComponent
        title="Menopausal wellness"
        subTitle="Unveiling WYN's Ayurvedic Menopause Treatment"
        infoContent="WYN's Specialty: Ayurvedic Menopause Treatment"
      />
      <Box mt={4}>
        <Grid container spacing={5}>
          {menopausalProducts.map((product) => (
            <Grid key={product?._id} item md={3}>
              <ProductCardComponent {...product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </StyledCollectionPageContainer>
  );
};

export default MenopausalWellness;
