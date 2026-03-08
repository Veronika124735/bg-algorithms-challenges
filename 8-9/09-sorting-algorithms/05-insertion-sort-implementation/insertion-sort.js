function insertionSort(arr) {
    // Започваме от втория елемент
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i]; // Текущият елемент
        let j = i - 1; // Елементът преди текущия

        // Преместваме елементите, които са по-големи от текущия, една позиция напред
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Поставяме текущия елемент на правилната му позиция
        arr[j + 1] = current;
    }

    return arr;
}

module.exports = insertionSort;
