const pageOne = document.querySelector(".page-one");

const originalBg = "assets/hybrid-storytellers-RMYwNoKykQY-unsplash.jpg";
const tempBg = "assets/upsidedown.jpg";

setInterval(() => {
    // Wissel naar tijdelijke achtergrond
    pageOne.style.backgroundImage = `url("${tempBg}")`;

    // Blijf 1 minuut op tijdelijke foto
    setTimeout(() => {
        pageOne.style.backgroundImage = `url("${originalBg}")`;
    }, 60000); // 1 minuut

}, 180000); // 3 minuten