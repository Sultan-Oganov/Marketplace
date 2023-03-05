import logo from '../../assets/icons/logo.png';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../modules/hooks/redux';
import { FaUserCircle } from 'react-icons/fa';
import { Logout } from '../Logout/index';

export const Header = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  return (
    <header className="p-5 sticky top-0 bg-slate-900 rounded-b-xl text-white z-10">
      <nav className={'flex items-center justify-between'}>
        <div className={'flex items-center gap-5'}>
          <NavLink to="/">
            <img className={'w-9 h-9 rounded-full'} src={logo} alt="Logo" title="Home" />
          </NavLink>
          <NavLink to="/products">Товары</NavLink>
          <NavLink to="/basket">Корзина</NavLink>
        </div>
        <div className={'flex items-center gap-2'}>
          {isAuth ? (
            <>
              <NavLink to="/profile" className="flex items-center gap-2">
                <FaUserCircle size={22} />
                Профиль
              </NavLink>
              <Logout />
            </>
          ) : (
            <NavLink to="/login" className="flex items-center gap-2">
              <FaUserCircle size={22} />
              Войти
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};
