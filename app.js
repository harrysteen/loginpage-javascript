let parentDiv = document.querySelector('.main');
let parentdiv2 = document.querySelector('.main2');
let hed = document.querySelector('h1');
hed.innerHTML = 'I am not busy';
parentDiv.appendChild(hed);

let newDiv = document.createElement('div');
newDiv.setAttribute('class', 'innerdiv');
let newHeading = document.createElement('h1');
newHeading.innerHTML = 'Welcome to my inner heading';

let newContainer = document.createElement('div');
newContainer.setAttribute('class', 'imageclass');
let imgElement = document.createElement('img');
imgElement.setAttribute('src', 'glint.png');

let twocontiner = document.createElement('div');
twocontiner.setAttribute('class', 'continer2');
let inputelements = document.createElement('input');
inputelements.setAttribute('type', 'text');
inputelements.setAttribute('name', 'username');
inputelements.setAttribute('placeholder', 'enter your user id');

let threecontiner = document.createElement('div');
threecontiner.setAttribute('class', 'continer3');
let inputelements2 = document.createElement('input');
inputelements2.setAttribute('type', 'password');
inputelements2.setAttribute('name', 'password');
inputelements2.setAttribute('placeholder', 'enter your user password');

let fourcontiner = document.createElement('div');
fourcontiner.setAttribute('class', 'continer4');
let inputelements3 = document.createElement('input');
inputelements3.setAttribute('type', 'submit');

parentDiv.appendChild(newDiv);
newDiv.appendChild(newHeading);
newDiv.appendChild(newContainer);
newContainer.appendChild(imgElement);
newDiv.appendChild(twocontiner);
twocontiner.appendChild(inputelements);
newDiv.appendChild(threecontiner);
threecontiner.appendChild(inputelements2);
newDiv.appendChild(fourcontiner);
fourcontiner.appendChild(inputelements3);

newHeading.style.display = 'flex';
newHeading.style.alignItems = 'center';
newHeading.style.justifyContent = 'center';

newContainer.style.display = 'flex';
newContainer.style.alignItems = 'center';
newContainer.style.justifyContent = 'center';
newContainer.style.marginTop = '5rem';

inputelements.style.marginLeft = '30rem';
inputelements.style.marginTop = '6rem';
inputelements.style.borderRadius = '1rem';
inputelements.style.height = '3rem';
inputelements.style.width = '15rem';

inputelements2.style.marginLeft = '30rem';
inputelements2.style.marginTop = '2rem';
inputelements2.style.borderRadius = '1rem';
inputelements2.style.height = '3rem';
inputelements2.style.width = '15rem';

inputelements3.style.marginLeft = '30rem';
inputelements3.style.marginTop = '2rem';
inputelements3.style.borderRadius = '1rem';
inputelements3.style.height = '3rem';
inputelements3.style.width = '15rem';
