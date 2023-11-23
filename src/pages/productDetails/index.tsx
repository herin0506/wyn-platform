import Container from '@mui/material/Container';
import HorizontalSplitComponent from '@wyn/components/Common/HorizontalSplit/HorizontalSplit';
import { Fragment } from 'react';
//import styles from '../../styles/authentication.css';
import NaturalHerbsContainer from '@wyn/components/Home/NaturalHerbs/NaturalHerbs';
import InfoDetails from '@wyn/components/ProductDetails/InfoDetails/InfoDetails';
import InfoImage from '@wyn/components/ProductDetails/InfoImage/InfoImage';
import ProductDetails from '@wyn/components/ProductDetails/ProductDetails/ProductDetails';
import ProductImage from '@wyn/components/ProductDetails/ProductImage/ProductImage';
import QuestionAnswer from '@wyn/components/ProductDetails/QuestionAnswer/QuestionAnswer';
import { infoContent, product } from '@wyn/utils/constants';

export default function Home() {
  return (
    <Fragment>
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
          leftComponent={<InfoImage />}
          rightComponent={<InfoDetails {...infoContent} />}
        />
      </Container>
      <QuestionAnswer />
    </Fragment>
  );
}
