import logo from '../../assets/icons/logo.png';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../modules/hooks/redux';

export const Header = () => {
  const { isAuth, email } = useAppSelector((state) => state.user);
  return (
    <header className="h-24 p-5">
      <nav className={'flex items-center justify-between'}>
        <div className={'flex items-center gap-5'}>
          <NavLink to="/">
            <img className={'w-9 h-9 rounded-full'} src={logo} alt="Logo" title="Home" />
          </NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/basket">Basket</NavLink>
        </div>
        <div className={'flex items-center'}>
          {isAuth ? (
            <NavLink to="/profile">{email}</NavLink>
          ) : (
            <NavLink to="/login">SignIn</NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};
