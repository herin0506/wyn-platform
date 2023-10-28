import { Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';
import styles from '../../styles/authentication.css';

export default function Home() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };
  return (
    <>
      <section className={styles.sectionOne}>
        <div>
          <Typography variant="h2">Welcome !</Typography>
          <Button
          classes="signinButton"
            variant="contained"
            size="large"
            color="primary"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </section>
    </>
  );
};
