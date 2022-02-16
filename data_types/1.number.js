// Number

/*
 Числовой, примитивный, тип данных в JavaScript на который выделено 64 бита памяти, этот
 тип данных помимо целых чисел включает в себя также хранение чисел с плавающей
 запятой. В других языках числа могут подразделяться на несколько типов, например:
 Integer, Float, Double или Bignum. Но в JavaScript тип за числа отвечают типы
 данных number и bigint. О bigint немного позднее.
*/

console.log('------ Number Examples ------');
// Примеры чисел:

const integerNumber = 100;
const floatNumber = 10.2;
const anotherFloatNumber = 10.2002;
console.log(integerNumber, floatNumber, anotherFloatNumber);





console.log('------ e Examples ------');
/*
    Для записи больших чисел мы можем использовать букву 'e' для того чтобы
    сократить число
*/


const oneBillion = 1000000000;      // Здесь у нас 9 нулей
const oneBillionWithE = 1e9;        // Здесь тоже
console.log('e', oneBillion, oneBillionWithE);

const floatBillions = 5500000000;
const floatBillionsWithE = 5.5e9;
console.log('e', floatBillions, floatBillionsWithE);


// отрицательное число после "e" подразумевает деление на 1 с указанным
// количеством нулей:
const oneMillisecond = 0.000001;
const oneMillisecondWithE = 1e-6;
console.log('-e', oneMillisecond, oneMillisecondWithE);


// также большие числа мы можем разделять символом '_' для повышения читаемости.

const bigNumber = 10_000_000_00;
console.log('_', bigNumber)




console.log('------ Infinity Examples ------');
// Помимо самих чисел к этому типу подразделяются специальные числовые значения
// такие как: Infinity, -Infinity, NaN

// Infinity - является математической бесконечностью, которая больше любого числа.

// В JavaScript мы можем делить на 0 и это не вызовет никаких ошибок.

const divOnZero = 10 / 0;
console.log(divOnZero);          // Infinity


// Также мы можем задать Infinity явно.

const infinityNumber = Infinity;
console.log(infinityNumber);      // Infinity





console.log('------ NaN Examples ------');
// NaN - not a number.

// Мы можем его получить если будем выполнять неправильную математическую операцию
// или задавать его явно.

const exampleNaN_1 = 'Vladimir' * 10;
const exampleNaN_2 = 'Vladimir' / 10;
const exampleNaN_3 = 'Vladimir' - 10;

const exampleNaN_4 = NaN;

console.log(exampleNaN_1, exampleNaN_2, exampleNaN_3, exampleNaN_4);


// Если мы будем выполнять любые математические операции с NaN то получим NaN

const exampleNaN_5 = NaN;               // явно
console.log(exampleNaN_5 + 20);
console.log(exampleNaN_5 - 20);
console.log(exampleNaN_5 * 20);
console.log(exampleNaN_5 / 20);

console.log('================');

const exampleNaN_6 = 'Vladimir' - 10;   // неявно
console.log(exampleNaN_6 + 20);
console.log(exampleNaN_6 - 20);
console.log(exampleNaN_6 * 20);
console.log(exampleNaN_6 / 20);






console.log('------ Negative numbers ------');
/*
    Все числа из предыдущих примеров были положительными. Это не относится к NaN.
    Положительное число или отрицательное легко проверить через Math.sign.

    С отрицательными числами нет никаких проблем, кроме того что для знака
    минус '-' выделен отдельный бит, из-за чего мы можем попасть в ситуацию
    с -0
*/

const negativeZero = -0;
const zero = 0;

// Пример

const negativeZeroExample = 0 / -10;
console.log(negativeZeroExample);


// Аналогично все числа, кроме NaN, могут быть отрицательными.

const negativeInfinity_1 = -Infinity;
const negativeInfinity_2 = 10 / -0;
const negativeInfinity_3 = -2e6;
const negativeInfinity_4 = -1_000_000_000;

console.log(
    negativeInfinity_1,
    negativeInfinity_2,
    negativeInfinity_3,
    negativeInfinity_4
)

/*
    Также в JavaScript есть возможность работать с шестнадцатеричными,
    двоичными и восьмеричными числами, но это выходит за рамки сегодняшнего урока.
*/


// Неточности в вычислениях

/*
    Из 64 бит, отведённых на число, сами цифры числа занимают до 52 бит,
    остальные 11 бит хранят позицию десятичной точки и один бит – знак.
    Так что если 52 бит не хватает на цифры, то при записи пропадут младшие
    разряды.

    Аналогичные проблемы с точностью возникают в языках: PHP, Java, C, Perl, Ruby.
*/