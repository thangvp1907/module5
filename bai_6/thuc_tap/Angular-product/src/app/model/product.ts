import {Category} from './category';

export interface Product {
  id?: number;
  nameProduct?: string;
  price?: number;
  description?: string;
  category?: Category;
}
