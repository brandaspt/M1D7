/* EXERCISE 1
      Write a function for changing the title of the document in something else.
      */

// Change doc title
const changeTitle = function () {
  const docTitle = document.querySelector("title")
  const newDocTitle = document.getElementById("new-title")
  docTitle.innerText = newDocTitle.value
  newDocTitle.value = ""
}
document
  .getElementById("change-title-btn")
  .addEventListener("click", changeTitle)

// Change h1
const changeH1 = function () {
  const h1 = document.querySelector("h1")
  const newH1 = document.getElementById("new-h1")
  h1.innerText = newH1.value
  newH1.value = ""
}
document.getElementById("change-h1-btn").addEventListener("click", changeH1)

/* EXERCISE 2
      Write a function for changing the class of the title of the page in "myHeading".
      */

const addClassToTitle = function () {
  const h1 = document.querySelector("h1")
  h1.classList.toggle("myHeading")
}

document
  .getElementById("toggle-h1-class")
  .addEventListener("click", addClassToTitle)

/* EXERCISE 3
      Write a function for changing the text of only the p which are children of a div.
      */

const changePcontent = function () {
  const pChildrenOfDiv = document.querySelectorAll("div p")
  newPContent = document.getElementById("new-p-content")
  for (let p of pChildrenOfDiv) {
    p.innerText = newPContent.value
  }
  newPContent.value = ""
}

document
  .getElementById("change-p-btn")
  .addEventListener("click", changePcontent)

/* EXERCISE 4
      Write a function for changing the destination of every link to https://www.google.com
      */

const changeUrls = function () {
  const links = document.querySelectorAll("a")
  newLinksUrl = document.getElementById("new-url")
  for (let link of links) {
    link.href = `https://${newLinksUrl.value}`
  }
  newLinksUrl.value = ""
}

document.getElementById("change-url-btn").addEventListener("click", changeUrls)

/* EXERCISE 5
       Write a function for adding a new item in the second list.
       */

const addToTheSecond = function () {
  const newLiElement = document.createElement("li")
  const newLiContent = document.getElementById("new-li")
  newLiElement.innerText = newLiContent.value
  const secondUL = document.getElementById("secondList")
  secondUL.appendChild(newLiElement)
  newLiContent.value = ""
}

document.getElementById("add-li-btn").addEventListener("click", addToTheSecond)

/* EXERCISE 6
      Write a function for adding a second paragraph to the div.
      */

const addParagraph = function (content) {
  const newPElement = document.createElement("p")
  const newPContent = document.getElementById("new-p")
  newPElement.innerText = newPContent.value
  const pDiv = document.getElementById("paragraphs-div")
  pDiv.appendChild(newPElement)
  newPContent.value = ""
}

document.getElementById("add-p-btn").addEventListener("click", addParagraph)

/* EXERCISE 7
      Write a function for making the first UL disappear.
      */

const firstUlDisappear = function () {
  const firstUl = document.getElementById("firstList")
  firstUl.classList.toggle("hide-item")
}

document
  .getElementById("toggle-first-ul")
  .addEventListener("click", firstUlDisappear)

/* EXERCISE 8
      Write a function for making the background of every UL green.
      */

// Helper random color func
const getRandomColor = function () {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`
}

const paintItRandom = function () {
  const allUls = document.querySelectorAll("ul")

  for (let ul of allUls) {
    ul.style.backgroundColor = getRandomColor()
  }
}

document
  .getElementById("random-ul-color")
  .addEventListener("click", paintItRandom)

/* EXERCISE 9
      Make the heading of the page change color every time the user clicks on it.
      */

const makeItClickable = function () {
  const h1 = document.querySelector("h1")
  h1.style.color = getRandomColor()
}
document.querySelector("h1").addEventListener("click", makeItClickable)

/* EXERCISE 10
      Change the footer text with something else when the user clicks on it.
      */

const paragraphs = [
  "He colored deep space a soft yellow.",
  "The minute she landed she understood the reason this was a fly-over state.",
  "I currently have 4 windows open up… and I don’t know why.",
  "She used her own hair in the soup to give it more flavor.",
  "While all her friends were positive that Mary had a sixth sense, she knew she actually had a seventh sense.",
  "The tattered work gloves speak of the many hours of hard labor he endured throughout his life.",
  "So long and thanks for the fish.",
  "There's a reason that roses have thorns.",
  "The spa attendant applied the deep cleaning mask to the gentleman’s back.",
  "Two more days and all his problems would be solved.",
]
const changeFooterText = function () {
  const footerP = document.querySelector("footer p")
  const randomIndex = Math.floor(Math.random() * paragraphs.length)
  footerP.innerHTML = paragraphs[randomIndex]
}
document.querySelector("footer p").addEventListener("click", changeFooterText)

/* EXERCISE 11
      Attach an event listener to the input field in the page for console logging its value just after any keystroke.
      */

const inputField = document.getElementById("input-field")
inputField.addEventListener("keyup", function () {
  console.log(this.value)
})

/* EXERCISE 12
      Create a new welcome alert message when the page successfully loads.
      */

window.onload = function () {
  alert("What's up? 👀")
}

/* EXERCISE 13
      Use HTML5 tags to divide the content of the page in a more semantic way.
      */
