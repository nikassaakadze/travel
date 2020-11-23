const hero = document.querySelector(".hero")
const banText = document.querySelector(".banner-text")

const tI = new TimelineMax()

tI.fromTo(hero, 1.5, {height: "0px"}, {height: "495px"})
.fromTo(banText, 1, {lineHeight: 0, opacity: 0}, {lineHeight: 1.4, opacity: 1})