document.addEventListener("DOMContentLoaded", () => {
    // A.K. - Script for handling product selection and order submission
    const buyButtonsAK = document.querySelectorAll(".buy-btn-AK");
    const productDetailsAK = document.getElementById("product-details-AK");
    const mainContentAK = document.getElementById("main-content-AK");
    const backBtnAK = document.getElementById("back-btn-AK");
    const productImageAK = document.getElementById("product-image-AK");
    const productTitleAK = document.getElementById("product-title-AK");
  
    buyButtonsAK.forEach(button => {
        button.addEventListener("click", (event) => {
            const product = event.target.closest(".product-card-AK");
            const productImgSrc = product.querySelector("img").src;
            const productTitleText = product.querySelector("h2").textContent;
  
            productImageAK.src = productImgSrc;
            productTitleAK.textContent = productTitleText;
  
            mainContentAK.classList.add("hidden-AK");
            productDetailsAK.classList.remove("hidden-AK");
        });
    });
  
    backBtnAK.addEventListener("click", () => {
        productDetailsAK.classList.add("hidden-AK");
        mainContentAK.classList.remove("hidden-AK");
    });
  
    const formAK = document.getElementById("purchase-form-AK");
    formAK.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Your order has been placed successfully!");
        productDetailsAK.classList.add("hidden-AK");
        mainContentAK.classList.remove("hidden-AK");
    });
});
