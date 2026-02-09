const grid = document.getElementById("product-grid");
const flavorSelect = document.getElementById("flavor-select");
const url = "./data.json";
let allProducts = [];
async function loadProducts() {
  {
    const response = await fetch(url);
    allProducts = await response.json();
    displayProducts(allProducts);
  }
}
function displayProducts(products) {
  grid.innerHTML = products
    .map(
      (item) => `
        <div class="card" style="background-color: ${item.color}">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p class="desc">${item.description}</p>
            
            <div class="details">
                <span class="weight">Net Wt: ${item.weight}</span>
<p class="ingredients"><b>Ingredients:</b> ${item.ingredients}</p>
            </div>

            <div class="price">$${item.price}</div>
            <button class="add-btn" style="background-color: ${item.btnColor}">Add to Cart</button>
        </div>
        `,
    )
    .join("");
}
flavorSelect.addEventListener("change", function (e) {
  const selectedFlavor = e.target.value;
  if (selectFlavor === "all") {
    displayProducts(allProducts);
  } else {
    const filtered = allProducts.filter((p) => p.name === selectedFlavor);
    displayProducts(filtered);
  }
});
loadProducts();
