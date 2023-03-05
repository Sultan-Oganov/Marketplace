import { ProductsList } from '../components/ProductsList/index';
import { FilterProducts } from '../components/FilterProducts/index';

export const ProductsPage = () => {
  return (
    <div className="flex">
      <ProductsList />
      <FilterProducts />
    </div>
  );
};
