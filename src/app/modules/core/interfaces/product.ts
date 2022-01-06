export interface ProductResponse {
  products: Product[];
  pages:    number;
  page:     number;
  next:     boolean;
  previous:  boolean;
  count:    number;
}

export interface Product {
  id:    number;
  name:  string;
  stars: number;
  price: number;
  image: string;
}
