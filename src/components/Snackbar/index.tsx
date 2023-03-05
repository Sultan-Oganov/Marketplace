import { FC, useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../modules/hooks/redux';
import { closeSnackbar } from '../../modules/redux/slices/snackbarSlice';

interface ISnackbar {
  isOpen: boolean;
  color?: 'bg-green-600' | 'bg-red-600';
  message?: string;
  link?: string;
  link2?: string;
}

export const Snackbar: FC<ISnackbar> = ({
  isOpen,
  color = 'bg-green-600',
  message = '',
  link = '',
  link2 = '',
}) => {
  const dispath = useAppDispatch();

  const handleClose = () => {
    dispath(closeSnackbar());
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        handleClose();
      }, 5000);
      return () => {
        clearTimeout(timer);
        handleClose();
      };
    }
  }, [isOpen]);

  return (
    <div
      className={`${color} fixed bottom-5 right-1 -translate-x-1/2 w-1/2 h-16 rounded-lg text-white p-2 overflow-auto`}>
      <div>{message}</div>
      {link && (
        <Link className="underline" to={link}>
          {link}
        </Link>
      )}{' '}
      {link2 && (
        <Link className="underline" to={link2}>
          {link2}
        </Link>
      )}
      <button onClick={handleClose} className="fixed right-2 top-2">
        <FiX />
      </button>
    </div>
  );
};
