// ===== Hero Typing Effect =====
const heroHeading = document.querySelector(".hero-text h1 span");
const heroText = "Fashion That Defines You...";
let index = 0;

function typeHeroText() {
  if (heroHeading && index < heroText.length) {
    heroHeading.textContent += heroText.charAt(index);
    index++;
    setTimeout(typeHeroText, 150);
  }
}
typeHeroText();

// ===== Load Cart from Local Storage =====
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  const cartLink = document.querySelector(".bottom-nav a:last-child span");
  if (cartLink) {
    cartLink.textContent = cart.length;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ===== Add to Cart Buttons =====
const addButtons = document.querySelectorAll(".add-btn");
addButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card") || btn.closest(".product-card");
    const name = card.querySelector("h3").textContent.trim();
    const price = parseFloat(card.querySelector(".price").textContent.replace("₹", "").trim());
    const image = card.querySelector("img").src;

    // Check if product already in cart
    const existing = cart.find((item) => item.name === name);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ name, price, image, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(`${name} added to cart ✅`);
  });
});

// ===== Navbar Buttons =====
const loginBtn = document.querySelector(".login-btn");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    window.location.href = "login.html";
  });
}

const shopBtn = document.querySelector(".hero-text .btn");
if (shopBtn) {
  shopBtn.addEventListener("click", () => {
    window.location.href = "products.html";
  });
}

// ===== Bottom Navbar =====
const bottomLinks = document.querySelectorAll(".bottom-nav a");
bottomLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const text = link.textContent.toLowerCase();

    if (text.includes("home")) window.location.href = "index.html";
    else if (text.includes("shop")) window.location.href = "products.html";
    else if (text.includes("about")) window.location.href = "about.html";
    else if (text.includes("cart")) window.location.href = "cart.html";
  });
});

// ===== Initial Cart Count =====
updateCartCount();

