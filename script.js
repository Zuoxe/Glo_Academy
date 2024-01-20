let title = "Glo Academy";
let screens = "Simple, Difficult, Interactive";
let screenPrice = 999;
let rollback = 50;
let fullPrice = 50000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Cost of screen layout:", screenPrice + " Dollars/Rubles/Yuan/Hryvnia");
console.log("Website development cost: ", fullPrice + " Dollars/Rubles/Yuan/Hryvnia");
console.log(screens.toLocaleLowerCase().split());

fullPrice = fullPrice * (rollback / 100);

console.log(fullPrice);