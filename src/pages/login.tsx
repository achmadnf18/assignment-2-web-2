/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from '@emotion/styled';
import { Box, Container, Link, Typography } from '@mui/material';
import Logo from 'components/common/logo';
import { SocialAuth } from 'components/container/login/social-auth';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuth } from 'store/auth/selector';

/// ///////////////////////////////

const HeadingStyle = styled(Box)({
  textAlign: 'center',
});

const ContentStyle = styled('div')({
  padding: 25,
  minHeight: '100vh',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  background: '#fff',
});

export function Login() {
  const auth = useSelector(selectAuth);
  if (auth.user) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container maxWidth="sm">
      <ContentStyle>
        <HeadingStyle>
          <Logo />
          <Typography sx={{ color: 'text.secondary', mb: 5 }}>Login to your account</Typography>
        </HeadingStyle>

        <Box component="div">
          <SocialAuth />
        </Box>

        {/* <LoginForm /> */}

        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          Don’t have an account? <Link variant="subtitle2">Sign up</Link>
        </Typography>
      </ContentStyle>
    </Container>
  );
}
