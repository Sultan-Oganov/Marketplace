import { FC } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { Style } from 'react-loader-spinner/dist/type';

interface ILoader {
  size?: string;
  color?: string;
  style?: Style;
}

export const Loader: FC<ILoader> = ({ size = '80', color = 'black', style }) => {
  return (
    <TailSpin
      height={size}
      width={size}
      color={color}
      ariaLabel="loading"
      radius="1"
      wrapperStyle={style}
    />
  );
};
