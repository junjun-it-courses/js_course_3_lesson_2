// Array

/*
    array - массив данных, а также итерируемый объект, также относится к типу данных
    object.

    Ключи для элементов массива создаются автоматически и являются индексами, позицией
    элемента внутри массива. Индексирование массива начинается с нуля.
 */

const arr = ['John', 'Alice', 'Andrew', 'Antony'];

console.log(arr)


// У массива есть длинна (length), это свойство содержит количество элементов массива.

console.log(arr.length);



// Берем элементы по их индексу

console.log(
    arr[0], arr[1], arr[2], arr[3]
)



// Если мы хотим гарантировано получить значение последнего элемента в массиве.

console.log(
    arr[arr.length - 1]
)


// В этом уроке мы не будем погружаться в массивы и их работу полностью, на данный
// момент стоит знать что массивы тоже относятся к типу данных object