const AK_chatBox = document.getElementById("AK-chat-box");
const AK_userInput = document.getElementById("AK-user-input");
const AK_chatContainer = document.getElementById("AK-chat-container");
const AK_chatIcon = document.getElementById("AK-chat-icon");
const AK_closeChatButton = document.getElementById("AK-close-chat");
const AK_sendMessageButton = document.getElementById("AK-send-message");

const AK_greetings = ["pershendetje", "hi", "hello", "qkemi", "tung", "hey"];

const AK_products = {
    "këpucë": ["këpucë", "shoes", "shoe"],
    "tv": ["tv", "televizor", "television"],
    "led": ["led", "ledat", "drita led"],
    "clothes": ["clothes", "rroba", "veshje"],
    "drone": ["drone", "dron"],
    "parfum": ["parfum", "perfume"],
    "dress": ["dress", "fustan"],
    "airpods": ["airpods", "airpod"],
    "syze": ["syze", "glasses"],
    "çantë": ["çantë", "bag"],
    "coffeemaker": ["coffeemaker", "kafe", "ekspres kafeje"],
    "jacket": ["jacket", "xhaketa", "xhaketë"],
    "tinishooping": ["faqe", "dyqan"],
    "kthimi": ["kthy", "kthim"],
    "transporti": ["transport", "dergesa"]
};

const AK_responses = {
    "këpucë": "Këpucët tona janë cilësore dhe të rehatshme. Modele nga 39 deri në 45. Çmimi nis nga 50€.",
    "tv": "TV-të tona janë 4K UHD me teknologji moderne. Modele nga Samsung, LG dhe Sony.",
    "led": "LED dritat janë të ndriçimit të lartë dhe me opsione shumëngjyrëshe. Ideale për çdo ambient.",
    "clothes": "Kemi një gamë të gjerë rrobash me stile të ndryshme për meshkuj dhe femra.",
    "drone": "Drontë tanë janë të fuqishëm, me kamerë 4K dhe stabilizim automatik.",
    "parfum": "Parfumet tona janë origjinale dhe kanë aroma të qëndrueshme.",
    "dress": "Fustanet tona janë të dizajnuara për çdo rast, nga elegant deri te casual.",
    "airpods": "AirPods janë të gjeneratës së fundit me zë të pastër dhe bateri të gjatë.",
    "syze": "Syzet tona mbrojnë sytë nga rrezet UV dhe kanë dizajne moderne.",
    "çantë": "Çantat tona janë të qëndrueshme dhe të përshtatshme për çdo stil.",
    "coffeemaker": "Makineritë e kafesë bëjnë espresso të shijshme dhe janë lehtë për përdorim.",
    "jacket": "Xhaketat tona janë të ngrohta dhe rezistente ndaj ujit, ideale për dimër.",
    "tinishooping": "Kjo faqe është në pronësi të Artin Krasniqit, është krijuar para 5 viteve dhe funksionon në shumicën e vendeve evropiane...",
    "kthimi": "Produktet duhet të shikohen paraprakisht. Pasi të nënshkruhet kontrata, produkti nuk mund të kthehet.",
    "transporti": "Transporti bëhet brenda 1 jave, varësisht nga vendi dhe opsioni i zgjedhur për dërgesën."
};

function AK_sendMessage() {
    let message = AK_userInput.value.trim().toLowerCase();
    if (message === "") return;
    
    AK_appendMessage("user", message);
    
    setTimeout(() => {
        if (AK_greetings.includes(message)) {
            AK_appendMessage("bot", "Përshëndetje! Si mund t’ju ndihmoj?");
            return;
        }
        
        let foundProducts = [];
        for (let key in AK_products) {
            AK_products[key].forEach(synonym => {
                if (message.includes(synonym)) {
                    foundProducts.push(key);
                }
            });
        }
        
        if (foundProducts.length > 0) {
            foundProducts.forEach(product => {
                AK_appendMessage("bot", AK_responses[product]);
            });
            AK_appendMessage("bot", "Faleminderit që përdore TiniBot!");
        } else {
            AK_appendMessage("bot", "Nuk kam përgjigje për këtë pyetje.");
        }
    }, 500);
    
    AK_userInput.value = "";
}

function AK_appendMessage(sender, text) {
    let messageDiv = document.createElement("div");
    messageDiv.classList.add(sender === "bot" ? "AK-bot-message" : "AK-user-message");
    messageDiv.innerText = text;
    AK_chatBox.appendChild(messageDiv);
    AK_chatBox.scrollTop = AK_chatBox.scrollHeight;
}

function AK_toggleChat() {
    AK_chatContainer.style.display = (AK_chatContainer.style.display === "none" || AK_chatContainer.style.display === "") ? "block" : "none";
}

function AK_handleKeyPress(event) {
    if (event.key === "Enter") {
        AK_sendMessage();
    }
}

AK_chatIcon.addEventListener("click", AK_toggleChat);
AK_closeChatButton.addEventListener("click", AK_toggleChat);
AK_sendMessageButton.addEventListener("click", AK_sendMessage);
AK_userInput.addEventListener("keypress", AK_handleKeyPress);