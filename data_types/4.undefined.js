// Undefined


/*
    undefined - примитивный тип данных который присваивается переменным как только они
    были объявлены.Также присваивается аргументам функции которые не были переданы и
    возвращается из функций внутри которых отсутствует 'return value' или присутствует
    'return' без значения.

    Не может вернуться и функции которая вызвана через оператор 'new'.

    А также мы можем задать это значение явно.

    Также мы можем получить его и в других случаях, обычно когда значение не определено.
*/

let exampleUndefined_1;
console.log('empty variable', exampleUndefined_1);




function exampleUndefined_2(a, b) {
    console.log('func arguments', a, b);
}
exampleUndefined_2();





function exampleUndefined_3() {
    return;
}

console.log(
    'Empty return value',
    exampleUndefined_3()
)





function exampleUndefined_4() {
    let a = 2 + 2;
}

console.log(
    'No return value',
    exampleUndefined_4()
)


/*
    Нужно стараться избегать значения undefined, до того момента пока алгоритм
    решения вашей задачи не потребует обратного.

    Для того чтобы избежать undefined есть несколько способов. Самым простым из них
    является инициализация переменной сразу со значением, а также использование
    let и const вместо var
*/

let foo = 10;    // Good

let bar;         // Bad
bar = 10;

var baz = 10;   // Bad