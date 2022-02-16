// Typeof

// Оператор typeof возвращает строку, указывающую тип операнда.

const num = 10;
const bigNum = 10n;
const str = 'string';
const undef = undefined;
const nullVar = null;
const boolVar = true;
const symbolVar = Symbol('symbol');



console.log('num', typeof num);
console.log('bigNum', typeof bigNum);
console.log('str', typeof str);
console.log('undef', typeof undef);
console.log('nullVar', typeof nullVar);      // здесь баг, object
console.log('boolVar', typeof boolVar);
console.log('symbolVar', typeof symbolVar);



console.log('======================');
// Object

const obj = {
    name: 'John',
    age: 20
}

const arr = [10, 20, 30];

console.log('obj', typeof obj);
console.log('arr', typeof arr);



console.log('======================');
// Function

function sum(a, b) {
    return a + b;
}

console.log('sum', typeof sum);

// Не смотря на то что оператор typeof показывает что там функции это function
// функция в любом случае относится к типу данных object. Это сделано специально
// чтобы нам было удобна различать где функции, а где объекты.


// Так typeof можно использовать как функцию typeof(проверяемое_значение).