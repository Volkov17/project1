
let money,time;

function start() {
    time = prompt ( "Введите дату в формате YYYY-MM-DD"," " );
    money = +prompt ( "ваш бюджет на месяц?"," " );
    
    while (isNaN(money) || money == "" || money == null){
        money = +prompt ( "ваш бюджет на месяц?"," " );
    }
}

start();

let appData = {
    budget: money,
    timeData : time,
    expenses: {},
    optionalExpenses :{},
    income : [],
    savings : true,
};

function chooseExpenses(){
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
    }
}

chooseExpenses();

function detectLevel (){
    if (appData.moneyPerDay < 100) {
        console.log("МИнимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("высокий уровень достатка");
    } else {
        console.log("ошибка");
    }
}

function checkSavings(){
    if ( appData.savings ){
        let save = +prompt("какова сумма накоплений?");
        let percent = +prompt("плд какой процент?");
        appData.monthIncome = save /100 /12 * percent;
        alert("доход в месяц с депозита :" + appData.monthIncome);
    }
}
checkSavings();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert( "ежедневный бюджет :" +  appData.moneyPerDay );
}
detectDayBudget();

function chooseOptExpenses(){
    for ( let i = 0 ; i < 3 ; i++){
        let answer = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i+1] = answer;
    }
}
chooseOptExpenses();