import { FaUserAlt } from 'react-icons/fa';
import { useAppSelector } from '../modules/hooks/redux';

export const ProfilePage = () => {
  const { email } = useAppSelector((state) => state.user);
  return (
    <div
      className="flex flex-col items-center bg-slate-300 w-72 p-10 rounded-xl m-4 gap-5"
      title="Your information will appear soon">
      <FaUserAlt size="150" />
      <h2 className="font-medium text-lg">{email}</h2>
      <p>Your information will appear soon..</p>
    </div>
  );
};
