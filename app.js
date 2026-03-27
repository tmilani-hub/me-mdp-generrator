/*
const $ = document.querySelector("")
*/
const $img = document.querySelector("img")
let $btns = document.querySelectorAll("button")
let $as = document.querySelectorAll("a")
const Sbtnsound = document.querySelector("#btnsound")
const Sasound = document.querySelector("#asound")
const Ssecret = document.querySelector("#secret")

for (let i = 0; i < $btns.length; i++) {
	$btns[i].addEventListener("click", (e) => {
		e.preventDefault()
		Sbtnsound.play()
	})
}
for (let i = 0; i < $as.length; i++) {
	$as[i].addEventListener("click", () => {
		Sasound.play()
	})
}

$img.addEventListener("click", () => {
	Ssecret.play()
})