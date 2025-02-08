// Shembuj të dhënash të produkteve
const products = [
  { name: "Smartphone", category: "electronics", price: 699, id: "smartphone" },
  { name: "Laptop", category: "electronics", price: 1299, id: "laptop" },
  { name: "Jacket", category: "fashion", price: 120, id: "jacket" },
  { name: "Coffee Maker", category: "home", price: 89, id: "coffeemaker" },
  { name: "Dress", category: "fashion", price: 77, id: "dress" },
  { name: "Shoes", category: "fashion", price: 100, id: "shoes" },
  { name: "TV", category: "electronics", price: 899, id: "tv" },
  { name: "Prada Glasses", category: "fashion", price: 600, id: "glasses" },
  { name: "Drone U18", category: "electronics", price: 77, id: "drone" },
  { name: "LW Bag", category: "fashion", price: 350, id: "bag" },
];

// Render Products
function renderProducts(filter = "", search = "") {
  const productList = document.getElementById("product-list");
  const productCards = productList.querySelectorAll(".AK-product-card");

  productCards.forEach(card => {
    const productName = card.querySelector("h5").textContent.toLowerCase();
    const product = products.find(p => p.name.toLowerCase() === productName);

    if (!product) return; // Nëse produkti nuk ekziston, mos vazhdo

    const matchesCategory = !filter || filter === "all" || product.category === filter;
    const matchesSearch = !search || productName.includes(search.toLowerCase());

    card.style.display = matchesCategory && matchesSearch ? "block" : "none";
  });
}

// Filter and Search Events
document.getElementById("category-filter").addEventListener("change", (event) => {
  renderProducts(event.target.value, document.getElementById("search-bar").value);
});

document.getElementById("search-bar").addEventListener("input", (event) => {
  renderProducts(document.getElementById("category-filter").value, event.target.value);
});

// Add to Cart Event Listener
document.getElementById("product-list").addEventListener("click", (event) => {
  if (event.target.classList.contains("AK-add-to-cart")) {
    const productName = event.target.closest(".AK-product-card").querySelector("h5").innerText;
    alert(`${productName} has been added to your cart.`);
  }
});

// Initial Render
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents page reload
  
  const form = this;
  const formData = new FormData(form);

  // Send data via Formspree
  fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
  })
  .then(response => {
      if (response.ok) {
          // Show success message
          alert('Message received successfully!');
          
          // Reset the form
          form.reset();

          // Scroll to the 'testimonials' section
          const testimonialsSection = document.getElementById("testimonials");
          if (testimonialsSection) {
              testimonialsSection.scrollIntoView({ behavior: 'smooth' });
          } else {
              console.error("Section with ID 'testimonials' not found.");
          }
      } else {
          alert('Something went wrong! Please try again later.');
      }
  })
  .catch(error => {
      console.error('There was an error:', error);
      alert('There was an error sending your message!');
  });
});
