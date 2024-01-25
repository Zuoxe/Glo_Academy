'use strict';


const appData = {
    title: "",
    screens: "",
    screenPrice: 0,
    adaptive: true,
    rollback: 50,
    AllServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: "",
    service2: "",

    isNumber: function (num) {

        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    asking: function () {

        appData.title = prompt('Как называеться ваш проект:?', "Калкулятор");
        appData.screens = prompt('Какие типы экранов нужно разработать?', "Простые");
        appData.screenPrice = prompt('Сколько будет стоить данная работа ?').trim();

        do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа ?').trim();
        } while (!appData.isNumber(appData.screenPrice));

        appData.adaptive = confirm('Нужен ли адаптив на сайте? Да/Нет');
    },

    getAllServicePrices: function () {

        let sum = 0;

        for (let i = 0; i < 2; i++) {
            let price = 0;
            if (i === 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
            } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?№2');
            }

            do {
                price = prompt("Сколько это будет стоить?");
            } while (!appData.isNumber(price));

            sum += +price;
        }

        return sum;
    },

    getFullPrice: function (srcnprice, allprices) {
        return Number(allprices) + Number(srcnprice);
    },

    getTitle: function (str) {
        return str.trim()[0].toUpperCase() + str.trim().slice(1).toLowerCase();

    },

    getServicePercentPrices: function () {
        return appData.fullPrice - appData.rollback;
    },

    getPercent: function (price) {

        if (price > 30000) {
            return "Цена со скидкой 30% ";
        } else if (15000 <= price && price < 30000) {
            return "Цена со скидкой 5% ";
        } else if (price >= 0 && price <= 15000) {
            return "Скидка не предусмотрена";
        } else if (price < 0) {
            return "Что-то пошло не так";
        }
    },

    start: function () {
        appData.asking();
        appData.AllServicePrices = this.getAllServicePrices();
        appData.fullPrice = this.getFullPrice(appData.screenPrice, appData.AllServicePrices);
        appData.servicePercentPrice = this.getServicePercentPrices();
        appData.title = this.getTitle(appData.title);

        this.logger();
    },

    logger: function () {
        console.log("Информация о проекте:");

        for (let key in appData) {
            if (typeof appData[key] !== "function") {
                console.log(`${key}: ${appData[key]}`);
            }
        }

        console.log("Методы объекта appData:");

        for (let prop in appData) {
            if (typeof appData[prop] === "function") {
                console.log(prop);
            }
        }
    }
}

appData.start();
