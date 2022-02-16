// Null

/*
   null - примитивный тип данных, обычно представляет собой отсутствие какого либо значения
   в объекте. Об объектах поговорим позднее.

   Для того чтобы создать null, мы можем присвоить значение null в переменную или свойству
   объекта.
*/

let nullExample_1 = null;


// Фигурные скобки используются для создания объекта.
let nullInObjectExample = {
    firstName: null,
    lastName: null,
    age: 10
};


console.log(nullExample_1);
console.log(nullInObjectExample);

/*
    Отличие null от undefined

    null является определенным значением отсутствия объекта или отсутствия значения
    для которого внутри объекта определен ключ.

    undefined обозначает неопределенность, а именно то что контейнер был создан но
    его значение не определили или свойство не было определено вовсе.
 */


// Баг оператора typeof

// Если мы используем typeof для проверки тип данных null мы получи object

console.log(
    typeof null
)

// Для проверки того что значение действительно null, делаем так:

const anotherNullVariable = null;

console.log(
    anotherNullVariable === null
)