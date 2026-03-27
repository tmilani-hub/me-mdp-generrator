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

/*
const $ = document.querySelector("")
*/
const $img = document.querySelector("img");
let $btns = document.querySelectorAll("button");
let $as = document.querySelectorAll("a");
const Sbtnsound = document.querySelector("#btnsound");
const Sasound = document.querySelector("#asound");
const Ssecret = document.querySelector("#secret");
const $PassVue = document.querySelector("#PassVue");
const $genePass = document.querySelector("#genePass");
const $PassPara = document.querySelector("#PassPara");

let dataPassPara = new FormData($PassPara);

for (let i = 0; i < $btns.length; i++) {
	$btns[i].addEventListener("click", (e) => {
		e.preventDefault();
		Sbtnsound.play();
	});
}
for (let i = 0; i < $as.length; i++) {
	$as[i].addEventListener("click", () => {
		Sasound.play();
	});
}

$img.addEventListener("click", () => {
	Ssecret.play();
});

$genePass.addEventListener("click", () => {
	let password = "";
	let length = dataPassPara.get(lenghtPassword);
	for (let i = 0; i < length; i++) {
		password += liste;
	}
});
