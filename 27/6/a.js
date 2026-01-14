// 6. Создайте класс SentenceRepository, который имеет массив строк sentences. Наследуйте от него
// класс LongestSentence, добавив метод getLongestSentence(), который возвращает самую длинную
// строку поколичествусимволов.
// Входные:
// const repo = new LongestSentence(["Hello world", "This is a longer sentence", "Short"]);
// repo.getLongestSentence();
// → Результат: "This is a longer sentence"
// Входные:
// const repo = new LongestSentence(["JavaScript is fun", "Coding", "Learning new things"]);
// repo.getLongestSentence();
// → Результат: " Learning new things"
// Входные:
// const repo = new LongestSentence(["Small", "Medium sized", "A sentence that is quite long"]);
// repo.getLongestSentence();
// → Результат: "A sentence that is quite long"


class SentenceRepository {
    sentences;
    constructor(arr) {
        this.sentences = arr;
    }
}

class LongestSentence extends SentenceRepository {
    getLongestSentence() {
        let max = this.sentences[0];
        for (let i = 0; i < this.sentences.length; i++) {
            if (max.length < this.sentences[i].length) max = this.sentences[i];
        }
        return max;
    }
}

const repo = new LongestSentence(["Hello world", "This is a longer sentence", "Short"]);
console.log(repo.getLongestSentence());