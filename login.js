
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Parandalon që forma të dërgohet dhe të refresh faqen

    const email = document.getElementById("email").value; // Merr emailin
    const password = document.getElementById("password").value; // Merr fjalëkalimin

    // Kontrollo nëse emaili është i saktë dhe fjalëkalimi është i plotë
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Pattern për verifikimin e emailit

    if (!emailPattern.test(email)) {
        alert("Ju lutemi futni një email të vlefshëm!");
        return; // Nëse emaili nuk është valid, ndalo kalimin
    }

    if (password.trim() === "") {
        alert("Fjalëkalimi nuk mund të jetë bosh!");
        return; // Nëse fjalëkalimi është bosh, ndalo kalimin
    }

    // Kontrollo nëse fjalëkalimi është i saktë (12345678)
    if (password !== "12345678") {
        alert("Fjalëkalimi është i gabuar!");
        return; // Nëse fjalëkalimi nuk është 12345678, ndalo kalimin
    }

    // Nëse të dhënat janë të sakta, ridrejtohuni në faqen tjetër
    window.location.href = 'Welcome.html'; // Ridrejto në faqen tjetër
});

