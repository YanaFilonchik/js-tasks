const btn = document.querySelector(`button`);
btn.addEventListener(`click`, function(){
    const ul = document.querySelector(`ul`);
    const li = document.createElement(`li`);
    li.textContent = document.querySelector(`input`).value;
    ul.appendChild(li);
})