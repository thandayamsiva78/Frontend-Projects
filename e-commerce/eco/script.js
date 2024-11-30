const menuToggle = document.getElementById("menuToggle");
const closeToggle = document.getElementById("closeToggle");
const mobileViewNav = document.getElementById("mobile-view-navbar");
const cartContainer = document.getElementById("cart-container");
const asideCartContainer = document.getElementById("aside-cart-container");
const asideCLoseToggle = document.getElementById("asidecloseToggle");
const closeToggleCart = document.getElementById("closeToggle-cart");


menuToggle.addEventListener("click", function () {
  menuToggle.style.display = "none";
  closeToggle.style.display = "block";
  mobileViewNav.style.display = "block";

});

closeToggle.addEventListener("click", () => {
  menuToggle.style.display = "block";
  closeToggle.style.display = "none";
  mobileViewNav.style.display = "none";
});

asideCLoseToggle.addEventListener("click", function () {
  const aside = document.getElementById("aside");
  aside.style.display = "none";
});

// cart Icon clicked
cartContainer.addEventListener("click", function () {
  const asideCartContainer = document.getElementById("aside-cart-container");
  const asideProdectAllDetails = document.getElementById(
    "aside-product-all-details"
  );
  aside.style.display = "block";
  asideCartContainer.style.display = "block";
  asideProdectAllDetails.style.display = "none";
});

// cart Close Toggle
closeToggleCart.addEventListener("click", function () {
  const asideCartContainer = document.getElementById("aside-cart-container");
  const asideProdectAllDetails = document.getElementById(
    "aside-product-all-details"
  );
  aside.style.display = "none";
  asideCartContainer.style.display = "none";
  asideProdectAllDetails.style.display = "block";
});





const placeholderTexts = [
  "Search 'smart watches'",
  "Search 'headphones'",
  "Search 'Sound bar'",
  "Search 'blutooth'",
];



let index = 0;


function changePlaceholder() {
  const inputField = document.getElementById("search-input");
  inputField.placeholder = placeholderTexts[index];
  index = (index + 1) % placeholderTexts.length;
}

setInterval(changePlaceholder, 2000);





const createBestSeller = [
  {
    topHeading: "Engraving Availbale",
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917",
    caption: "40 Hours Playback",
    productName: "boAt Airdopes 161",
    currentPrice: "899",
    actuallPrice: "2,490",
    offer: "64 % Off",
  },
  {
    topHeading: "Engraving Availbale",
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049",
    caption: "60 Hours Playback",
    productName: "boAt Airdopes 131",
    currentPrice: "699",
    actuallPrice: "2,990",
    offer: "77 % Off",
  },
  {
    topHeading: "Engraving Availbale",
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_Alpha.jpg?v=1688452927",
    caption: "35 Hours Playback",
    productName: "boAt Airdopes Alpha",
    currentPrice: "749",
    actuallPrice: "4,499",
    offer: "78 % Off",
  },
  {
    topHeading: "Engraving Availbale",
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_141.png?v=1703145765",
    caption: "42 Hours Playback",
    productName: "boAt Airdopes 141",
    currentPrice: "899",
    actuallPrice: "2490",
    offer: "64 % Off",
  },
  {
    topHeading: "Engraving Availbale",
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/LIfestyle-renders.jpg?v=1685614895",
    caption: "BT Calling ",
    productName: "boAt Ultimate Connect Max",
    currentPrice: "1,399",
    actuallPrice: "8,999",
    offer: "84 % Off",
  },
  {
    topHeading: "Engraving Availbale",
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Ultima_Select.jpg?v=1707299725",
    caption: "AMOLED DISPLAY",
    productName: "boAt Ultima Select",
    currentPrice: "2,499",
    actuallPrice: "12,999",
    offer: "81 % Off",
  },
  {
    topHeading: "Engraving Availbale",
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Ultima_Prism.webp?v=1701692613",
    caption: "AMOLED DISPLAY",
    productName: "boAt Ultima Prism",
    currentPrice: "1,399",
    actuallPrice: "8,999",
    offer: "80 % Off",
  },
  {
    topHeading: "Engraving Availbale",
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/X400.jpg?v=1702526246",
    caption: "BT Call",
    productName: "boAt Enigma Radiant",
    currentPrice: "2,699",
    actuallPrice: "8,499",
    offer: "68 % Off",
  },
  {
    topHeading: "Engraving Availbale",
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_110.jpg?v=1698387127",
    caption: "40 Hours Playback",
    productName: "boAt Rockerz 110",
    currentPrice: "799",
    actuallPrice: "2,490",
    offer: "68 % Off",
  },
  {
    topHeading: "Engraving Availbale",
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_109.jpg?v=1697621745",
    caption: "60 Hours Playback",
    productName: "boAt Rockerz 255 Pro+",
    currentPrice: "1,099",
    actuallPrice: "3,990",
    offer: "72 % Off",
  },
  {
    topHeading: "Engraving Availbale",
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/r255pro_55d805bc-f2e1-4861-9533-8eee57081305.jpg?v=1682573437",
    caption: "150 Hours Playback",
    productName: "boAt Rockerz Trinity",
    currentPrice: "1,099",
    actuallPrice: "2,499",
    offer: "56 % Off",
  },
  {
    topHeading: "Engraving Availbale",
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/rockerz_trinity.jpg?v=1692340413",
    caption: "42 Hours Playback",
    productName: "boAt Rockerz 150 Pro",
    currentPrice: "899",
    actuallPrice: "2490",
    offer: "64 % Off",
  },
  {
    topHeading: "Engraving Availbale",
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Rockerz-450-Pro.jpg?v=1682579854",
    caption: "70 Hours Playback",
    productName: "boAt Rockerz 450 Pro",
    currentPrice: "899",
    actuallPrice: "1,599",
    offer: "60 % Off",
  },
  {
    topHeading: "Engraving Availbale",
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AB_Orion_Plus.jpg?v=1714468423",
    caption: "160W RMA Sound",
    productName: "boAt Aavante Bar Orion Plus",
    currentPrice: "8,499",
    actuallPrice: "21,990",
    offer: "61 % Off",
  },
  {
    topHeading: "Engraving Availbale",
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AB_5400D.jpg?v=1711019254",
    caption: "550W RMS Sound",
    productName: "boAt Aavante Bar 5400D",
    currentPrice: "17,999",
    actuallPrice: "54,990",
    offer: "67 % Off",
  },
];


function createBestSellerCards() {
  createBestSeller.forEach((content) => {
    const div = document.createElement("div");
    const box = document.createElement("div");
    const box2 = document.createElement("div");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const h1 = document.createElement("h1");

    const h11 = document.createElement("h1");
    const h22 = document.createElement("h2");
    const h33 = document.createElement("h2");

    h3.textContent = content.topHeading;
    h3.className = "topHeading";
    img.src = content.image;
    img.alt = "product-image";
    img.className = "productImage";
    img.id = "aside-product-image";
    h2.textContent = content.caption;
    h2.className = "caption";
    h1.textContent = content.productName;
    h1.className = "productName";
    h11.textContent = `₹${content.currentPrice}`;
    h11.className = "currentPrice";

    h22.innerHTML = `<s>₹${content.actuallPrice}</s>`;
    h22.className = "actuallPrice";
    h33.textContent = content.offer;
    h33.className = "offer";

    box.appendChild(h3);
    box.appendChild(img);
    box.appendChild(h2);
    box.appendChild(h1);
    box.className = "box";

    div.appendChild(box);
    div.appendChild(h11);

    box2.appendChild(h22);
    box2.appendChild(h33);
    div.appendChild(box2);
    div.id = "product-container";

    box2.className = "bottom-price";

    const bestSellers = document.getElementById("best-sellers");
    bestSellers.appendChild(div);
  });
}

createBestSellerCards();





// Display aside ::::::

const productContainers = document.querySelectorAll("#product-container");
productContainers.forEach((container, index) => {
  container.addEventListener("click", function () {
    const viewAsideRight = document.getElementById("aside");
    viewAsideRight.style.display = "block";

    // Get the correct product based on the container's index
    
    const product = createBestSeller[index]; // Access the product using index

    const asideProductName = document.getElementById("aside-product-name");
    asideProductName.innerText = product.productName; // Set product name in the aside section

    const asideProductImage = document.getElementById("aside-product-image");
    asideProductImage.innerHTML = `<img src="${product.image}" alt="aside-image" />`;
    // asideProductImage.style.height = "200px";
    // asideProductImage.style.borderRadius = "16px";

    const asideProductCurrentPrice = document.getElementById(
      "aside-current-price"
    );
    asideProductCurrentPrice.innerText = `₹${product.currentPrice}`;

    const asideProductCurrentPrice2 = document.getElementById(
      "aside-current-price2"
    );
    asideProductCurrentPrice2.innerText = `₹${product.currentPrice}`;

    const asideProductActuallPrice = document.getElementById(
      "aside-actuall-price"
    );
    asideProductActuallPrice.innerHTML = `<s>₹${product.actuallPrice}<s/>`;

    const asideProductActuallPrice2 = document.getElementById(
      "aside-actuall-price2"
    );
    asideProductActuallPrice2.innerHTML = `<s>₹${product.actuallPrice}<s/>`;

    const asideProductOffer = document.getElementById("aside-product-offer");
    asideProductOffer.innerText = product.offer;

    const asideProductOffer2 = document.getElementById("aside-product-offer2");
    asideProductOffer2.innerText = product.offer;
  });
});





// let totalAmount = 0;
// let savingsAmount = 0;

// let count = 0;
// // Quantity and Stock Handling
// let selectedQuantity = 1; // Default quantity for each product
// const maxStock = 15; // Example: Maximum stock available for each product

// // Quantity Selector - Increase
// function increaseQuantity() {
//   const quantityInput = document.getElementById("quantity-input");
//   if (selectedQuantity < maxStock) {
//     selectedQuantity++;
//     quantityInput.value = selectedQuantity;
//   } else {
//     alert(`Only ${maxStock} items available in stock!`);
//   }
// }

// // Quantity Selector - Decrease
// function decreaseQuantity() {
//   const quantityInput = document.getElementById("quantity-input");
//   if (selectedQuantity > 1) {
//     selectedQuantity--;
//     quantityInput.value = selectedQuantity;
//   } else {
//     alert("Quantity can't be less than 1");
//   }
// }




let count = 0;
let totalAmount = 0;
let savingsAmount = 0;

// let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
// let count = cartItems.length || 0; // Initialize the count from localStorage

const addToCart = document.getElementById("addToCart");

addToCart.addEventListener("click", function () {
  // Get product details
  const cartProductName =
    document.getElementById("aside-product-name").textContent;
  const cartProductImage = document.getElementById("aside-product-image").src;
  let cartCurrentPrice = document.getElementById(
    "aside-current-price"
  ).textContent;
  let cartActualPrice = document.getElementById(
    "aside-actuall-price"
  ).textContent;
  const cartOffer = document.getElementById("aside-product-offer").textContent;

  // Remove any currency symbols (if present) and convert to numbers
  cartCurrentPrice = parseFloat(cartCurrentPrice.replace(/[^0-9.-]+/g, ""));
  cartActualPrice = parseFloat(cartActualPrice.replace(/[^0-9.-]+/g, ""));

  // Log the details to the console for debugging
  console.log({
    cartProductImage,
    cartCurrentPrice,
    cartActualPrice,
    cartOffer,
  });

  // Create a new div for the cart item
  const cartDiv = document.createElement("div");
  cartDiv.classList.add("cart-item"); // Add class for styling

  // Create individual elements for the product details
  const ctImage = document.createElement("img");
  ctImage.src = cartProductImage;
  ctImage.classList.add("cart-image"); // Add class for styling

  const detailsDiv = document.createElement("div"); // Div to hold the details
  detailsDiv.classList.add("cart-details");

  const ctProductName = document.createElement("h1");
  const ctCurrentPrice = document.createElement("h1");
  const ctActualPrice = document.createElement("h2");
  const ctOff = document.createElement("h3");

  ctProductName.innerText = `${cartProductName}`;
  ctCurrentPrice.innerText = `₹${cartCurrentPrice}`;
  ctActualPrice.innerHTML = `<s>₹${cartActualPrice}</s>`;
  ctOff.innerText = `${cartOffer}`;

  // storing detains in Local storage:
  

  localStorage.setItem("Product Name " , ctProductName.innerText);
  localStorage.setItem("Current Price" , ctCurrentPrice.innerText);
  localStorage.setItem("Actual Price" , ctActualPrice.innerText);
  localStorage.setItem("% Off " , ctOff.innerText);

  // for stylling
  ctProductName.style.fontWeight = "bold";
  ctCurrentPrice.style.fontWeight = "bold";
  ctOff.style.color = "green";
  ctActualPrice.style.color = "gray";
  ctActualPrice.style.fontWeight = "bold";
  ctOff.style.fontWeight = "bold";

  // Append the elements to the details div
  detailsDiv.appendChild(ctProductName);
  detailsDiv.appendChild(ctCurrentPrice);
  detailsDiv.appendChild(ctActualPrice);
  detailsDiv.appendChild(ctOff);

  // Append the image and the details div to the cart div
  cartDiv.appendChild(ctImage);
  cartDiv.appendChild(detailsDiv);

  // Append the cart div to the aside-cart-container
  const asideCartContainer = document.getElementById("aside-cart-container");
  asideCartContainer.appendChild(cartDiv);

  // Updating cart count
  alert(`${cartProductName} has been added to your cart!`);
  count++;
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = count;

  // Update total amount and savings
  const savings = cartActualPrice - cartCurrentPrice; // Calculate savings
  updateAmount(cartCurrentPrice, savings);
});

function updateAmount(current, save) {
  const TOTALAMOUNT = document.getElementById("totalAmount");
  const SAVINGS = document.getElementById("savings");

  totalAmount += current;
  savingsAmount += save;

  TOTALAMOUNT.innerText = `₹${totalAmount}`;
  SAVINGS.innerText = `₹${savingsAmount}`;
}












const reviews = [
  {
    name: "John Doe",
    rating: 5,
    comment: "Excellent product! Highly recommend.",
    date: "2024-10-01",
  },
  {
    name: "Jane Smith",
    rating: 4,
    comment: "Very good, but it could be improved.",
    date: "2024-10-02",
  },
  {
    name: "Bob Johnson",
    rating: 3,
    comment: "Average experience, nothing special.",
    date: "2024-10-03",
  },

];

function loadReviews(filter = "all") {
  const reviewsContainer = document.getElementById("reviewsContainer");
  reviewsContainer.innerHTML = ""; // Clear existing reviews

  const filteredReviews = reviews.filter((review) => {
    return filter === "all" || review.rating === parseInt(filter);
  });

  filteredReviews.forEach((review) => {
    const reviewElement = document.createElement("div");
    reviewElement.className = "border-b border-gray-300 py-2";
    reviewElement.innerHTML = `
      <h2 class="font-bold">${review.name} - ${review.rating} Stars</h2>
      <p>${review.comment}</p>
      <small class="text-gray-500">${review.date}</small>
    `;
    reviewsContainer.appendChild(reviewElement);
  });
}

// Initial load
loadReviews();

// Event listener for filter change
document.getElementById("filter").addEventListener("change", (event) => {
  loadReviews(event.target.value);
});

// Event listener for sorting by date (not implemented in this basic example)
document.getElementById("sortByDate").addEventListener("click", () => {
  const sortedReviews = reviews.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  loadReviews(); // Re-load with sorted reviews (you can modify the function to accept sorted reviews)
});

const buyNow = document.getElementById("buyNow");
buyNow.addEventListener("Click", function () {
  if (cartCurrentPrice.value || TOTALAMOUNT) {
    alert("Order Placed Successfully.");
  } else {
    alert("please choose any product");
  }
});



