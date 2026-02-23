import { TCategory } from "./category";


export interface TProduct {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: TCategory;
  images: string[];
}