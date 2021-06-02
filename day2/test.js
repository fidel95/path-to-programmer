// let sum = (a, b) => {
//     let result = a + b;
//     console.log(result);

// };

// sum(1,2);

const myParagraph = document.createElement('p');
myParagraph.textContent = 'i am a p';
myParagraph.classList.add('special');


const myImage = document.createElement('img');
myImage.src = "https://www.phpost.net/foro/uploads/emoticons/IGyZS.gif";
myImage.alt = "Nice";
myImage.classList.add('laImage');


const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

console.log(myDiv);
console.log(myImage);
console.log(myParagraph);

document.body.appendChild(myDiv);
myDiv.appendChild(myImage);