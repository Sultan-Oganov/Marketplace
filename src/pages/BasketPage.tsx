import { BasketList } from '../components/BasketList';
import { useAppSelector } from '../modules/hooks/redux';

export const BasketPage = () => {
  const basket = useAppSelector((state) => state.basket);
  const buyDisabled = true;
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl">Корзина</h2>
      <BasketList data={basket} />
      {basket.length > 0 && (
        <button
          disabled={buyDisabled}
          className="text-xl bg-blue-500 text-white rounded-xl p-2 w-1/3">
          Совершить покупку
        </button>
      )}
    </div>
  );
};
