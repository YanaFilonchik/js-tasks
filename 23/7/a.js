const btn = document.querySelector(`button`);
btn.addEventListener(`click`,(event)=>{
    const div = document.querySelector(`div`);
    div.style.display == `none`? div.style.display = `block`: div.style.display = `none`;
})

const div = document.querySelector(`div`);
div.addEventListener(`click`,(event)=>{
    console.log(event.target.textContent);
})