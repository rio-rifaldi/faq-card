import "./style.css";




let li = document.querySelectorAll(".text-container .list li.item");
// let detail  =  document.querySelectorAll('.text-container .list li.item .detail');

li.forEach((e) => {
	e.addEventListener("click", (a) => {
		let item = a.target.closest(".item");
		let detail = item.querySelector(".detail");
		let itemScrollHeight = item.scrollHeight;
		let itemActive = item.classList.contains("active");
		item.classList.toggle("active");

		if (itemActive) {
			detail.style.maxHeight = null;
		} else {
			detail.style.maxHeight = `${itemScrollHeight}px`;
		}
		console.log(detail.style.maxHeight);
		return false;
	});
});

let item_text_container = document.querySelector(".faq .text-container .item-text-container ");

let form = document.querySelector(".faq .text-container div#form");
let confuse = document.getElementById("aks");
let thanks = document.querySelector(".thanks");
let button = form.querySelector("button[type=submit]");

let names = document.getElementById("name");
let email = document.getElementById("email");

confuse.addEventListener("click", (a) => {
	item_text_container.style.display = "none";
	form.style.display = "block";
	a.target.style.display = "none";
});

form.addEventListener("submit", (a) => {
	thanks.querySelector(".text .name").innerHTML = `${names.value}`;
	thanks.querySelector(".text .mail").innerHTML = `${email.value}`;

	item_text_container.style.display = "block";
	a.target.style.display = "none";
	confuse.style.display = "inline";
	thanks.style.animation = "showing 1.2s 1 forwards .3s,hide 1.2s 1 forwards 4.8s ";

	a.preventDefault();
	a.stopPropagation();
});
