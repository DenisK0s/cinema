const schemeSvg = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
let BASIC_PRICE = 800;
let totalprice = 0;

schemeSvg.addEventListener("click", (event) => {
  if (!event.target.classList.contains("booked")) {
    event.target.classList.toggle("active");
    let totalSeats = schemeSvg.querySelectorAll(".active").length;
    totalprice = totalSeats * BASIC_PRICE;
    totalPriceTag.textContent = totalprice;
  }
});
