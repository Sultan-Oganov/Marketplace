import { FC, useMemo } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { IProduct } from '../../modules/redux/types/products';
import { useAppDispatch, useAppSelector } from '../../modules/hooks/redux';
import { addProduct, removeProduct } from '../../modules/redux/slices/basketSlice';
import { hasAlredy } from '../../utils/basket';
import { Snackbar } from '../Snackbar/index';
import { openSnackbar } from '../../modules/redux/slices/snackbarSlice';

interface IProductItem {
  product: IProduct;
}

export const ProductItem: FC<IProductItem> = ({ product }) => {
  const { name, image, price } = product;
  const dispatch = useAppDispatch();
  const basket = useAppSelector((state) => state.basket);
  const { isAuth } = useAppSelector((state) => state.user);
  const { isOpen } = useAppSelector((state) => state.snackbar);

  const alredyInBasket = useMemo(() => hasAlredy(basket, product.id), [basket]);

  const handleAddToBasket = () => {
    if (!isAuth) {
      dispatch(openSnackbar());
    } else {
      dispatch(addProduct(product));
    }
  };

  const handleRemoveFromBasket = () => {
    dispatch(removeProduct(product));
  };

  // return alert(
  //   'Чтобы добавить товар в корзину, Вам нужно (авторизоваться - ссылка на страницу авторизации/регистрации);',
  // );

  return (
    <div className="p-5 bg-slate-300 rounded-lg flex flex-col gap-5 hover:bg-slate-400">
      <div className="w-52 h-32">
        <img className="w-full h-full" src={image} alt="" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3>{name}</h3>
          <h3>{price}$</h3>
        </div>
        {alredyInBasket ? (
          <button onClick={handleRemoveFromBasket}>
            <FiX />
          </button>
        ) : (
          <button onClick={handleAddToBasket}>
            <FaShoppingCart size="22" className="cursor-pointer" color="bg-gray-900" />
          </button>
        )}
      </div>
      {isOpen && (
        <Snackbar
          {...{
            isOpen,
            color: 'bg-red-600',
            message: 'Чтобы добавить товар в корзину, Вам нужно авторизоваться - ',
            link: '/login',
            link2: '/registration',
          }}
        />
      )}
    </div>
  );
};
