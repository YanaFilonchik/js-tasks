// 5. Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем замены букв
// исходного слова или фразы). Создать функцию для вывода ряда true, если слова являются
// анаграммами. Добавитьпроверкина ввод

class Anagram {
    str1 = ``;
    str2 = ``;
    constructor(str1, str2) {
        this.str1 = str1;
        this.str2 = str2;
    }

    valid() {
        if (this.str1.toLowerCase().split(``).sort().join(``) == this.str2.toLowerCase().split(``).sort().join(``)) console.log(true);
        else console.log(false);
    }
}

try {
    const str1 = `ertyuqw`;
    const str2 = `qwertyu`;
    if (!isNaN(str1) || !isNaN(str2)) throw new Error(`число`);
    const anagram = new Anagram(str1, str2);
    anagram.valid();
} catch (error) {
    console.log(error);
}