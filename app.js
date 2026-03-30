let tabAphabet = [
	"a",
	"z",
	"e",
	"r",
	"t",
	"y",
	"u",
	"i",
	"o",
	"p",
	"q",
	"s",
	"d",
	"f",
	"g",
	"h",
	"j",
	"k",
	"l",
	"m",
	"w",
	"x",
	"c",
	"v",
	"b",
	"n",
	"A",
	"Z",
	"E",
	"R",
	"T",
	"Y",
	"U",
	"I",
	"O",
	"P",
	"Q",
	"S",
	"D",
	"F",
	"G",
	"H",
	"J",
	"k",
	"L",
	"M",
	"W",
	"X",
	"C",
	"V",
	"B",
	"N",
];
let tabSpe = [
	"$",
	"^",
	"¨",
	"$",
	"¤",
	"£",
	"=",
	"+",
	"@",
	"^",
	"#",
	";",
	":",
	"!",
	"§",
	"*",
	"µ",
	"°",
	"`",
	"~",
	"&",
	"'",
	"-",
	"_",
	"/",
	"|",
	"\ ",
	"<",
	">",
	"?",
	".",
];
/*
const $ = document.querySelector("");
*/
// the most important
const $genePass = document.querySelector("#genePass");
const $PassVue = document.querySelector("#PassVue");
const $btnCopie = document.querySelector("#btnCopie");
const $PassPara = document.querySelector("#PassPara");
// liste
let $btnpresets = document.querySelectorAll(".preset");
let $btns = document.querySelectorAll("button");
let $as = document.querySelectorAll("a");
// sound
const Sbtnsound = document.querySelector("#btnsound");
const Sasound = document.querySelector("#asound");
const Ssecret = document.querySelector("#secret");
// other
const $img = document.querySelector("img");
const $changeWebColor = document.querySelector("#changeWebColor");
let dataPassPara = new FormData($PassPara);
let typOfPasdCar = dataPassPara.get("typeOfPasswordCaracter");
let length = dataPassPara.get("lenghtPassword");
let data = new FormData($changeWebColor);
let i = 1;
while (i < $btns.length) {
	$btns[i].addEventListener("click", () => {
		let sound = new Audio("asset/sound/soundbtn.wav");
		sound.play();
	});
	i++;
}
i = 0;
while (i < $as.length) {
	$as[i].addEventListener("click", () => {
		let sound = new Audio("asset/sound/asound.wav");
		sound.play();
	});
	i++;
}
i = 0;
while (i < $btnpresets.length) {
	let num = i;
	$btnpresets[i].addEventListener("click", () => {
		chosepreset(num);
	});
	i++;
}
$img.addEventListener("click", () => {
	let sound = new Audio("asset/sound/secretsound.wav");
	sound.play();
});
$genePass.addEventListener("click", () => {
	let password = "";
	let random = Math.round(Math.random);
	dataPassPara = new FormData($PassPara);
	typOfPasdCar = dataPassPara.get("typeOfPasswordCaracter");
	length = dataPassPara.get("lenghtPassword");
	if (typOfPasdCar == "onlyAlphabet") {
		for (let i = 0; i < length; i++) {
			password += tabAphabet[Math.floor(Math.random() * tabAphabet.length)];
		}
	} else if (typOfPasdCar == "onlyNumber") {
		for (let i = 0; i < length; i++) {
			password += Math.floor(Math.random() * 9.9);
		}
	} else if (typOfPasdCar == "onlySpecialCaracter") {
		for (let i = 0; i < length; i++) {
			password += tabSpe[Math.floor(Math.random() * tabSpe.length)];
		}
	} else if (typOfPasdCar == "alphabetPlusNumber") {
		for (let i = 0; i < length; i++) {
			if (Math.round(Math.random()) == 0) {
				password += tabAphabet[Math.floor(Math.random() * tabAphabet.length)];
			} else {
				password += Math.floor(Math.random() * 9.9);
			}
		}
	} else if (typOfPasdCar == "ALLcaracter") {
		for (let i = 0; i < length; i++) {
			random = Math.round(Math.random() * 3);
			if (random == 0) {
				password += tabAphabet[Math.floor(Math.random() * tabAphabet.length)];
			} else if (random == 1) {
				password += Math.floor(Math.random() * 9.9);
			} else if (random == 2) {
				password += tabSpe[Math.floor(Math.random() * tabSpe.length)];
			} else {
				password += "*";
			}
		}
	}
	$PassVue.textContent = password;
});
$PassPara.addEventListener("submit", (e) => {
	e.preventDefault();
});
$PassVue.addEventListener("click", async () => {
	try {
		await navigator.clipboard.writeText($PassVue.textContent);
	} catch (err) {
		console.error("Erreur lors de la copie du texte: ", err);
	}
});
$btnCopie.addEventListener("click", async () => {
	try {
		await navigator.clipboard.writeText($PassVue.textContent);
	} catch (err) {
		console.error("Erreur lors de la copie du texte: ", err);
	}
});
$changeWebColor.addEventListener("submit", (event) => {
	event.preventDefault();
	data = new FormData($changeWebColor);
	document.documentElement.style.setProperty(
		"--color-web-normalize",
		data.get("color-web-normalize"),
	);
	document.documentElement.style.setProperty(
		"--color-base-button",
		data.get("color-base-button"),
	);
	document.documentElement.style.setProperty(
		"--color-base-button-hover",
		data.get("color-base-button-hover"),
	);
	document.documentElement.style.setProperty(
		"--color-base-button-active",
		data.get("color-base-button-active"),
	);
	document.documentElement.style.setProperty(
		"--border-color",
		data.get("border-color"),
	);
	document.documentElement.style.setProperty(
		"--border-color-hover",
		data.get("border-color-hover"),
	);
	document.documentElement.style.setProperty(
		"--text-color",
		data.get("text-color"),
	);
	document.documentElement.style.setProperty(
		"--text-color-hover",
		data.get("text-color-hover"),
	);
	document.documentElement.style.setProperty("--a-color", data.get("a-color"));
	document.documentElement.style.setProperty(
		"--a-color-hover",
		data.get("a-color-hover"),
	);
	document.documentElement.style.setProperty(
		"--box-shadow",
		data.get("box-shadow"),
	);
	document.documentElement.style.setProperty(
		"--box-shadow-hover",
		data.get("box-shadow-hover"),
	);
	document.documentElement.style.setProperty(
		"--hr-color",
		data.get("hr-color"),
	);
	document.documentElement.style.setProperty("--secret", data.get("secret"));
});
function preset1() {
	document.documentElement.style.setProperty(
		"--color-web-normalize",
		"#008793",
	);
	document.documentElement.style.setProperty("--color-base-button", "#0000c5");
	document.documentElement.style.setProperty(
		"--color-base-button-hover",
		"#0028c5",
	);
	document.documentElement.style.setProperty(
		"--color-base-button-active",
		"#ffffff",
	);
	document.documentElement.style.setProperty("--border-color", "#434343");
	document.documentElement.style.setProperty("--border-color-hover", "#131313");
	document.documentElement.style.setProperty("--text-color", "#00f2ff");
	document.documentElement.style.setProperty("--text-color-hover", "#a0faff");
	document.documentElement.style.setProperty("--a-color", "#ff01ff");
	document.documentElement.style.setProperty("--a-color-hover", "#ffbbff");
	document.documentElement.style.setProperty("--box-shadow", "#4747ff");
	document.documentElement.style.setProperty("--box-shadow-hover", "#ffffff");
	document.documentElement.style.setProperty("--hr-color", "#00000096");
	document.documentElement.style.setProperty("--secret", "#b8f9ff");
}
function preset2() {
	document.documentElement.style.setProperty(
		"--color-web-normalize",
		"#008793",
	);
	document.documentElement.style.setProperty("--color-base-button", "#0000c5");
	document.documentElement.style.setProperty(
		"--color-base-button-hover",
		"#0028c5",
	);
	document.documentElement.style.setProperty(
		"--color-base-button-active",
		"#ffffff",
	);
	document.documentElement.style.setProperty("--border-color", "#434343");
	document.documentElement.style.setProperty("--border-color-hover", "#131313");
	document.documentElement.style.setProperty("--text-color", "#00f2ff");
	document.documentElement.style.setProperty("--text-color-hover", "#a0faff");
	document.documentElement.style.setProperty("--a-color", "#ff01ff");
	document.documentElement.style.setProperty("--a-color-hover", "#ffbbff");
	document.documentElement.style.setProperty("--box-shadow", "#4747ff");
	document.documentElement.style.setProperty("--box-shadow-hover", "#000000");
	document.documentElement.style.setProperty("--hr-color", "#00000096");
	document.documentElement.style.setProperty("--secret", "#b8f9ff");
}
function preset3() {
	document.documentElement.style.setProperty(
		"--color-web-normalize",
		"#008793",
	);
	document.documentElement.style.setProperty("--color-base-button", "#0000c5");
	document.documentElement.style.setProperty(
		"--color-base-button-hover",
		"#0028c5",
	);
	document.documentElement.style.setProperty(
		"--color-base-button-active",
		"#ffffff",
	);
	document.documentElement.style.setProperty("--border-color", "#434343");
	document.documentElement.style.setProperty("--border-color-hover", "#131313");
	document.documentElement.style.setProperty("--text-color", "#00f2ff");
	document.documentElement.style.setProperty("--text-color-hover", "#a0faff");
	document.documentElement.style.setProperty("--a-color", "#ff01ff");
	document.documentElement.style.setProperty("--a-color-hover", "#ffbbff");
	document.documentElement.style.setProperty("--box-shadow", "#4747ff");
	document.documentElement.style.setProperty("--box-shadow-hover", "#ffffff");
	document.documentElement.style.setProperty("--hr-color", "#00000096");
	document.documentElement.style.setProperty("--secret", "#b8f9ff");
}

function chosepreset(num) {
	if (num == 0) {
		preset1();
	} else if (num == 1) {
		preset2();
	} else if (num == 2) {
		preset3();
	}
}
/* 
	document.getRootNode()
	document.documentElement.style.setProperty('--color-web-normalize', '#ffffff');
*/
