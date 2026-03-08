function quickSort(arr) {
    // При масив с 1 или 0 елементи, той вече е сортиран
    if (arr.length <= 1) {
        return arr;
    }

    // Запазваме средния елемент
    const pivot = arr[Math.floor(arr.length / 2)];

    // Разделяме масива на три части: по-малки от pivot, равни на pivot и по-големи от pivot
    const left = [];
    const middle = [];
    const right = [];

    for (let element of arr) {
        if (element < pivot) {
            left.push(element);
        } else if (element > pivot) {
            right.push(element);
        } else {
            middle.push(element);
        }
    }

    // Рекурсивно сортираме лявата и дясната част и ги комбинираме със средния елемент
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

module.exports = quickSort;
