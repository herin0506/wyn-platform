import Container from '@mui/material/Container';
import HorizontalSplitComponent from '@wyn/components/Common/HorizontalSplit/HorizontalSplit';
import { Fragment } from 'react';
import NaturalHerbsContainer from '@wyn/components/Home/NaturalHerbs/NaturalHerbs';
import ProductDetails from '@wyn/components/ProductDetails/ProductDetails/ProductDetails';
import ProductImage from '@wyn/components/ProductDetails/ProductImage/ProductImage';
import QuestionAnswer from '@wyn/components/ProductDetails/QuestionAnswer/QuestionAnswer';
import { infoContent, product } from '@wyn/utils/constants';
import HorizontalImageSectionComponent from '@wyn/components/Common/HorizontalImageSection/HorizontalImageSection';
import HorizontalContentSectionComponent from '@wyn/components/Common/HorizontalContentSection/HorizontalContentSection';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Fragment>
      <Box mt={14}>
        <Container maxWidth="xl">
          <HorizontalSplitComponent
            leftComponent={<ProductImage />}
            rightComponent={<ProductDetails {...product} />}
          />
        </Container>
        <Container disableGutters maxWidth="xl">
          <NaturalHerbsContainer />
        </Container>
        <Container maxWidth="xl">
          <HorizontalSplitComponent
            leftComponent={
              <HorizontalImageSectionComponent
                src="/images/group.png"
                alt="Your Image"
              />
            }
            rightComponent={
              <HorizontalContentSectionComponent {...infoContent} />
            }
          />
        </Container>
        <QuestionAnswer />
      </Box>
    </Fragment>
  );
}
