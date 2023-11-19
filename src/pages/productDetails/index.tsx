import {
  Typography,
  Button,
  Avatar,
  Stack,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Rating,
} from '@mui/material';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import { relative } from 'path';
import { Divider } from '@mui/material';
import styles from '../../styles/authentication.module.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HorizontalSplitComponent from '@wyn/components/Common/HorizontalSplit/HorizontalSplit';
//import styles from '../../styles/authentication.css';
import NaturalHerbsContainer from '@wyn/components/Home/NaturalHerbs/NaturalHerbs';
import QuestionAnswerComponent from '@wyn/components/ProductDetails/QuestionAnswer/QuestionAnswer';
import ProductImageComponent from '@wyn/components/ProductDetails/ProductImageComponent/ProductImageComponent';
import ProductDetailsComponent from '@wyn/components/ProductDetails/ProductDetailsComponent/ProductDetailsComponent';
import InfoDetailsComponent from '@wyn/components/ProductDetails/InfoDetailsComponent/InfoDetailsComponent';
import InfoImageComponent from '@wyn/components/ProductDetails/InfoImageComponent/InfoImageComponent';
import { product, infoContent } from '@wyn/utils/constants';

export default function Home() {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    router.push('/login');
  };

  const nutrientsTempData = [
    {
      imageUrl: '',
      title: 'Shatavari',
    },
    {
      imageUrl: '',
      title: 'Ashoka',
    },
    {
      imageUrl: '',
      title: 'Punarnava',
    },
    {
      imageUrl: '',
      title: 'Lodhra',
    },
    {
      imageUrl: '',
      title: 'Salmali',
    },
    {
      imageUrl: '',
      title: 'womhar',
    },
    {
      imageUrl: '',
      title: 'ajsbas',
    },
  ];

  const questionsAnswers = [
    {
      question: 'What does Hormone-Steroid free mean?',
      answer:
        'Our bestseller nutritive mints balance disturbed hormones thereby regulating the cycle flow back to normal. ',
    },
    {
      question: 'What does Hormone-Steroid free mean?',
      answer:
        'Our bestseller nutritive mints balance disturbed hormones thereby regulating the cycle flow back to normal. ',
    },
    {
      question: 'What does Hormone-Steroid free mean?',
      answer:
        'Our bestseller nutritive mints balance disturbed hormones thereby regulating the cycle flow back to normal. ',
    },
    {
      question: 'What does Hormone-Steroid free mean?',
      answer:
        'Our bestseller nutritive mints balance disturbed hormones thereby regulating the cycle flow back to normal. ',
    },
    {
      question: 'What does Hormone-Steroid free mean?',
      answer:
        'Our bestseller nutritive mints balance disturbed hormones thereby regulating the cycle flow back to normal. ',
    },
  ];
  const rightComponent = () => {
    return <p>This is the first child component.</p>;
  };
  return (
    <Fragment>
      <Container maxWidth="xl">
        <HorizontalSplitComponent
          leftComponent={<ProductImageComponent />}
          rightComponent={<ProductDetailsComponent {...product} />}
        />
      </Container>
      <Container maxWidth="xl">
        <NaturalHerbsContainer />
      </Container>
      <Container maxWidth="xl">
        <HorizontalSplitComponent
          leftComponent={<InfoImageComponent />}
          rightComponent={<InfoDetailsComponent {...infoContent} />}
        />
      </Container>

      <QuestionAnswerComponent />
    </Fragment>
  );
}
