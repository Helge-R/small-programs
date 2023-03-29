const container = document.querySelector("#container");

const paragraph = document.createElement("p");
const headline = document.createElement("h3");
const box = document.createElement("div");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red"; 
headline.textContent = "I'm a blue h3!";
headline.style.color = "blue";
box.setAttribute('style', 'border: 1px solid black;');
const bigHeadline = document.createElement("h1");
bigHeadline.textContent = "I'm in a div";
const anotherParagraph = document.createElement("p");
anotherParagraph.textContent = "ME TOO!";


container.appendChild(paragraph);
container.appendChild(headline);

box.appendChild(bigHeadline);
box.appendChild(anotherParagraph);
container.appendChild(box);