document.getElementById('complaintForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Parandalon refresh të faqeve

    // Merr të dhënat nga forma
    let name = document.getElementById('name').value;
    let product = document.getElementById('product').value;
    let complaint = document.getElementById('complaint').value;

    // Këtu mund të dërgoni të dhënat në një server, por për tani vetëm do të shfaqim mesazhin falënderues
    console.log("Emri:", name);
    console.log("Produkti:", product);
    console.log("Ankesa:", complaint);

    // Shfaq mesazhin falënderues
    document.getElementById('complaintForm').reset(); // Pastro formën
    document.getElementById('thankYouMessage').classList.remove('hidden-AK');
});
