// Symbol

// symbol — это уникальный и неизменяемый тип данных, который может быть использован как
// идентификатор для свойств объектов. Для создания символьного примитива мы можем
// использовать функцию Symbol([описание])


// Создаём новый символ
let symbolExample_1 = Symbol();

// Символы всегда уникальны, даже если мы создадим их с одинаковым описанием.

let symbolExample_2 = Symbol('id');
let symbolExample_3 = Symbol('id');


console.log(symbolExample_2, symbolExample_3)

console.log(symbolExample_2 === symbolExample_3);   // false
console.log(symbolExample_2 == symbolExample_3);    // false


// Не стоит путать символы и строки, это разные типы данных и с символами не получится
// обращаться также как со строками.

// Попробуем вызывать alert, функция alert автоматически преобразовывает переданное
// ей значение в строку и выводит его.



// alert(symbolExample_3);
// Uncaught TypeError: Cannot convert a Symbol value to a string

// Получаем ошибку.


// Для того чтобы преобразовать в строку мы можем использовать метод toString.

let symbolExample_4 = Symbol('id').toString();
alert(symbolExample_4)


// Или обратится к его описанию

let symbolExample_5 = Symbol('id');
alert(symbolExample_5.description)


// Символы также могут помочь нам создать скрытые свойства объекта, но эта тема выходит
// за рамки текущего урока. Поговорим об этом в рамках следующих уроков.
