import React from 'react';
import { Logout } from '../components/Logout';
import { useAppSelector } from '../modules/hooks/redux';

export const ProfilePage = () => {
  return (
    <div>
      ProfilePage
      <Logout />
    </div>
  );
};
