function mergeSort(arr) {
    // При масив с 1 или 0 елемента, той вече е сортиран
    if (arr.length <= 1) {
        return arr;
    }

    // Разделяме масива на две половини
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Сортираме всяка половина рекурсивно и след това ги съединяваме
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Докато има елементи и в двата масива, сравняваме текущите елементи и добавяме по-малкия към резултата
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Добавяме останалите елементи от лявата половина, ако има такива
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    // Добавяме останалите елементи от дясната половина, ако има такива
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

module.exports = mergeSort;
