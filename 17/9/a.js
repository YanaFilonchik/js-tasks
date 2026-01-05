// 9. Создай hasLength(n)(str) — она проверяет, имеет ли строка длину n.

function hasLength(n) {
    return function (str) {
        return str.length == n ? true : false;
    }
}

console.log(hasLength(3)(`dog`));