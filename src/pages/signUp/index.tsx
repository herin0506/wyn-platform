import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import DiscoverCategoriesComponent from '@wyn/components/Home/DiscoverCategories/DiscoverCategories';

const WhyWynPage = () => {
  const router = useRouter();
  const goToLogin = () => {
    router.push('/login');
  };
  const handleCreate = () => {
    router.push('/');
  };
  return (
    <Fragment>
      <Box mt={14}>
        <Container maxWidth="xs" className="text-center">
          <Typography variant="h4" mb={4}>
            Create account
          </Typography>
          <TextField
            fullWidth
            id="outlined-basic"
            label="First name"
            variant="outlined"
            className="mb-3"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Last name"
            variant="outlined"
            className="mb-3"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="mb-3"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
            className="mb-3"
          />
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={handleCreate}
            className="mb-3"
          >
            Create
          </Button>
          <Typography mb={3} variant="subtitle2">
            <Link onClick={goToLogin} mb={3} sx={{ cursor: 'pointer' }}>
              Already registered? Login!
            </Link>
          </Typography>
        </Container>
        <DiscoverCategoriesComponent />
      </Box>
    </Fragment>
  );
};

export default WhyWynPage;
