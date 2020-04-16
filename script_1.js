let money = prompt ( "ваш бюджет на месяц?"," ");
let time = prompt ("Введите дату в формате YYYY-MM-DD"," ");


let appData = {
    budget: money,
    timeData : time,
    expenses: {},
    optionalExpenses :{},
    income : [],
    savings : false,
};

let a1 = prompt ( "Введите обязательную статью расходов в этом месяце");
let b1 = prompt ( "Во сколько обойдется?");
let a2 = prompt ( "Введите обязательную статью расходов в этом месяце");
let b2= prompt  ( "Во сколько обойдется?");

appData.expenses.a1 = b1;
appData.expenses.a2 = b2;

alert( appData.budget / 30);





