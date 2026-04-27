const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

async function request(path) {
  const response = await fetch(`${API_BASE_URL}${path}`);
  const payload = await response.json();

  if (!response.ok) {
    throw new Error(payload.message || 'Request failed.');
  }

  return payload;
}

export async function getProducts(category = 'All') {
  const params = new URLSearchParams({ category });
  const data = await request(`/products?${params.toString()}`);
  return data.products;
}
