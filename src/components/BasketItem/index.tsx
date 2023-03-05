import { FC } from 'react';
import { FiX } from 'react-icons/fi';
import { useAppDispatch } from '../../modules/hooks/redux';
import {
  addProduct,
  removeProduct,
  IProductBasket,
  decreaseProduct,
} from '../../modules/redux/slices/basketSlice';

interface IBasketItem {
  product: IProductBasket;
}

export const BasketItem: FC<IBasketItem> = ({ product }) => {
  const { name, image, price, count } = product;
  const dispatch = useAppDispatch();

  const handleAddToBasket = () => {
    dispatch(addProduct(product));
  };

  const handleRemoveFromBasket = () => {
    dispatch(removeProduct(product));
  };

  const handleDecrease = () => {
    dispatch(decreaseProduct(product));
  };

  return (
    <div className="p-5 bg-slate-300 rounded-lg flex flex-col gap-5 hover:bg-slate-400 relative">
      <div className="w-52 h-32">
        <img className="w-full h-full" src={image} alt="" />
      </div>
      <div className="flex flex-col">
        <h3>{name}</h3>
        <h3>{price}$</h3>
        <div className="flex justify-between">
          <h3>Количество: {count}</h3>
          <div className="flex gap-2">
            <button
              onClick={handleDecrease}
              className="w-6 h-6 bg-slate-900 text-white grid place-items-center rounded-lg font-bold">
              -
            </button>
            <button
              onClick={handleAddToBasket}
              className="w-6 h-6 bg-slate-900 text-white grid place-items-center rounded-lg font-bold">
              +
            </button>
          </div>
        </div>
        <div className="flex justify-between item-center mt-5 font-medium">
          <h3>Итого: </h3>
          <p>{count * price}</p>
        </div>
        <button className="absolute top-2 right-2" onClick={handleRemoveFromBasket}>
          <FiX />
        </button>
      </div>
    </div>
  );
};
