const btn = document.querySelector(`button`);
btn.addEventListener(`click`, function(){
    try {
        const regex = /^\w+@\w+.\w+/;
        const email = document.querySelector(`input`);
        if(!regex.test(email.value)) throw new Error(`Не почта`);
        else{
            const ul = document.querySelector(`ul`);
            const li = document.createElement(`li`);
            li.textContent = email.value;
            ul.appendChild(li);
        }
    } catch (error) {
        alert(error);
    }
})