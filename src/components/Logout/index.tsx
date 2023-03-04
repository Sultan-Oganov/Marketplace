import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../modules/hooks/redux';
import { removeUser } from '../../modules/redux/slices/userSlice';
import { logout } from '../../modules/services/auth';

export const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(removeUser());
    logout();
    navigate('/home');
  };

  return <button onClick={handleClick}>Logout</button>;
};
