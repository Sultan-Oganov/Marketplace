import { ChangeEvent, FC, useState, ReactNode } from 'react';
import google from '../../assets/icons/google.png';

interface IForm {
  handleSubmit: (email: string, password: string) => void;
  btnTitle: string;
  children?: ReactNode;
  googleAuth?: () => void;
}

export const Form: FC<IForm> = ({ handleSubmit, btnTitle, googleAuth, children }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

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
        className="outline-0 h-12 w-11/12 py-4 px-3.5 rounded-xl"
        type="email"
        value={userData.email}
        onChange={handleChange('email')}
        placeholder="Email"
      />
      <input
        className="outline-0 h-12 w-11/12 py-4 px-3.5 rounded-xl"
        type="password"
        value={userData.password}
        onChange={handleChange('password')}
        placeholder="Password"
      />
      <button
        className="bg-slate-300 h-12 w-11/12 font-medium mt-6 bg-white rounded-xl"
        type="submit">
        {btnTitle}
      </button>
      <button className="bg-white w-14 h-12 rounded-full cursor-pointer" onClick={googleAuth}>
        <img src={google} alt="" className="w-full h-full" />
      </button>
      {children}
    </form>
  );
};
