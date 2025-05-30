const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/IMG_6837.jpg") {
    myImage.setAttribute("src", "images/IMG_7035.jpg");
  } else {
    myImage.setAttribute("src", "images/IMG_6837.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Mozilla is cool, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
