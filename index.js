//elements 
const product1 = document.getElementById("product1");
const product2 = document.getElementById("product2");
const product3 = document.getElementById("product3");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const backButton1 = document.querySelector(".backButton1");
const backButton2 = document.querySelector(".backButton2");
const backButton3 = document.querySelector(".backButton3");
const moreButton = document.querySelectorAll(".moreButton");

//toggle product class
product1.addEventListener("click", () => {
	card1.classList.add("show");
	card1.classList.remove("hide");
});
product2.addEventListener("click", () => {
	card2.classList.add("show");
	card2.classList.remove("hide");
});
product3.addEventListener("click", () => {
	card3.classList.add("show");
	card3.classList.remove("hide");
});
//buttons 
backButton1.addEventListener("click", () => {
	card1.classList.remove("show");
	card1.classList.add("hide");
});
backButton2.addEventListener("click", () => {
	card2.classList.remove("show");
	card2.classList.add("hide");
});
backButton3.addEventListener("click", () => {
	card3.classList.remove("show");
	card3.classList.add("hide");
});
moreButton.forEach((item) => {
	item.addEventListener("click", () => {
		console.log("klik poprawny");
	});
});
