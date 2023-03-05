import { useAppSelector } from '../../modules/hooks/redux';
import { useGetProductsQuery } from '../../modules/redux/api/productsAPI';
import { Loader } from '../Loader/index';
import { ProductItem } from '../ProductItem/index';

export const ProductsList = () => {
  const { isLoading } = useGetProductsQuery(null);
  const { products } = useAppSelector((state) => state.products);

  if (isLoading) {
    return (
      <div className="w-full grid place-items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-10">
      {products?.map((product) => (
        <ProductItem key={product.id} {...{ product }} />
      ))}
    </div>
  );
};
