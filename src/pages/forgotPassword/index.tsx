import React from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { useRouter } from 'next/router';
import styles from '../../styles/authentication.css';

export default function SignUp() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/login');
  };
  return (
    <>
      <section className={styles.sectionOne}>
        <div className={styles.container}>
          <div className={styles.card}>
            <Typography variant="h4" className={styles.title}>
              Forgot Password
            </Typography>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <Typography
              onClick={handleClick}
              className={styles.forgotText}
              variant="subtitle2"
            >
              Go to Login
            </Typography>
            <Button
              classes={{ root: styles.signinButton }}
              variant="contained"
              size="large"
              color="primary"
            >
              Get a reset password link
            </Button>
          </div>
        </div>
      </section>
      <section className={styles.discoveries}>
        <div>
          <Typography variant="h4" className={styles.title}>
            We are dependable ally in your hourney to
          </Typography>
          <Typography variant="h4" className={styles.title}>
            better health & wellness{' '}
          </Typography>
          <Button
            classes={{ root: styles.categoriesButton }}
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
