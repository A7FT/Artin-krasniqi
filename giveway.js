// Countdown Timer
const countdown = () => {
    const deadline = new Date("2024-12-31T23:59:59").getTime();
    const now = new Date().getTime();
    const diff = deadline - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days < 10 ? `0${days}` : days;
    document.getElementById("hours").textContent = hours < 10 ? `0${hours}` : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? `0${seconds}` : seconds;

    if (diff <= 0) {
        clearInterval(timer);
    }
};

const timer = setInterval(countdown, 1000);
countdown();

// Form Submission
const giveawayForm = document.getElementById("giveawayForm-AK");
const successMessage = document.getElementById("successMessage-AK");

giveawayForm.addEventListener("submit", (event) => {
    event.preventDefault();
    giveawayForm.style.display = "none";
    successMessage.classList.remove("hidden-AK");
});

// Social Sharing
const shareOnFacebook = () => {
    alert("Shared on Facebook - A.K.");
};

const shareOnInstagram = () => {
    alert("Shared on Instagram - A.K.");
};

const shareOnTwitter = () => {
    alert("Shared on Twitter - A.K.");
};