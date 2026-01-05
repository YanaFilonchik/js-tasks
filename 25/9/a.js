// 9. Реализуйте класс для пересчета временного интервала, заданного в минутах, в величину,
// выраженнуювчасахиминутах.
// Входные: 150 минут →Результат: 2 часа 30 минут
// Входные: 240 минут→Результат:4 часа 0минут


class Time {
    representationTime(allMinutes) {
        const hour = Math.floor(allMinutes / 60);
        const minutes = allMinutes % 60;
        console.log(`${hour} ${this.sclonenie(hour % 10, [`час`, `часа`, `часов`])} ${minutes} ${this.sclonenie(minutes % 10, [`минута`, `минуты`, `минут`])}`);
    }

    sclonenie(number, arrScl) {
        if (`1`.includes(number)) return arrScl[0];
        if (`234`.includes(number)) return arrScl[1];
        if (`567890`.includes(number)) return arrScl[2];
    }
}

function validNumber(number){
    if(isNaN(number)) throw new Error(`не число`);
    return number;
}

try {
    const time = new Time();
    time.representationTime(validNumber(150));
    time.representationTime(validNumber(240));
} catch (error) {
    console.log(error);
}
