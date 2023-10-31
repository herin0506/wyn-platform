import React from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { useRouter } from 'next/router';
import styles from '../../styles/authentication.module.css';

export default function SignUp() {
  const router = useRouter();
  const handleNaviagte = () => {
    router.push('/login');
  };
  const handleCreate = () => {
    router.push('/');
  };
  return (
    <>
      <section className={`row justify-content-center`}>
        <div className={'col-12 col-md-6 col-lg-4 text-center px-4'}>
          <Typography variant="h4" className={`my-4 text-center`}>
            Create account
          </Typography>
          <TextField
            fullWidth
            id="outlined-basic"
            label="First name"
            variant="outlined"
            className="mb-3"
            InputProps={{ className: styles.inputFieldStyles }}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Last name"
            variant="outlined"
            className="mb-3"
            InputProps={{ className: styles.inputFieldStyles }}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="mb-3"
            InputProps={{ className: styles.inputFieldStyles }}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
            className=""
            InputProps={{ className: styles.inputFieldStyles }}
          />

          <Button
            className={`text-center my-5 ${styles.mainBoxButton}`}
            variant="contained"
            size="large"
            color="primary"
            onClick={handleCreate}
          >
            Create
          </Button>
        </div>
      </section>

      <section className={`row justify-content-center ${styles.container}`}>
        <div className={`col-8 text-center py-5 px-0`}>
          <Typography className={`mb-4 ${styles.customTextSize}`}>
            We are <b>dependable ally</b> in your hourney to better health &
            wellness.
          </Typography>
          <Button
            className={styles.mainRoundButton}
            variant="contained"
            size="large"
            color="primary"
          >
            DISCOVER CATEGROIES
          </Button>
        </div>
      </section>
    </>
  );
}
