import { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getThemeName } from 'store/themeSlice';
import { themes } from 'constants/theme';
import Loader from 'components/Loader/Loader';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

import { ContentWrapper, LayoutWrapper } from './styled';

const CabinetLayout = () => {
  const themeName = useSelector(getThemeName);
  const theme = themes.find(theme => theme.name === themeName);

  return (
    <ThemeProvider theme={theme}>
      <LayoutWrapper>
        <Sidebar />

        <ContentWrapper>
          <Header />

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </ContentWrapper>
      </LayoutWrapper>
    </ThemeProvider>
  );
};

export default CabinetLayout;
