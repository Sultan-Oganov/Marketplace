import { Form } from '../components/Form/index';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../modules/hooks/redux';
import { setUser, toggleIsLoading } from '../modules/redux/slices/userSlice';
import google from '../assets/icons/google.png';
import { authWithGoogle, register } from '../modules/services/auth';
import { UserCredential } from 'firebase/auth';
import { useState } from 'react';
import { Snackbar } from '../components/Snackbar/index';
import { openSnackbar } from '../modules/redux/slices/snackbarSlice';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { isLoading } = useAppSelector((state) => state.user);
  const { isOpen } = useAppSelector((state) => state.snackbar);
  const dispatch = useAppDispatch();

  const handleSetUser = (data: UserCredential) => {
    dispatch(
      setUser({
        ...data,
        email: data.user.email,
        //@ts-ignore
        token: data.user.accessToken,
        id: data.user.uid,
      }),
    );
    navigate('/');
  };

  const handleSubmit = (email: string, password: string) => {
    dispatch(toggleIsLoading(true));
    register(email, password)
      .then((response) => {
        handleSetUser(response);
      })
      .catch((error: any) => {
        setError(`Error: ${error.message}`);
        dispatch(openSnackbar());
      })
      .finally(() => dispatch(toggleIsLoading(false)));
  };

  const handleGoogleRegister = () => {
    dispatch(toggleIsLoading(true));
    authWithGoogle()
      .then((response) => {
        handleSetUser(response);
      })
      .catch((error) => {
        setError(`Error: ${error.message}`);
        dispatch(openSnackbar());
      })
      .finally(() => dispatch(toggleIsLoading(false)));
  };

  return (
    <div className="h-screen grid place-items-center">
      <Form {...{ handleSubmit, isLoading }} btnTitle="Зарегистрироваться">
        <button
          onClick={handleGoogleRegister}
          disabled={isLoading}
          className={`${
            isLoading ? 'bg-slate-300' : 'bg-gray-200'
          } w-14 h-12 rounded-full cursor-pointer`}>
          <img src={google} alt="" className="w-full h-full" />
        </button>
        <NavLink to="/login">
          <p className="text-white absolute right-5 bottom-5">Вход</p>
        </NavLink>
      </Form>
      {isOpen && (
        <Snackbar
          {...{
            isOpen,
            color: 'bg-red-600',
            message: error,
          }}
        />
      )}
    </div>
  );
};
