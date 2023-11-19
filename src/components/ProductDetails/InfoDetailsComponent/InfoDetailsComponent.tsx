import React from 'react';
import { StyledInfoDetailsComponent } from './styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionHeadingComponent from '@wyn/components/Common/SectionHeading/SectionHeading';
import SectionSpanComponent from '@wyn/components/Common/SectionHeading/SectionSpan';
import { Button, Paper, Rating, Typography } from '@mui/material';
import Image from 'next/image';
import styles from '../../../styles/authentication.module.css';
import Divider from '@mui/material/Divider';

interface InfoDetailsComponentProps {
  title: string;
  subTitle: string;
}

const InfoDetailsComponent = ({
  title,
  subTitle,
}: InfoDetailsComponentProps) => {
  return (
    <StyledInfoDetailsComponent maxWidth="xl">
      <Typography pb={3} variant="h4">
        {title}
      </Typography>
      <Typography variant="h6" mb={5}>
        {subTitle}
      </Typography>
      <Button variant="contained" size="small">
        Read More
      </Button>
    </StyledInfoDetailsComponent>
  );
};

export default InfoDetailsComponent;
