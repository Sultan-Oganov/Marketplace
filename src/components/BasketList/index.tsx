import { FC } from 'react';
import { IProductBasket } from '../../modules/redux/slices/basketSlice';
import { BasketItem } from '../BasketItem/index';

interface IBasketList {
  data: IProductBasket[];
}

export const BasketList: FC<IBasketList> = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-20">
      {data?.map((product) => (
        <BasketItem key={product.id} {...{ product }} />
      ))}
    </div>
  );
};
