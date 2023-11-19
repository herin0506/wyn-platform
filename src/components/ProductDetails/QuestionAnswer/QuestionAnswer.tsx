import React from 'react';
import { StyledQuestionAnswerComponent } from './styled';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionHeadingComponent from '@wyn/components/Common/SectionHeading/SectionHeading';
import SectionSpanComponent from '@wyn/components/Common/SectionHeading/SectionSpan';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Rating,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import styles from '../../../styles/authentication.module.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const questionsAnswers = [
  {
    question: 'What does Hormone-Steroid free mean?',
    answer: 'Some answer needs to be added in this area',
  },
  {
    question: 'What does Hormone-Steroid free mean?',
    answer: 'Some answer needs to be added in this area',
  },
  {
    question: 'What does Hormone-Steroid free mean?',
    answer: 'Some answer needs to be added in this area',
  },
  {
    question: 'What does Hormone-Steroid free mean?',
    answer: 'Some answer needs to be added in this area',
  },
  {
    question: 'What does Hormone-Steroid free mean?',
    answer: 'Some answer needs to be added in this area',
  },
  {
    question: 'What does Hormone-Steroid free mean?',
    answer: 'Some answer needs to be added in this area',
  },
  {
    question: 'What does Hormone-Steroid free mean?',
    answer: 'Some answer needs to be added in this area',
  },
  {
    question: 'What does Hormone-Steroid free mean?',
    answer: 'Some answer needs to be added in this area',
  },
];
const QuestionAnswerComponent = () => {
  return (
    <StyledQuestionAnswerComponent>
      <Container maxWidth="lg">
        <Typography variant="h4" pt={7} mb={2} className="text-center">
          We want you to ask questions, because we have what you need.
        </Typography>
        {questionsAnswers.map((item) => (
          <Accordion elevation={0} className="bg-transparent">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{ px: 0, py: 2 }}
            >
              <Typography>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 0, py: 1 }}>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </StyledQuestionAnswerComponent>
  );
};

export default QuestionAnswerComponent;
