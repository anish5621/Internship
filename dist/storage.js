const STORAGE_KEY = 'ts_products_data';
export function loadProductsFromStorage() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    }
    catch (error) {
        console.error('Storage error:', error);
        return [];
    }
}
export function saveProductsToStorage(products) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}
