'use strict';

let title = prompt('Как называеться ваш проект:?');
console.log(title);

let screens = prompt('Какие типы экранов нужно разработать?');
console.log(screens);

let screenPrice = +prompt('Сколько будет стоить данная работа ?');
console.log(screenPrice);

let adaptive = prompt('Нужен ли адаптив на сайте? Да/Нет');
let adaptiveBool = adaptive.toLowerCase() === "да";
console.log(adaptiveBool);

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = + prompt('Сколько это будет стоить?');

console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log("Итоговая стоимость работы: " + fullPrice);

let rollback = 50;
let servicePercentPrice = Math.ceil(fullPrice - rollback);
console.log("Итоговая стоимость: " + servicePercentPrice);

if (fullPrice > 30000) {

    fullPrice = fullPrice - (fullPrice * (30 / 100));

    console.log("Цена со скидкой 30% " + fullPrice);

} else if (15000 < fullPrice && fullPrice < 30000) {

    fullPrice = fullPrice - (fullPrice * (5 / 100));

    console.log("Цена со скидкой 5% " + fullPrice);

} else if (15000 < fullPrice && fullPrice < 30000) {

    fullPrice = fullPrice - (fullPrice * (5 / 100));

    console.log("Цена со скидкой 5% " + fullPrice);
} else if (fullPrice > 0 && fullPrice < 15000) {

    console.log("Скиндка не предусмотрена");
} else if (fullPrice < 0) {
    console.log("Что-то пошла не так");
}

// console.log(typeof title);
// console.log(typeof fullPrice);
// console.log(typeof adaptive);
// console.log(screens.length);
// console.log("Cost of screen layout:", screenPrice + " Dollars/Rubles/Yuan/Hryvnia");
// console.log("Website development cost: ", fullPrice + " Dollars/Rubles/Yuan/Hryvnia");
// console.log(screens.toLocaleLowerCase().split());

// fullPrice = fullPrice * (rollback / 100);

// console.log(fullPrice);