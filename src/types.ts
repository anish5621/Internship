export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  stock: number;
  status: ProductStatus;
  discountCode?: string;
}

export type ProductCategory = 'Electronics' | 'Clothing' | 'Books' | 'Home';
export type ProductStatus = 'active' | 'discontinued';
export type SortOrder = 'none' | 'low-high' | 'high-low';

export type CreateProductInput = Omit<Product, 'id'>;