import { useNavigate } from 'react-router-dom';
import { logout } from '../../firebase';
import { useAppDispatch } from '../../modules/hooks/redux';
import { removeUser } from '../../modules/redux/slices/userSlice';
import storage from 'redux-persist/lib/storage';

export const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    storage.removeItem('persist:root');
    dispatch(removeUser());
    logout();
    navigate('/home');
  };

  return <button onClick={handleClick}>Logout</button>;
};
