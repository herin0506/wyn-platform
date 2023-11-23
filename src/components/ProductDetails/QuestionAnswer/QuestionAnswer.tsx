import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import Container from '@mui/material/Container';
import { StyledQuestionAnswer } from './styled';
import { questionsAnswers } from '@wyn/utils/constants';

const QuestionAnswerComponent = () => {
  return (
    <StyledQuestionAnswer>
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
    </StyledQuestionAnswer>
  );
};

export default QuestionAnswerComponent;
