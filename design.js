document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    const productSelect = document.getElementById("AK-product-select");
    const colorSelect = document.getElementById("AK-color-select");
    const customTextInput = document.getElementById("AK-custom-text");
    const fontSelect = document.getElementById("AK-font-select");
    const fontSizeInput = document.getElementById("AK-font-size");
    const textPositionXInput = document.getElementById("AK-text-position-x");
    const textPositionYInput = document.getElementById("AK-text-position-y");
    const textGradient = document.getElementById("AK-text-gradient");
    const textGlow = document.getElementById("AK-text-glow");
    const textMirror = document.getElementById("AK-text-mirror");
    const uploadImage = document.getElementById("AK-upload-image");

    const productImages = {
        tshirt: document.getElementById("AK-tshirt-image"),
        mug: document.getElementById("AK-mug-image"),
        cap: document.getElementById("AK-cap-image"),
        hoodie: document.getElementById("AK-hoodie-image")
    };

    const customTextPreview = document.getElementById("AK-custom-text-preview");
    const successModal = document.getElementById("AK-success-modal");
    const closeModalBtn = document.getElementById("AK-close-modal");
    const applyChangesBtn = document.getElementById("AK-apply-changes");

    // Function to update product preview based on selected product
    const updateProductPreview = () => {
        const selectedProduct = productSelect.value;
        Object.keys(productImages).forEach(product => {
            productImages[product].classList.add("AK-hidden-product");
        });
        productImages[selectedProduct].classList.remove("AK-hidden-product");
    };

    // Function to apply customization to the text preview
    const updateTextPreview = () => {
        const customText = customTextInput.value;
        const color = colorSelect.value;
        const font = fontSelect.value;
        const fontSize = fontSizeInput.value;
        const positionX = textPositionXInput.value;
        const positionY = textPositionYInput.value;

        // Apply styles to the custom text preview
        customTextPreview.textContent = customText;
        customTextPreview.style.color = color;
        customTextPreview.style.fontFamily = font;
        customTextPreview.style.fontSize = `${fontSize}px`;
        customTextPreview.style.left = `${positionX}px`;
        customTextPreview.style.top = `${positionY}px`;

        // Apply effects if selected
        if (textGradient.checked) {
            customTextPreview.style.background = "linear-gradient(to right, #ff7e5f, #feb47b)";
            customTextPreview.style.webkitBackgroundClip = "text";
            customTextPreview.style.color = "transparent";
        } else {
            customTextPreview.style.background = "none";
            customTextPreview.style.color = color;
        }

        if (textGlow.checked) {
            customTextPreview.style.textShadow = "0 0 10px rgba(255, 255, 255, 0.7)";
        } else {
            customTextPreview.style.textShadow = "none";
        }

        if (textMirror.checked) {
            customTextPreview.style.transform = "scaleY(-1)";
        } else {
            customTextPreview.style.transform = "none";
        }
    };

    // Apply changes when button is clicked
    applyChangesBtn.addEventListener("click", () => {
        updateProductPreview();
        updateTextPreview();
        successModal.style.display = "flex";
    });

    // Close modal when "OK" button is clicked
    closeModalBtn.addEventListener("click", () => {
        successModal.style.display = "none";
    });

    // Listen for changes on form fields to update the preview
    productSelect.addEventListener("change", updateProductPreview);
    colorSelect.addEventListener("input", updateTextPreview);
    customTextInput.addEventListener("input", updateTextPreview);
    fontSelect.addEventListener("change", updateTextPreview);
    fontSizeInput.addEventListener("input", updateTextPreview);
    textPositionXInput.addEventListener("input", updateTextPreview);
    textPositionYInput.addEventListener("input", updateTextPreview);
    textGradient.addEventListener("change", updateTextPreview);
    textGlow.addEventListener("change", updateTextPreview);
    textMirror.addEventListener("change", updateTextPreview);

    // Initialize the preview on page load
    updateProductPreview();
    updateTextPreview();
});