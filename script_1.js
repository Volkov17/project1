
let money,time;

function start() {
    time = prompt ( "Введите дату в формате YYYY-MM-DD"," " );
    money = +prompt ( "Ваш бюджет на месяц?"," " );
    
    while (isNaN(money) || money == "" || money == null){
        money = +prompt ( "Ваш бюджет на месяц?"," " );
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
    chooseExpenses : function(){
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
    },
    detectDayBudget: function(){
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            alert( "Ежедневный бюджет :" +  appData.moneyPerDay );

    },
    detectLevel:function(){
        if (appData.moneyPerDay < 100) {
            console.log("МИнимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("высокий уровень достатка");
        } else {
            console.log("ошибка");
        }
    },
    checkSavings: function(){
        if ( appData.savings ){
            let save = +prompt("какова сумма накоплений?");
            let percent = +prompt("под какой процент?");
            appData.monthIncome = save /100 /12 * percent;
            alert("доход в месяц с депозита :" + appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){
        for ( let i = 0 ; i < 3 ; i++){
            let answer = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i+1] = answer;
        }
    },
    chooseIncome: function(){
        let items = prompt("что принесет дополнительный доход? (через запятую)");
        while ( typeof(items) != "string" || items == null || items ==" "){
            items = prompt("что принесет дополнительный доход? (через запятую)");
        }
        appData.income = items.split(",");
        appData.income.push(prompt("может что то еще?"));
        appData.income.sort();
        let all=[];
        appData.income.forEach(function(items,i,array){
            all.push(items);
        });
        alert("Способы доп. заработка: " + all);

    }
};

appData.chooseExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.checkSavings();
appData.chooseOptExpenses();
appData.chooseIncome();



for( let key in appData){
    console.log("наша программа включает в себя:" + key + "-" + appData[key]);
}











