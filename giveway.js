// Countdown Timer
const AK_countdown = () => {
    const deadline = new Date("2024-12-31T23:59:59").getTime();
    const now = new Date().getTime();
    const diff = deadline - now;

    if (diff <= 0) {
        clearInterval(AK_timer);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("AK-days").textContent = days.toString().padStart(2, '0');
    document.getElementById("AK-hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("AK-minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("AK-seconds").textContent = seconds.toString().padStart(2, '0');
};

const AK_timer = setInterval(AK_countdown, 1000);
AK_countdown();

// Form Submission
document.addEventListener("DOMContentLoaded", () => {
    const AK_giveawayForm = document.getElementById("AK-giveawayForm");
    const AK_successMessage = document.getElementById("AK-successMessage");

    if (AK_giveawayForm && AK_successMessage) {
        AK_giveawayForm.addEventListener("submit", (event) => {
            event.preventDefault();
            AK_giveawayForm.style.display = "none";
            AK_successMessage.classList.remove("AK-hidden");
            AK_successMessage.style.display = "block"; // Sigurohemi që bëhet i dukshëm
        });
    }
});

// Social Sharing
const AK_shareOnFacebook = () => alert("Shared on Facebook - A.K.");
const AK_shareOnInstagram = () => alert("Shared on Instagram - A.K.");
const AK_shareOnTwitter = () => alert("Shared on Twitter - A.K.");
