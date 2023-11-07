var video = document.getElementById("player1");

window.addEventListener("load", function () {
	console.log("Good job opening the window")

	video.autoplay = false;
	video.loop = false;
	video.load();

	document.getElementById('volume').innerHTML = video.volume * 100 + "%";

});

document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");

	video.play();
});

document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");

	video.pause();
});

document.querySelector("#slower").addEventListener("click", function () {
	console.log("Slow Video");

	video.playbackRate -= .1;

	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function () {
	console.log("Fast Video");

	video.playbackRate += .1;

	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function () {
	console.log("Skip Video");

	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime += 10;
	}

	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
	button = document.getElementById("mute");

	if (video.muted === true) {
		console.log("Unmute Video");
		video.muted = false;
		button.innerHTML = "Mute";
	}
	else {
		console.log("Mute Video");
		video.muted = true;
		button.innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("change", function () {
	let vol = this.value;

	document.getElementById('volume').innerHTML = vol + "%";

	video.volume = vol / 100;
});

document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
});

