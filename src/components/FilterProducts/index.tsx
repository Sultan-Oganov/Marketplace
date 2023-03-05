import { useAppDispatch } from '../../modules/hooks/redux';
import { sortByPrice, SortedItems } from '../../modules/redux/slices/productsSlice';
import { ChangeEvent } from 'react';

export const FilterProducts = () => {
  const dispatch = useAppDispatch();

  const handleChnage = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(sortByPrice(event.target.value as SortedItems));
  };

  return (
    <div className="flex flex-col gap-5 bg-slate-300 p-5 rounded-lg">
      <h3 className="text-2xl">Сортировка</h3>
      <select onChange={handleChnage} className="p-2 rounded-lg bg-white outline-none">
        <option disabled>Фильтрация по:</option>
        <option value="high-price">Высокая цена</option>
        <option value="low-price">Низкая цена</option>
        <option value="rated">По популярности</option>
      </select>
    </div>
  );
};
