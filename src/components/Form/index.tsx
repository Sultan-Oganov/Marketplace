import { ChangeEvent, FC, useState, ReactNode, useMemo } from 'react';
import { Loader } from '../Loader';

interface IForm {
  handleSubmit: (email: string, password: string) => void;
  btnTitle: string;
  children?: ReactNode;
  isLoading?: boolean;
}

export const Form: FC<IForm> = ({ handleSubmit, btnTitle, children, isLoading = false }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const disabledColor = useMemo(() => (isLoading ? 'bg-slate-300' : 'bg-gray-200'), [isLoading]);

  const handleChange = (prop: 'email' | 'password') => (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [prop]: event.target.value });
  };

  return (
    <form
      className="bg-slate-800 w-96 h-1/2 flex flex-col items-center gap-4 p-10 relative rounded-xl"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(userData.email, userData.password);
      }}>
      <input
        disabled={isLoading}
        className={`${disabledColor} outline-0 h-12 w-11/12 py-4 px-3.5 rounded-xl`}
        type="email"
        value={userData.email}
        onChange={handleChange('email')}
        placeholder="Email"
      />
      <input
        disabled={isLoading}
        className={`${disabledColor} outline-0 h-12 w-11/12 py-4 px-3.5 rounded-xl`}
        type="password"
        value={userData.password}
        onChange={handleChange('password')}
        placeholder="Password"
      />
      <button
        disabled={isLoading}
        className={`${disabledColor} h-12 w-11/12 font-medium mt-6 rounded-xl relative`}
        type="submit">
        {btnTitle}
        {isLoading && (
          <Loader
            size={'20'}
            style={{
              position: 'absolute',
              right: '25%',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />
        )}
      </button>

      {children}
    </form>
  );
};
