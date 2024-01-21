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
let servicePercentPrice;


const getAllServicePrices = function (serPrice1, serPrice2) {
    return serPrice1 + serPrice2;
}

function getFullPrice(srcnprice, allprices) {
    return allprices + srcnprice;
}

function getTitle(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
    console.log(typeof str);
}

function getServicePercentPrices(fullPrice, rollback) {
    return fullPrice - rollback;
}

const getPercent = function (price) {

    if (price > 30000) {
        return "Цена со скидкой 30% ";
    } else if (15000 <= price && price < 30000) {
        return "Цена со скидкой 5% ";
    } else if (price >= 0 && price <= 15000) {
        return "Скидка не предусмотрена";
    } else if (price < 0) {
        return "Что-то пошло не так";
    }
}

AllServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(screenPrice, AllServicePrices)
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
title = getTitle(title);

console.log(getPercent(fullPrice));

console.log(title);
console.log(typeof screenPrice);
console.log(typeof adaptive);


console.log("Стоймссть верстки экранов " + screenPrice + "рублей/долларов/гривней/юаней");
console.log("Итоговая стоимость работы: " + fullPrice);
console.log("Стоймость доп услуг: " + AllServicePrices);
console.log("Итоговая стоимость с вычетом: " + servicePercentPrice);