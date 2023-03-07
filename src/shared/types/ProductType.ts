import { CategoryType } from './CategoryType';

export interface ProductType {
  id: string;
  name: string;
  image: string;
  price: number;
  category?: CategoryType;
}
