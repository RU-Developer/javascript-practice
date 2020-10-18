const form = document.querySelector(".js-form"),
	  inputName = document.querySelector("#input-name"),
	  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
	  SHOWING_CN = "showing";


function saveName(text) {
	localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
	event.preventDefault();
	const currentValue = inputName.value;
	saveName(currentValue);
	paintGreeting(currentValue);
}

function askForName() {
	form.classList.add(SHOWING_CN);
	greeting.classList.remove(SHOWING_CN);
	form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
	form.classList.remove(SHOWING_CN);
	greeting.classList.add(SHOWING_CN);
	greeting.innerText = `환영합니다. ${text}님`;
}

function loadName() {
	const currentUser = localStorage.getItem(USER_LS);
	
	if(currentUser === null) {
		askForName();
	} else {
		paintGreeting(currentUser);
	}
}

function init() {
	loadName();
}

init();
