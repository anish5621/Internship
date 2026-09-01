import { Product } from './types.js';

const STORAGE_KEY = 'ts_products_data';

export function loadProductsFromStorage(): Product[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error: unknown) {
    console.error('Storage error:', error);
    return [];
  }
}

export function saveProductsToStorage(products: Product[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}