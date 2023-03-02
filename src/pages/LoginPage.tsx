import { Form } from '../components/Form';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../modules/hooks/redux';
import { login } from '../firebase';
import { setUser, toggleIsLoading } from '../modules/redux/slices/userSlice';

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispath = useAppDispatch();

  const handleSubmit = (email: string, password: string) => {
    login(email, password)
      .then((response) => {
        dispath(toggleIsLoading(false));
        dispath(
          setUser({
            email: response.user.email,
            //@ts-ignore
            token: response.user.accessToken,
            id: response.user.uid,
          }),
        );
        navigate('/');
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      })
      .finally(() => dispath(toggleIsLoading(false)));
  };

  return (
    <div className="h-screen grid place-items-center">
      <Form {...{ handleSubmit }} btnTitle="Sign in">
        <NavLink to="/registration">
          <p className="text-white absolute right-5 bottom-5">Registration</p>
        </NavLink>
      </Form>
    </div>
  );
};
