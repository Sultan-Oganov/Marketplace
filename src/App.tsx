import { Route, Routes, useLocation } from 'react-router-dom';
import { WithAuthentication } from './modules/hocs/withAuthentication';
import { HomePage, ProfilePage, LoginPage, RegisterPage, BasketPage, ProductsPage } from './pages';
import { Header } from './components/Header/index';
import { useMemo } from 'react';

export const App = () => {
  let { pathname } = useLocation();

  const isHideHeader = useMemo(
    () => pathname === '/login' || pathname === '/registration',
    [pathname],
  );

  return (
    <>
      {!isHideHeader && <Header />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route
          path="/profile"
          element={
            <WithAuthentication>
              <ProfilePage />
            </WithAuthentication>
          }
        />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/registration" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};
