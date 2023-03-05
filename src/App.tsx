import { Route, Routes, useLocation } from 'react-router-dom';
import { WithAuthentication } from './modules/hocs/withAuthentication';
import { HomePage, ProfilePage, LoginPage, RegisterPage, BasketPage, ProductsPage } from './pages';
import { Header } from './components/Header/index';
import { useMemo } from 'react';
import { Footer } from './components/Footer';

export const App = () => {
  let { pathname } = useLocation();

  const isHide = useMemo(() => pathname === '/login' || pathname === '/registration', [pathname]);

  return (
    <>
      {!isHide && <Header />}
      <main className="grow p-5">
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
      </main>
      {!isHide && <Footer />}
    </>
  );
};
