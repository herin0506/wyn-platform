import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import DiscoverCategoriesComponent from '@wyn/components/Home/DiscoverCategories/DiscoverCategories';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

const WhyWynPage = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/');
  };

  const handleLCancel = () => {
    router.push('/login');
  };
  return (
    <Fragment>
      <Box mt={14}>
        <Container maxWidth="xs" className="text-center">
          <Typography variant="h4" mb={2}>
            Reset your password
          </Typography>
          <Typography variant="body2" mb={2}>
            We will send you an email to reset your password
          </Typography>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="my-4"
          />
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Typography my={3} variant="subtitle2">
            <Link onClick={handleLCancel} mb={3} sx={{ cursor: 'pointer' }}>
              Cancel
            </Link>
          </Typography>
        </Container>
        <DiscoverCategoriesComponent />
      </Box>
    </Fragment>
  );
};

export default WhyWynPage;
