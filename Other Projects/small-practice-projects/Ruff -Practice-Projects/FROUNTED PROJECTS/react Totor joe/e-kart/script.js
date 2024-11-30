document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("mainImage");
  const colorSelect = document.getElementById("colorSelect");
  const quantityInput = document.getElementById("quantityInput");
  const addToCartBtn = document.getElementById("addToCartBtn");
  const cartNotification = document.getElementById("cartNotification");

  colorSelect.addEventListener("change", (event) => {
    const color = event.target.value;
    mainImage.src = `product-${color}.jpg`; // Update with appropriate image path
  });

  document.getElementById("increaseQuantity").addEventListener("click", () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
  });

  document.getElementById("decreaseQuantity").addEventListener("click", () => {
    if (quantityInput.value > 1) {
      quantityInput.value = parseInt(quantityInput.value) - 1;
    }
  });

  addToCartBtn.addEventListener("click", () => {
    const productDetails = {
      title: document.querySelector(".product-details h1").innerText,
      description: document.getElementById("productDescription").innerText,
      price: document.getElementById("productPrice").innerText,
      color: colorSelect.value,
      quantity: quantityInput.value,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(productDetails);
    localStorage.setItem("cart", JSON.stringify(cart));

    cartNotification.innerText = "Product added to cart successfully!";
    setTimeout(() => {
      cartNotification.innerText = "";
    }, 3000);
  });
});
