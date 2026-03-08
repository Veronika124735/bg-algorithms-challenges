function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        // Сравняваме текущия елемент с останалите и намираме най-малкия
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Разменяме текущия елемент с най-малкия, ако те не са еднакви
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

module.exports = selectionSort;
