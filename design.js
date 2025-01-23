document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    const productSelectAK = document.getElementById("product-select");
    const colorSelectAK = document.getElementById("color-select");
    const customTextAK = document.getElementById("custom-text");
    const fontSelectAK = document.getElementById("font-select");
    const fontSizeAK = document.getElementById("font-size");
    const textPositionXAK = document.getElementById("text-position-x");
    const textPositionYAK = document.getElementById("text-position-y");
    const textPreviewAK = document.getElementById("custom-text-preview");
    const successModalAK = document.getElementById("success-modal");
    const closeModalAK = document.getElementById("close-modal");
    const textGradientAK = document.getElementById("text-gradient");
    const textGlowAK = document.getElementById("text-glow");
    const textMirrorAK = document.getElementById("text-mirror");
    const uploadImageAK = document.getElementById("upload-image");

    // Function to apply text changes to preview
    const applyTextChangesAK = () => {
        textPreviewAK.textContent = customTextAK.value;
        textPreviewAK.style.fontFamily = fontSelectAK.value;
        textPreviewAK.style.fontSize = `${fontSizeAK.value}px`;
        textPreviewAK.style.color = colorSelectAK.value;

        // Gradient effect
        if (textGradientAK.checked) {
            textPreviewAK.style.backgroundImage = `linear-gradient(90deg, ${colorSelectAK.value}, #ff9a9e)`;
            textPreviewAK.style.backgroundClip = "text";
            textPreviewAK.style.color = "transparent";
        } else {
            textPreviewAK.style.backgroundImage = "none";
        }

        // Glow effect
        if (textGlowAK.checked) {
            textPreviewAK.style.textShadow = `0 0 10px ${colorSelectAK.value}, 0 0 20px ${colorSelectAK.value}`;
        } else {
            textPreviewAK.style.textShadow = "none";
        }

        // Mirror effect
        if (textMirrorAK.checked) {
            textPreviewAK.style.transform = "scaleX(-1)";  // Fixed mirror effect
        } else {
            textPreviewAK.style.transform = "none";
        }

        // Position text based on X and Y input
        textPreviewAK.style.position = 'absolute';
        textPreviewAK.style.left = `${textPositionXAK.value}px`;
        textPreviewAK.style.top = `${textPositionYAK.value}px`;
    };

    // Show modal after applying changes
    const showModalAK = () => {
        successModalAK.style.display = "flex";
    };

    // Close modal
    const closeModalHandlerAK = () => {
        successModalAK.style.display = "none";
    };

    // Handle product selection change
    productSelectAK.addEventListener("change", () => {
        const selectedProduct = productSelectAK.value;

        // Clear current image source
        document.querySelectorAll(".hidden-product").forEach((img) => {
            img.classList.remove("active-product");
        });

        // Set new image based on selected product
        const selectedImage = document.getElementById(`${selectedProduct}-image`);
        if (selectedImage) {
            selectedImage.classList.add("active-product");
        }
    });

    // Handle image upload
    uploadImageAK.addEventListener("change", (event) => {
        const reader = new FileReader();
        reader.onload = () => {
            const uploadedImage = new Image();
            uploadedImage.src = reader.result;
            document.getElementById("product-image").src = uploadedImage.src;
        };
        reader.readAsDataURL(event.target.files[0]);
    });

    // Apply changes and show success modal
    document.getElementById("apply-changes").addEventListener("click", () => {
        applyTextChangesAK();
        showModalAK();
    });

    // Close modal
    closeModalAK.addEventListener("click", closeModalHandlerAK);

    // Download the customized product as an image
    document.getElementById("download-design").addEventListener("click", () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Ensure canvas size matches the product image
        const productImage = document.querySelector(".active-product");
        canvas.width = productImage.width;
        canvas.height = productImage.height;
        ctx.drawImage(productImage, 0, 0, canvas.width, canvas.height);

        // Draw text on canvas
        const textPositionAK = {
            x: parseInt(textPositionXAK.value),
            y: parseInt(textPositionYAK.value),
        };
        ctx.font = `${fontSizeAK.value}px ${fontSelectAK.value}`;
        ctx.fillStyle = colorSelectAK.value;
        ctx.textAlign = "center";
        ctx.fillText(customTextAK.value, textPositionAK.x, textPositionAK.y);

        // Create download link for the image
        const link = document.createElement("a");
        link.download = "customized-product.png";
        link.href = canvas.toDataURL();
        link.click();
    });

    // Apply text changes immediately when any change happens
    customTextAK.addEventListener("input", applyTextChangesAK);
    fontSelectAK.addEventListener("change", applyTextChangesAK);
    fontSizeAK.addEventListener("input", applyTextChangesAK);
    colorSelectAK.addEventListener("input", applyTextChangesAK);
    textGradientAK.addEventListener("change", applyTextChangesAK);
    textGlowAK.addEventListener("change", applyTextChangesAK);
    textMirrorAK.addEventListener("change", applyTextChangesAK);
    textPositionXAK.addEventListener("input", applyTextChangesAK);
    textPositionYAK.addEventListener("input", applyTextChangesAK);
});
