const items = [
    { id: 1, category: 'Фрукты', name: 'Яблоко', description: 'Сладкое и сочное яблоко.' },
    { id: 2, category: 'Фрукты', name: 'Банан', description: 'Полезный и питательный банан.' },
    { id: 3, category: 'Овощи', name: 'Морковь', description: 'Свежая и хрустящая морковь.' },
    { id: 4, category: 'Овощи', name: 'Огурец', description: 'Сочный и освежающий огурец.' },
    { id: 5, category: 'Ягоды', name: 'Клубника', description: 'Сладкая и ароматная клубника.' },
    { id: 6, category: 'Ягоды', name: 'Черника', description: 'Полезная и вкусная черника.' }
];

const btn = document.querySelector(`.btn`);
const div = document.querySelector(`.content`);
const modal = document.querySelector(`.modal`);
const card = document.querySelector(`.card`);

btn.addEventListener(`click`, (event) => {
    showCards(event.target.textContent);
})

function showCards(categoryElem) {
    const fruct = items.filter(function (el) {
        return el.category == categoryElem ? true : false;
    });
    div.innerHTML = ``;
    fruct.forEach(el => {
        div.innerHTML += `<div data-id="${el.id}" class = '${el.category}'>
                            <p>${el.name} </p> 
                            <p>${el.category}</p> 
                            <p>${el.description}</p>
                        </div>
                        <hr>`;
    });
}

div.addEventListener(`click`, function (event) {
    const currentCard = event.target.parentNode.children;
    modal.style.display = `block`;
    card.innerHTML = `<h2>${currentCard[0].textContent}</h2>
                        <p>${currentCard[1].textContent}</p>
                        <p>${currentCard[2].textContent}</p>`
})

const btnClose = document.querySelector(`.close`);
btnClose.addEventListener(`click`, () => {
    modal.style.display = `none`;
})

function show() {
    console.log(this);
}