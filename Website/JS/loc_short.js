document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".button").forEach((button, index) => {
        button.addEventListener("click", function () {
            // Daten aus der geklickten Karte extrahieren
            let card = button.closest(".card");
            let title = card.querySelector("h3").innerText;
            let description = card.querySelector("p").innerText;
            let imageSrc = card.querySelector("img").src;
            
            // Daten im localStorage speichern
            localStorage.setItem("selectedTitle", title);
            localStorage.setItem("selectedDescription", description);
            localStorage.setItem("selectedImage", imageSrc);
            
            // Zur Zielseite weiterleiten
            window.location.href = "loc_single.html";
        });
    });
});

