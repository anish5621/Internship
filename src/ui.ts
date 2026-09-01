import { SortOrder } from './types.js';
import { getProducts, calculateTotalValue } from './productService.js';

// DOM Selections
export const openFormBtn = document.getElementById('openFormBtn') as HTMLButtonElement;
export const formPanel = document.getElementById('formPanel') as HTMLDivElement;
export const productForm = document.getElementById('productForm') as HTMLFormElement;
export const productIdInput = document.getElementById('productId') as HTMLInputElement;
export const nameInput = document.getElementById('name') as HTMLInputElement;
export const descriptionInput = document.getElementById('description') as HTMLInputElement;
export const priceInput = document.getElementById('price') as HTMLInputElement;
export const stockInput = document.getElementById('stock') as HTMLInputElement;
export const categorySelect = document.getElementById('category') as HTMLSelectElement;
export const statusSelect = document.getElementById('status') as HTMLSelectElement;

export const productListEl = document.getElementById('productList') as HTMLDivElement;
export const totalValueEl = document.getElementById('totalValue') as HTMLSpanElement;
export const appErrorEl = document.getElementById('appError') as HTMLParagraphElement;
export const emptyMessageEl = document.getElementById('emptyMessage') as HTMLParagraphElement;

export const searchInput = document.getElementById('searchInput') as HTMLInputElement;
export const filterCategory = document.getElementById('filterCategory') as HTMLSelectElement;
export const filterStatus = document.getElementById('filterStatus') as HTMLSelectElement;
export const sortByPrice = document.getElementById('sortByPrice') as HTMLSelectElement;

export const formTitle = document.getElementById('formTitle') as HTMLHeadingElement;
export const cancelBtn = document.getElementById('cancelBtn') as HTMLButtonElement;

export function hideFormPanel(): void {
  if (formPanel) formPanel.classList.add('hidden');
}

export function showFormPanel(): void {
  if (formPanel) formPanel.classList.remove('hidden');
}

export function showError(message: string): void {
  appErrorEl.textContent = message;
  setTimeout(() => {
    appErrorEl.textContent = '';
  }, 4000);
}

export function render(): void {
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

  const sortOption = sortByPrice.value as SortOrder;
  if (sortOption === 'low-high') {
    displayed.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'high-low') {
    displayed.sort((a, b) => b.price - a.price);
  }

  totalValueEl.textContent = calculateTotalValue().toFixed(2);
  productListEl.innerHTML = '';

  if (displayed.length === 0) {
    emptyMessageEl.classList.remove('hidden');
  } else {
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