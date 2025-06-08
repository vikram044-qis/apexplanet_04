const products = [
  { name: "Laptop", category: "electronics", rating: 4.5 },
  { name: "T-Shirt", category: "clothing", rating: 4.2 },
  { name: "Smartphone", category: "electronics", rating: 4.8 },
  { name: "Jeans", category: "clothing", rating: 4.1 }
];

function displayProducts(filtered) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  filtered.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<strong>${p.name}</strong><br>Category: ${p.category}<br>Rating: ${p.rating}`;
    container.appendChild(div);
  });
}

function filterProducts() {
  const category = document.getElementById("categoryFilter").value;
  const sort = document.getElementById("sortFilter").value;

  let filtered = [...products];

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  filtered.sort((a, b) => sort === "asc" ? a.rating - b.rating : b.rating - a.rating);

  displayProducts(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  filterProducts();
});
