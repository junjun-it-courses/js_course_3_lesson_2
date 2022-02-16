// bigint

/*
    bigint - числовой примитивный тип данных в JavaScript, позволяющий работать с
    числами произвольной точности. Проблема в том что тип данных Number может
    хранить числа только в определенном диапазоне.
*/

const biggestNumber = Number.MAX_SAFE_INTEGER;
console.log(biggestNumber);
console.log(biggestNumber + 1);
console.log(biggestNumber + 2);
console.log(biggestNumber + 3);


console.log('---- BigInt Examples ----');
/*
    Если мы будем увеличивать это число на Number не сможет точно сохранить результат.
    BigInt позволяет нам хранить числа за пределами максимального целочисленного значения
    Number.

    Создать BigInt можно следующим образом:
*/

const bigIntExample_1 = 100n;
const bigIntExample_2 = BigInt(100);

console.log(bigIntExample_1, bigIntExample_2);

// Просто добавляем суффикс 'n' в конце литерала числа или используем функцию BigInt()
// Теперь попробуем повторить первый пример только уже с использованием BigInt


const bigIntNumber = BigInt(Number.MAX_SAFE_INTEGER);
console.log(bigIntNumber + 1n);
console.log(bigIntNumber + 2n);
console.log(bigIntNumber + 3n);
console.log(bigIntNumber + 4n);


// Как видим, все работает правильно.

console.log('---- BigInt Notation ----');
// Аналогично как и с типом данных Number мы можем разделять большие числа через '_'.

const bigIntExample_3 = 1_000_000_000_000_000n;
console.log(bigIntExample_3);


console.log('---- BigInt vs Number ----');

// Если мы будем сравнивать BigInt c Number через '===' то при одинаковых значениях
// получим false, так как это разные типы данных.

const bigIntExample_4 = 10n;
const numberExample_1 = 10;

console.log(bigIntExample_4 === numberExample_1);

// В таком случае мы можем использовать оператор '==', тогда сравнение пройдет успешно.
// Так как '==' сравнивает только значения без приведения типов.

console.log(bigIntExample_4 == numberExample_1);