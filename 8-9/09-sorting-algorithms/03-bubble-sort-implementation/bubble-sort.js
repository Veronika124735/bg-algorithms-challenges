function bubbleSort(arr) {
    const n = arr.length;

    // Минаваме през всеки елемент от масива
    for (let i = 0; i < n - 1; i++) {
        // Следим дали е имало размяна на елементи
        let swapped = false;

        // Сравняваме всеки елемент със следващия и ги разменяме, ако са в грешен ред
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        // Ако няма размяна, масивът вече е сортиран
        if (!swapped) break;
    }

    return arr;
}

module.exports = bubbleSort;
