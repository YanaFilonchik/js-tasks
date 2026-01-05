const arrLi = document.querySelectorAll(`li`);
console.log(arrLi);

for (let i = 0; i < arrLi.length; i++) {
    arrLi[i].textContent.length < 3 ? arrLi[i].style.color = `red`: null;
}