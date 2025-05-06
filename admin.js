
function addProduct() {
  const name = document.getElementById("product-name").value;
  const price = document.getElementById("product-price").value;
  const image = document.getElementById("product-image").value;
  const category = document.getElementById("product-category").value;

  const stored = localStorage.getItem("products");
  const products = stored ? JSON.parse(stored) : { electronics: [], tools: [], fashion: [] };

  products[category].push({ name, price, image });

  localStorage.setItem("products", JSON.stringify(products));
  alert("تمت إضافة المنتج!");
}
