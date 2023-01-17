import styled from '@emotion/styled';
import { Box, Container, Divider as DividerMUI, Typography } from '@mui/material';
import { PromoList } from 'components/container/promo/promo-list';
import { Header } from 'components/layout/header';

const ContentStyle = styled('div')({
  padding: 25,
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  background: '#f6f9ff',
});

const Divider = styled(DividerMUI)({
  margin: '3px 0',
  border: 'none',
});

function HomePage() {
  return (
    <Container maxWidth="sm">
      <Header />
      <Divider />
      <ContentStyle>
        <Box sx={{ fontSize: 18 }}>
          <Typography variant="h2" gutterBottom>
            {`All Promo's`}
          </Typography>
        </Box>
      </ContentStyle>
      <Divider />
      <ContentStyle>
        <PromoList />
      </ContentStyle>
    </Container>
  );
}

export default HomePage;
