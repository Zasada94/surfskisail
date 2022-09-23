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
	moreButton.classList.remove("buttonHide");
	cardImage.innerHTML = `<img src='./images/card1.png' alt='card' class="cardImage"/>`;
	card.classList.add("show");
	card.classList.remove("hide");
	moreButton.addEventListener("click", () => {
		cardImage.innerHTML = `<div class="cardDescription" style="color: white">
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
			<li><a href="https://wavecamp.pl/">wavecamp</a></li>
			<li><a href="https://surftravel.pl/">surftravel</a></li>
			<li><a href="https://surfwyjazdy.pl/">surfwyjazdy</a></li>
			<li><a href="https://easy-surf.com/">easy-surf</a></li>
			<li><a href="https://surfski.pl/">surfski</a></li>
			<li><a href="https://surf-4-life.pl/">surf-4-life</a></li>
			</ul>
		</div>
		</div><img src='./images/card1.png' alt='card' class="cardImage"/>`;
		moreButton.classList.add("buttonHide");
	});
});
product2.addEventListener("click", () => {
	moreButton.classList.remove("buttonHide");
	cardImage.innerHTML = `<img src='./images/card2.png' alt='card' class="cardImage"/>`;
	card.classList.add("show");
	card.classList.remove("hide");
	moreButton.addEventListener("click", () => {
		cardImage.innerHTML = `<div class="cardDescription" style="color: white">
		<div class="descriptionTitle">
		<span>
			Sail & Cruise
		</span>
		</div>
		<div class="options">
		<span>
		Żeglarskie wyjazdy oferują:
		</span>
			<ul>
			<li><a href="https://wyjazdyaktywne.pl/">wyjazdyaktywne</a></li>
			<li><a href="https://theboattrip.eu/">theboattrip</a></li>
			<li><a href="https://bluewaterclub.pl/">bluewaterclub</a></li>
			<li><a href="https://puntovita.pl/">puntovita</a></li>
			<li><a href="https://bebluesailing.com/">bebluesailing</a></li>
			<li><a href="https://morskierejsy.pl/">morskierejsy</a></li>
			</ul>
		</div>
		</div><img src='./images/card2.png' alt='card' class="cardImage"/>`;
		moreButton.classList.add("buttonHide");
	});
});
product3.addEventListener("click", () => {
	moreButton.classList.remove("buttonHide");
	cardImage.innerHTML = `<img src='./images/card3.png' alt='card' class="cardImage"/>`;
	card.classList.add("show");
	card.classList.remove("hide");
	moreButton.addEventListener("click", () => {
		cardImage.innerHTML = `<div class="cardDescription" style="color: black">
		<div class="descriptionTitle">
		<span>
			Ski & Snow & Boards
		</span>
		</div>
		<div class="options">
		<span>
		Zabawę w śniegu proponują:
		</span>
			<ul >
			<li><a style="color: black" href="https://snowshow.pl/">snowshow</a></li>
			<li><a style="color: black" href="https://taksidi.pl/">taksidi</a></li>
			<li><a style="color: black" href="https://nanarty.pl/">nanarty</a></li>
			<li><a style="color: black" href="https://snowevents.pl/">snowevents</a></li>
			<li><a style="color: black" href="https://portaski.pl/">portaski</a></li>
			<li><a style="color: black" href="https://feeltheflow.pl/">feeltheflow</a></li>
			</ul>
		</div>
		</div><img src='./images/card3.png' alt='card' class="cardImage"/>`;
		moreButton.classList.add("buttonHide");
	});
});

//buttons
backButton.addEventListener("click", () => {
	card.classList.remove("show");
	card.classList.add("hide");
});
