import { useNavigate } from 'react-router-dom';
import storage from 'redux-persist/lib/storage';
import { BiExit } from 'react-icons/bi';
import { useAppDispatch } from '../../modules/hooks/redux';
import { removeUser } from '../../modules/redux/slices/userSlice';
import { logout } from '../../modules/services/auth';
import { removeAll } from '../../modules/redux/slices/basketSlice';
import { closeSnackbar } from '../../modules/redux/slices/snackbarSlice';

export const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(closeSnackbar());
    dispatch(removeUser());
    dispatch(removeAll());
    logout();
    navigate('/home');
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 bg-gray-200 p-2 rounded-xl text-slate-900">
      <BiExit size={22} />
      Выйти
    </button>
  );
};
