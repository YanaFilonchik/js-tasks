const resultArr = [];

const btn = document.querySelector(`.btn`);

btn.addEventListener(`click`, function () {
    try {
        if (!document.querySelector(`input`).value) throw new Error(`пустая строка`);
        resultArr.push(document.querySelector(`input`).value);
        document.querySelector(`.res`).textContent = resultArr;
    } catch (error) {
        alert(error.message);
    }
})