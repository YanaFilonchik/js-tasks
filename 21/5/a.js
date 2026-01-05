const btn = document.querySelector(`.btn`);

btn.addEventListener(`click`, function () {
    try {
        const number = document.querySelector(`input`).value;
        if (number == ``) throw new Error(`не заполнено`);
        if (isNaN(number)) throw new Error(`не число`);
        if (number <= 0) throw new Error(`число меньше или равно 0`);
        const arr = [0, 1];
        for (let i = 2; i < number; i++) {
            arr.push(arr[i-1]+ +arr[i-2]);
        }
        document.querySelector(`.result`).textContent = arr;
    } catch (error) {
        alert(error.message);
    }
})