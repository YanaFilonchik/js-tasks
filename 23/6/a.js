const div = document.querySelector(`div`);
div.addEventListener(`change`, (event) => {
    if (event.target.placeholder == "name") {
        if (!isNaN(event.target.value)) {
            alert(`Имя не должно быть числом`);
        }
    }
    if (event.target.placeholder == "email") {
        if (!/^\w+@\w+.\w+$/.test(event.target.value)) {
            alert(`Почта не верна`);
        }
    }
    if (event.target.placeholder == "password") {
        if (!/^\w{6,8}$/g.test(event.target.value)) {
            alert(`Пароль содержит от 6 до 8 символов`);
        }
    }
})