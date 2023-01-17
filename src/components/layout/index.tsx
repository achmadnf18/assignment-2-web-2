import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

const RootStyle = styled('div')({
  display: 'grid',
  placeItems: 'center',
  color: 'black',
});

export function Layout() {
  return (
    <main className="lg:px-6">
      <RootStyle>
        <Outlet />
      </RootStyle>
    </main>
  );
}

export default Layout;
