import { Form } from '../components/Form';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../modules/hooks/redux';
import { setUser, toggleIsLoading } from '../modules/redux/slices/userSlice';
import { authWithGoogle, login } from '../modules/services/auth';
import google from '../assets/icons/google.png';
import { UserCredential } from 'firebase/auth';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { isLoading } = useAppSelector((state) => state.user);
  const dispath = useAppDispatch();

  const handleSetUser = (data: UserCredential) => {
    dispath(
      setUser({
        email: data.user.email,
        //@ts-ignore
        token: data.user.accessToken,
        id: data.user.uid,
      }),
    );
    navigate('/');
  };

  const handleSubmit = (email: string, password: string) => {
    dispath(toggleIsLoading(true));
    login(email, password)
      .then((response) => {
        handleSetUser(response);
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      })
      .finally(() => dispath(toggleIsLoading(false)));
  };

  const handleGoogleLogin = () => {
    dispath(toggleIsLoading(true));
    authWithGoogle()
      .then((response) => {
        handleSetUser(response);
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      })
      .finally(() => dispath(toggleIsLoading(false)));
  };

  return (
    <div className="h-screen grid place-items-center">
      <Form {...{ handleSubmit, isLoading }} btnTitle="Sign in">
        <button
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className={`${
            isLoading ? 'bg-slate-300' : 'bg-gray-200'
          } w-14 h-12 rounded-full cursor-pointer`}>
          <img src={google} alt="" className="w-full h-full" />
        </button>
        <NavLink to="/registration">
          <p className="text-white absolute right-5 bottom-5">Registration</p>
        </NavLink>
      </Form>
    </div>
  );
};
