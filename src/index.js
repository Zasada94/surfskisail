//elements
const product1 = document.getElementById("product1");
const product2 = document.getElementById("product2");
const product3 = document.getElementById("product3");
const card = document.getElementById("card");
const cardImage = document.getElementById("cardImage");
const backButton = document.getElementById("backButton");
const moreButton = document.getElementById("moreButton");

//toggle product class
product1.addEventListener("click", () => {
	cardImage.innerHTML = `<div class="cardDescription">
		<div class="descriptionTitle">
		<span>
			Surf & wind & kite
		</span>
		</div>
		<div class="options">
		<span>
		Surfingowe wyjazdy świadczą:
		</span>
			<ul>
			<a href="https://wavecamp.pl/"><li>wavecamp</li></a>
				<li></li>
				<li></li>
			</ul>
		</div>
		</div><img src='./images/card1.png' alt='card' class="cardImage"/>`;
	card.classList.add("show");
	card.classList.remove("hide");
});
product2.addEventListener("click", () => {
	cardImage.innerHTML = `<img src='./images/card2.png' alt='card' class="cardImage"/>`;
	card.classList.add("show");
	card.classList.remove("hide");
});
product3.addEventListener("click", () => {
	cardImage.innerHTML = `<img src='./images/card3.png' alt='card' class="cardImage"/>`;
	card.classList.add("show");
	card.classList.remove("hide");
});

//buttons
backButton.addEventListener("click", () => {
	card.classList.remove("show");
	card.classList.add("hide");
});
moreButton.addEventListener("click", () => {
	console.log("klik poprawny");
});
