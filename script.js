'use strict';

let title;
let screens;
let screenPrice;
let adaptive;

let service1;
let service2;

let rollback = 50;
let AllServicePrices;
let fullPrice;
let servicePercentPrice;

const isNumber = function (num) {

    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function () {

    title = prompt('Как называеться ваш проект:?', "Калкулятор");
    screens = prompt('Какие типы экранов нужно разработать?', "Простые");
    screenPrice = prompt('Сколько будет стоить данная работа ?').trim();

    do {
        screenPrice = prompt('Сколько будет стоить данная работа ?').trim();
    } while (!isNumber(screenPrice));

    adaptive = confirm('Нужен ли адаптив на сайте? Да/Нет');
}

const getAllServicePrices = function () {

    let sum = 0;

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?');
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?№2');
        }

        sum += +prompt("Сколько это будет стоить?");
    }

    return sum;
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

asking();

AllServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, AllServicePrices)
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
title = getTitle(title);

console.log(getPercent(fullPrice));

console.log(title);
console.log(screenPrice);
console.log(typeof screenPrice);
console.log(typeof adaptive);


console.log("Стоймссть верстки экранов " + screenPrice + "рублей/долларов/гривней/юаней");
console.log("Итоговая стоимость работы: " + fullPrice);
console.log("Стоймость доп услуг: " + AllServicePrices);
console.log("Итоговая стоимость с вычетом: " + servicePercentPrice);