import { BasketList } from '../components/BasketList';
import { Snackbar } from '../components/Snackbar';
import { useAppDispatch, useAppSelector } from '../modules/hooks/redux';
import { openSnackbar } from '../modules/redux/slices/snackbarSlice';

export const BasketPage = () => {
  const basket = useAppSelector((state) => state.basket);
  const { isOpen } = useAppSelector((state) => state.snackbar);
  const dispatch = useAppDispatch();

  const handlePay = () => {
    dispatch(openSnackbar());
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl">Корзина</h2>
      <BasketList data={basket} />
      {basket.length > 0 && (
        <button onClick={handlePay} className="text-xl bg-blue-500 text-white rounded-xl p-2 w-1/3">
          Совершить покупку
        </button>
      )}
      {isOpen && (
        <Snackbar
          {...{
            isOpen,
            color: 'bg-red-600',
            message: 'Оплата пока не доступна',
          }}
        />
      )}
    </div>
  );
};
