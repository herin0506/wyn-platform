import React from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { useRouter } from 'next/router';
import styles from '../../styles/authentication.module.css';

export default function Login() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/signUp');
  };

  const handleNaviagte = () => {
    router.push('/forgotPassword');
  };

  const handleLogin = () => {
    //router.push('/home')
    router.push('/productDetails');
  };
  return (
    <>
      <section className={styles.sectionOne}>
        <div className={styles.container}>
          <div className={styles.card}>
            <Typography variant="h4" className={styles.title}>
              Login
            </Typography>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
            <Typography
              onClick={handleNaviagte}
              className={styles.forgotText}
              variant="subtitle2"
            >
              Forgot your password?
            </Typography>
            <Button
              classes={{ root: styles.signinButton }}
              variant="contained"
              size="large"
              color="primary"
              onClick={handleLogin}
            >
              SignIn
            </Button>
            <Typography
              onClick={handleClick}
              className={styles.forgotText}
              variant="subtitle2"
            >
              Create account?
            </Typography>
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
