import React from 'react';
import { StyledInfoImageComponent } from './styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionHeadingComponent from '@wyn/components/Common/SectionHeading/SectionHeading';
import SectionSpanComponent from '@wyn/components/Common/SectionHeading/SectionSpan';
import { Button, Paper, Rating, Typography } from '@mui/material';
import Image from 'next/image';
import styles from '../../../styles/authentication.module.css';
import Divider from '@mui/material/Divider';
import ImageView from '@wyn/components/Common/ImageViewComponent/ImageView';

const InfoImageComponent = () => {
  return (
    <StyledInfoImageComponent maxWidth="xl">
      <ImageView src="/images/group.png" alt="Your Image" />
    </StyledInfoImageComponent>
  );
};

export default InfoImageComponent;
