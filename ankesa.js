document.getElementById('AK-complaintForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Parandalon refresh-in e faqes

    // Merr të dhënat nga forma
    let name = document.getElementById('AK-name').value;
    let product = document.getElementById('AK-product').value;
    let complaint = document.getElementById('AK-complaint').value;

    // Këtu mund të dërgoni të dhënat në një server, por për tani vetëm do të shfaqim mesazhin falënderues
    console.log("Emri:", name);
    console.log("Produkti:", product);
    console.log("Ankesa:", complaint);

    // Shfaq mesazhin falënderues
    document.getElementById('AK-complaintForm').reset(); // Pastro formën
    document.getElementById('AK-thankYouMessage').classList.remove('AK-hidden');
});
