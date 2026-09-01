import { Product, CreateProductInput, ProductCategory } from './types.js';
import { loadProductsFromStorage, saveProductsToStorage } from './storage.js';

let products: Product[] = loadProductsFromStorage();

// READ
export function getProducts(): Product[] {
  return [...products];
}

// CREATE
export function addProduct(input: CreateProductInput): Product {
  const newProduct: Product = {
    id: Date.now().toString(),
    ...input
  };
  products.push(newProduct);
  saveProductsToStorage(products);
  return newProduct;
}

// UPDATE
export function updateProduct(id: string, updatedFields: Partial<CreateProductInput>): boolean {
  let updated = false;
  products = products.map(prod => {
    if (prod.id === id) {
      updated = true;
      return { ...prod, ...updatedFields };
    }
    return prod;
  });

  if (updated) {
    saveProductsToStorage(products);
  }
  return updated;
}

// DELETE
export function deleteProduct(id: string): void {
  products = products.filter(prod => prod.id !== id);
  saveProductsToStorage(products);
}

export function calculateTotalValue(): number {
  return products.reduce((total, prod) => total + (prod.price * prod.stock), 0);
}

export function isValidCategory(val: string): val is ProductCategory {
  return ['Electronics', 'Clothing', 'Books', 'Home'].includes(val);
}

export function validateFormInput(input: CreateProductInput): string | null {
  if (!input.name.trim()) return "Product name is required.";
  if (input.price <= 0) return "Price must be greater than 0.";
  if (input.stock < 0) return "Stock cannot be negative.";
  return null;
}