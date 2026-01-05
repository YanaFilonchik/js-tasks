const div = document.querySelector(`div`);
div.addEventListener(`click`, (event) => {
    const p = document.querySelector(`div p`);
    console.log(p);
    
    if (event.target.textContent == `Показать`) {
        p.style.display = `block`;
    } else if (event.target.textContent == `Скрыть`) {
        p.style.display = `none`;
    }
})