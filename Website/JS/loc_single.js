document.addEventListener("DOMContentLoaded", function () {
    let title = localStorage.getItem("selectedTitle");
    let subtitle = localStorage.getItem("selectedDescription");
    let index = localStorage.getItem("index");

    index = parseInt(index) + 1;

    let heroUrl = "url('../img/loc_short/loc" + index + "/hero.png')";
    let url1 = "url('../img/loc_short/loc" + index + "/img1.png')";
    let url2 = "url('../img/loc_short/loc" + index + "/img2.png')";

    document.getElementById('place-title').innerText = title;
    document.getElementById('place-subtitle').innerText = subtitle;
    document.getElementById('hero-basic').style.backgroundImage = heroUrl;
    document.getElementById('image1').style.backgroundImage = url1;
    document.getElementById('image2').style.backgroundImage = url2;
});