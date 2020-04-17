
let time = prompt ( "Введите дату в формате YYYY-MM-DD"," " ),
    money = +prompt ( "ваш бюджет на месяц?"," " );
let appData = {
    budget: money,
    timeData : time,
    expenses: {},
    optionalExpenses :{},
    income : [],
    savings : false,
};
/*
let a1 = prompt ( "Введите обязательную статью расходов в этом месяце"," "),
        b1 = prompt ( "Во сколько обойдется?", " "),
        a2 = prompt ( "Введите обязательную статью расходов в этом месяце"," "),
        b2 = prompt ( "Во сколько обойдется?", " ");

appData.expenses[a1] = b1;
appData.expenses[a2] = b2;
*/


for (let i = 0; i < 2; i++) {
    let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt ("Во сколько обойдется?", "");

    if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
        console.log ("done");
        appData.expenses[a] = b;
    } else {                            
        console.log ("bad result");
        i--;
    }
};


console.log(appData);

appData.moneyPerDay = appData.budget / 30;

alert( "ежедневный бюджет :" +  appData.moneyPerDay );

if ( appData.moneyPerDay < 100){
    console.log("МИнимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("средний уровень достатка");
} else if (appData.moneyPerDay > 2000){
    console.log("высокий уровень достатка");
} else {
    console.log("ошибка");
}

