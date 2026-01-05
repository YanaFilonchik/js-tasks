const btn = document.querySelector(`button`);
btn.addEventListener(`mouseover`, (event) => {
    const p = document.createElement(`p`);
    p.textContent = `Hi`;
    document.querySelector(`body`).appendChild(p);
})

btn.addEventListener(`mouseout`, (event) => {
    const p = document.querySelector(`p`);
    document.querySelector(`body`).removeChild(p);
})
