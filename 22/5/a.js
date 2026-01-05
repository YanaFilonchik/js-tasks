const ul = document.createElement(`ul`);
const li1 = document.createElement(`li`);
const li2 = document.createElement(`li`);
const li3 = document.createElement(`li`);
li1.textContent = 1;
li2.textContent = 2;
li3.textContent = 3;
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

document.querySelector(`body`).appendChild(ul);
