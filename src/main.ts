import { ProductStatus, CreateProductInput } from './types.js';
import { 
  getProducts, 
  addProduct, 
  updateProduct, 
  deleteProduct, 
  isValidCategory, 
  validateFormInput 
} from './productService.js';
import * as UI from './ui.js';

(window as unknown as Record<string, unknown>).handleDelete = (id: string): void => {
  deleteProduct(id);
  UI.render();
};

(window as unknown as Record<string, unknown>).editProduct = (id: string): void => {
  const prod = getProducts().find(p => p.id === id);
  if (!prod) return;

  UI.productIdInput.value = prod.id;
  UI.nameInput.value = prod.name;
  UI.descriptionInput.value = prod.description;
  UI.priceInput.value = prod.price.toString();
  UI.stockInput.value = prod.stock.toString();
  UI.categorySelect.value = prod.category;
  UI.statusSelect.value = prod.status;

  UI.formTitle.textContent = 'Update Product';
  UI.cancelBtn.classList.remove('hidden');

  UI.showFormPanel();
};

function resetForm(): void {
  UI.productForm.reset();
  UI.productIdInput.value = '';
  UI.formTitle.textContent = 'Add Product';
  UI.cancelBtn.classList.add('hidden');
}

if (UI.openFormBtn) {
  UI.openFormBtn.addEventListener('click', () => {
    resetForm();
    UI.showFormPanel();
  });
}

UI.cancelBtn.addEventListener('click', () => {
  resetForm();
  UI.hideFormPanel();
});

// Form Submission
UI.productForm.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  const categoryValue = UI.categorySelect.value;
  if (!isValidCategory(categoryValue)) {
    UI.showError("Invalid category selected.");
    return;
  }

  const formData: CreateProductInput = {
    name: UI.nameInput.value,
    description: UI.descriptionInput.value,
    price: parseFloat(UI.priceInput.value),
    stock: parseInt(UI.stockInput.value, 10),
    category: categoryValue,
    status: UI.statusSelect.value as ProductStatus
  };

  const validationError = validateFormInput(formData);
  if (validationError) {
    UI.showError(validationError);
    return;
  }

  const existingId = UI.productIdInput.value;
  if (existingId) {
    updateProduct(existingId, formData);
  } else {
    addProduct(formData);
  }

  resetForm();
  UI.render();
  UI.hideFormPanel();
});

UI.searchInput.addEventListener('input', UI.render);
UI.filterCategory.addEventListener('change', UI.render);
UI.filterStatus.addEventListener('change', UI.render);
UI.sortByPrice.addEventListener('change', UI.render);

UI.render();