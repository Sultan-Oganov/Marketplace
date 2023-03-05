import { IProduct } from '../modules/redux/types/products';

export const hasAlredy = (basket: IProduct[], id: number) =>
  basket.some((product) => product.id === id);
