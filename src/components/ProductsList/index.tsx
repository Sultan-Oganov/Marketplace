import { useGetProductsQuery } from '../../modules/redux/api/productsAPI';
import { Loader } from '../Loader/index';
import { ProductItem } from '../ProductItem/index';

export const ProductsList = () => {
  const { data, isLoading } = useGetProductsQuery(null);

  if (isLoading) {
    return (
      <div className="w-full grid place-items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-20">
      {data?.map((product) => (
        <ProductItem key={product.id} {...{ product }} />
      ))}
    </div>
  );
};
