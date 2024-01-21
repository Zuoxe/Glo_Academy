'use strict';

let title = prompt('Как называеться ваш проект:?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа ?');
let adaptive = confirm('Нужен ли адаптив на сайте? Да/Нет');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = + prompt('Сколько это будет стоить?');
let rollback = 50;
let AllServicePrices;
let fullPrice;

const getAllServicePrices = function (serPrice1, serPrice2) {
    return serPrice1 + serPrice2;
}

function getFullPrice(srcnprice, allprices) {
    return allprices + srcnprice;
}

function getTitle(str) {
    return str[0].toUpperCase() + str.slice(1);
}

fullPrice = getFullPrice(screenPrice, AllServicePrices)
if (fullPrice >= 30000) {
    console.log("Цена со скидкой 30% ");
} else if (15000 <= fullPrice && fullPrice < 30000) {
    console.log("Цена со скидкой 5% ");
} else if (fullPrice >= 0 && fullPrice <= 15000) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
    console.log("Что-то пошло не так");
}

AllServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

title = getTitle(title);

console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(adaptive);
console.log(service1);
console.log(servicePrice1);
console.log(service2);
console.log(servicePrice2);

console.log("Итоговая стоимость работы: " + fullPrice);
// console.log("Итоговая стоимость: " + servicePercentPrice);
console.log("Стоймость доп услуг: " + AllServicePrices);