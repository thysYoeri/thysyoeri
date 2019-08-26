let menuKnop = document.querySelector(".menu");
let navMenu = document.querySelector("nav");
let mainSectie = document.querySelector("main");

function verbergMenu() {
  navMenu.classList.add("onzichtbaar");
}
mainSectie.addEventListener("click", verbergMenu);

function toonMenu() {
  navMenu.classList.remove("onzichtbaar");
}
menuKnop.addEventListener("click", toonMenu);





let divs = document.querySelectorAll("div");
let para = document.querySelectorAll("p");
let position = 0;

for (let i = 1; i < divs.length; i++) {
  divs[i].classList.add("gehijm");
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", stopChanging);
}

let interval = setInterval(nextPicture, 4000);

function nextPicture() {

  if (position < divs.length - 1) {
    divs[position].classList.add("gehijm");

    position += 1;

    divs[position].classList.remove("gehijm");
  } else {

    divs[position].classList.add("gehijm");

    position = 0;

    divs[position].classList.remove("gehijm");

  }

}

function stopChanging() {

  para = document.querySelectorAll("p");
  para[position].classList.remove("gehijm");
  para[position].addEventListener("click", startChanging);
  clearInterval(interval);



}

function startChanging() {

  console.log("hi i made it to here");
  para[position].classList.add("gehijm");
  let interval = setInterval(nextPicture, 4000);

}
