'use strict';


const appData = {
    title: "",
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 50,
    AllServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},

    isNumber: function (num) {

        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    asking: function () {

        appData.title = prompt('Как называеться ваш проект:?', "Калкулятор");

        for (let i = 0; i < 2; i++) {
            let name = prompt("Какие типы экранов нужно разработать? ")
            let price = 0;

            do {
                price = prompt("Сколько это будет стоить?").trim();
            } while (!appData.isNumber(price));

            appData.screens.push({ id: i, name: name, price: price })

        }

        appData.screenPrice = appData.screens.reduce(function (sum, item) {
            return Number(sum) + Number(item.price);
        }, 0)

        for (let i = 0; i < 2; i++) {
            let name = prompt('Какой дополнительный тип услуги нужен?');
            let price = 0;

            do {
                price = prompt("Сколько это будет стоить?");
            } while (!appData.isNumber(price));

            appData.services[name + i] = +price
        }

        appData.adaptive = confirm('Нужен ли адаптив на сайте? Да/Нет');
    },

    getAllServicePrices: function () {

        for (let key in appData.services) {
            appData.AllServicePrices += appData.services[key];
        }
    },

    getFullPrice: function () {
        appData.fullPrice = Number(this.AllServicePrices) + Number(this.screenPrice);
    },

    getTitle: function () {
        return this.title.trim()[0].toUpperCase() + this.title.trim().slice(1).toLowerCase();

    },

    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice * (appData.rollback / 100);
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
        appData.getAllServicePrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();

        this.logger();
    },

    logger: function () {
        console.log("Информация о проекте:");

        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);

    }
}

appData.start();

