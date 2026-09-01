import { loadProductsFromStorage, saveProductsToStorage } from './storage.js';
let products = loadProductsFromStorage();
// READ
export function getProducts() {
    return [...products];
}
// CREATE
export function addProduct(input) {
    const newProduct = {
        id: Date.now().toString(),
        ...input
    };
    products.push(newProduct);
    saveProductsToStorage(products);
    return newProduct;
}
// UPDATE
export function updateProduct(id, updatedFields) {
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
export function deleteProduct(id) {
    products = products.filter(prod => prod.id !== id);
    saveProductsToStorage(products);
}
export function calculateTotalValue() {
    return products.reduce((total, prod) => total + (prod.price * prod.stock), 0);
}
export function isValidCategory(val) {
    return ['Electronics', 'Clothing', 'Books', 'Home'].includes(val);
}
export function validateFormInput(input) {
    if (!input.name.trim())
        return "Product name is required.";
    if (input.price <= 0)
        return "Price must be greater than 0.";
    if (input.stock < 0)
        return "Stock cannot be negative.";
    return null;
}
