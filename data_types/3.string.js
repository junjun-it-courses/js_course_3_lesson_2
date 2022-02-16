// String

/*
    string - примитивный тип данных, представляет собой цепочку элементов использующую
    кодировку UTF-16, вне зависимости от кодировки которую использует страница.

    UTF-16 описывает возможность хранения символов unicode с помощью 16 или 32 битных
    значений.

    Любые текстовые данных в JavaScript являются строкой в том числе и JSON.

    Можем создавать строки разными способами:
*/


// Одинарные кавычки
const stringExample_1 = 'Hello world #1';

// Двойные кавычки
const stringExample_2 = "Hello world #2";


/*
    Выбирать одинарные кавычки или двойные кавычки зависит от того какие символы
    встречаются внутри строки.
*/

console.log('---- String ----');
// Если в вашей строке встречаются апострофы или вы просто используете одинарные кавычки
// внутри своей строки и ваша строка создана также с помощью одинарных кавычек, внутренние
// кавычки нужно будет экранировать с помощью обратного слэша (\).
const stringExample_3 = 'I am \'not\' sentient';


// Аналогично и с двойными кавычками.
const stringExample_4 = "I am \"not\" sentient";

// Решаем ситуацию проще, используя один тип кавычек внутри другого.
const stringExample_5 = 'I am "not" sentient';

console.log(stringExample_3);
console.log(stringExample_4);
console.log(stringExample_5);


console.log('---- Back quotes ----');
// Обратные кавычки

/*
    Шаблонные строки или шаблонные литералы.

    Внутри обратных кавычек мы можем вычислять какое-то выражения или подставлять
    значение переменной, предварительно обернув его в ${}, этот функционал доступен
    только при использовании обратных кавычек.
*/

const stringExample_6 = `Hello world #3`;
const stringExample_7 = `Hello world #${2+2}`;

const helloWorldNumber = 5;
const stringExample_8 = `Hello world #${helloWorldNumber}`;

console.log(stringExample_6)
console.log(stringExample_7)
console.log(stringExample_8)

/*
    Важно!
    То что мы передаем внутрь ${} будет преобразовано в строку.
*/

// Мы можем добиться аналогично поведения если будем использовать оператор '+'
// и одинарные или двойные кавычки. Это операция называет 'конкатенация строк'.

const stringExample_9 = 'Hello world #' + 6;
const stringExample_10 = "Hello world #" + 7;

console.log(stringExample_9)
console.log(stringExample_10)


console.log('---- String info ----');

// Для того чтобы узнать количество символов в строке мы можем обратится к ее
// свойству length

const stringExample_11 = 'Hello world #';
console.log(
    'Длинна строки stringExample_11 составляет - ',
    stringExample_11.length,
    'символов'
);



// Для того чтобы получить символ из строки вы можете обратиться к нему по его индексу
// индексирование строк начинается с 0 и заканчивается количеством ее символов минус 1.

const stringExample_12 = 'Hello world #9';

const firstChar = stringExample_12[0];
const thirdChar = stringExample_12[2];
const lastChar = stringExample_12[stringExample_12.length - 1];

console.log('Строка - ', stringExample_12);
console.log('Первый символ - ', firstChar);
console.log('Третий символ - ', thirdChar);
console.log('Последний символ - ', lastChar);



console.log('---- String immutability ----');
/*
    Строки неизменяемы, это значит что вы не сможете заменить букву в строке
    обративший к ней по индексу и присвоив ей новое значение. Для того чтобы
    изменять строку вам нужно будет использовать отдельные функции и методы.
*/

const stringExample_13 = 'Hello world #10';

// Заменяем первый символ строки.
stringExample_13[0] = 'Q';

console.log(stringExample_13);      // Строка не изменилась


// Также в строка мы можем использовать unicode символы

console.log('\u{1F60D}')