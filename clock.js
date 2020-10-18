const clockContainer = document.querySelector(".js-clock"),
	  clockTitle = document.querySelector(".js-clock__title");

function getTime() {
	const date = new Date();
	const minutes = date.getMinutes();
	const hours = date.getHours();
	const seconds = date.getSeconds();
	
	const minutesString = `${minutes >= 10 ? minutes : '0' + minutes}`;
	const hoursString = `${hours >= 10 ? hours : '0' + hours}`;
	const secondsString = `${seconds >= 10 ? seconds : '0' + seconds}`;
	
	clockTitle.innerText = `${hoursString}:${minutesString}:${secondsString}`;
}


function init() {
	getTime();
}

init();
