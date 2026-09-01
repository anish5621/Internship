import { getProducts, calculateTotalValue } from './productService.js';
// DOM Selections
export const openFormBtn = document.getElementById('openFormBtn');
export const formPanel = document.getElementById('formPanel');
export const productForm = document.getElementById('productForm');
export const productIdInput = document.getElementById('productId');
export const nameInput = document.getElementById('name');
export const descriptionInput = document.getElementById('description');
export const priceInput = document.getElementById('price');
export const stockInput = document.getElementById('stock');
export const categorySelect = document.getElementById('category');
export const statusSelect = document.getElementById('status');
export const productListEl = document.getElementById('productList');
export const totalValueEl = document.getElementById('totalValue');
export const appErrorEl = document.getElementById('appError');
export const emptyMessageEl = document.getElementById('emptyMessage');
export const searchInput = document.getElementById('searchInput');
export const filterCategory = document.getElementById('filterCategory');
export const filterStatus = document.getElementById('filterStatus');
export const sortByPrice = document.getElementById('sortByPrice');
export const formTitle = document.getElementById('formTitle');
export const cancelBtn = document.getElementById('cancelBtn');
export function hideFormPanel() {
    if (formPanel)
        formPanel.classList.add('hidden');
}
export function showFormPanel() {
    if (formPanel)
        formPanel.classList.remove('hidden');
}
export function showError(message) {
    appErrorEl.textContent = message;
    setTimeout(() => {
        appErrorEl.textContent = '';
    }, 4000);
}
export function render() {
    let displayed = getProducts();
    const query = searchInput.value.toLowerCase().trim();
    if (query) {
        displayed = displayed.filter(p => p.name.toLowerCase().includes(query));
    }
    if (filterCategory.value !== 'all') {
        displayed = displayed.filter(p => p.category === filterCategory.value);
    }
    if (filterStatus.value !== 'all') {
        displayed = displayed.filter(p => p.status === filterStatus.value);
    }
    const sortOption = sortByPrice.value;
    if (sortOption === 'low-high') {
        displayed.sort((a, b) => a.price - b.price);
    }
    else if (sortOption === 'high-low') {
        displayed.sort((a, b) => b.price - a.price);
    }
    totalValueEl.textContent = calculateTotalValue().toFixed(2);
    productListEl.innerHTML = '';
    if (displayed.length === 0) {
        emptyMessageEl.classList.remove('hidden');
    }
    else {
        emptyMessageEl.classList.add('hidden');
    }
    // Card generation
    displayed.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
      <h3>${product.name}</h3>
      <span class="badge ${product.status}">${product.status}</span>
      <p><strong>Category:</strong> ${product.category}</p>
      <p><strong>Description:</strong> ${product.description}</p>
      <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
      <p><strong>Stock:</strong> ${product.stock}</p>
      <div style="margin-top: 10px; display: flex; gap: 8px;">
        <button onclick="editProduct('${product.id}')">Edit</button>
        <button class="danger" onclick="handleDelete('${product.id}')">Delete</button>
      </div>
    `;
        productListEl.appendChild(card);
    });
}
