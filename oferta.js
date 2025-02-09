document.addEventListener("DOMContentLoaded", () => {
    // AK - Script for handling product selection and order submission
    const AK_buyButtons = document.querySelectorAll(".AK-buy-btn");
    const AK_productDetails = document.getElementById("AK-product-details");
    const AK_mainContent = document.getElementById("AK-main-content");
    const AK_backBtn = document.getElementById("AK-back-btn");
    const AK_productImage = document.getElementById("AK-product-image");
    const AK_productTitle = document.getElementById("AK-product-title");

    AK_buyButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const AK_product = event.target.closest(".AK-product-card");
            const AK_productImgSrc = AK_product.querySelector("img").src;
            const AK_productTitleText = AK_product.querySelector("h2").textContent;

            AK_productImage.src = AK_productImgSrc;
            AK_productTitle.textContent = AK_productTitleText;

            AK_mainContent.classList.add("AK-hidden");
            AK_productDetails.classList.remove("AK-hidden");
        });
    });

    AK_backBtn.addEventListener("click", () => {
        AK_productDetails.classList.add("AK-hidden");
        AK_mainContent.classList.remove("AK-hidden");
    });

    const AK_form = document.getElementById("AK-purchase-form");
    AK_form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Your order has been placed successfully!");
        AK_productDetails.classList.add("AK-hidden");
        AK_mainContent.classList.remove("AK-hidden");
    });
});
