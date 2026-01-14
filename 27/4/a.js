// 4. Создайте класс StringRepository, который имеет статичный массив words ["apple", "apricot", "lemon", 
// "mango", "nectarine", "banana", "kiwi", "plum"]. Наследуйте от него класс FilteredWords, добавив метод
// getWordsByLength(length), который возвращает только те слова, длина которых равна заданному
// значению.
// Входные:
// const repo = new FilteredWords();
// repo.getWordsByLength(5);
// → Результат: ["apple", "lemon", "mango"]

class StringRepository {
    words = ["apple", "apricot", "lemon", "mango", "nectarine", "banana", "kiwi", "plum"];
}

class FilteredWords extends StringRepository {
    getWordsByLength(length) {
        console.log(this.words.filter(el => el.length == length ? true : false));
    }
}

const repo = new FilteredWords();
repo.getWordsByLength(5);