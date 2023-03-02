import { Form } from '../components/Form/index';
import { NavLink, useNavigate } from 'react-router-dom';
import { register } from '../firebase';
import { useAppDispatch } from '../modules/hooks/redux';
import { setUser, toggleIsLoading } from '../modules/redux/slices/userSlice';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const dispath = useAppDispatch();

  const handleSubmit = (email: string, password: string) => {
    register(email, password)
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
      <Form {...{ handleSubmit }} btnTitle="Sign up">
        <NavLink to="/login">
          <p className="text-white absolute right-5 bottom-5">Log in</p>
        </NavLink>
      </Form>
    </div>
  );
};
