const openSignal = document.getElementById("openOrClosed");
const shopSymbol = document.getElementById("shopSymbol");
const nowTime = new Date();
const openTime = new Date();
const closeTime = new Date();

openTime.setHours(8, 30, 0);
closeTime.setHours(17, 0, 0);

//Checks to see if current user time is within business hours
if (!(nowTime >= openTime && nowTime < closeTime)) {
  openSignal.innerHTML = "CLOSED!";
  openSignal.style.color = "#802F1F";
  shopSymbol.classList.remove("fa-shop");
  shopSymbol.classList.add("fa-shop-lock");
  shopSymbol.style.color = "#802F1F";
}
