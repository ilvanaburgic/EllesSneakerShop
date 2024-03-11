/*POVEZNICA ZA OVAJ PRVI BUTTON LOOK AT THE OFFER - HOME PAGE*/
function redirectToShop() {
  window.location.href = "shop.html"; 
}

function redirectToShop(){
  window.location.href = "profile.html"
}

// Dobivanje PORUKE na DUGME i poruku KAD SE PRITISNE BUY
const buyButton = document.getElementById("buyButton");
const successMessage = document.getElementById("successMessage");

// DA SALJE NA HOME PAGE NAKON 2 sekunde KADA SE KLIKNE BUY
buyButton.addEventListener("click", () => {
  successMessage.style.display = "block";

  setTimeout(() => {
    successMessage.style.display = "none";
    window.location.href = "index.html"; 
  }, 2000);
});


