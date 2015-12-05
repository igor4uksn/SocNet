/**
 * Created by Igor on 28.11.2015.
 */
console.log("----------------first task---------------");
//Знайти неперервний підмасив масиву , сума  елементів якого є максимальною.
function getMaxSubArray(foo) {
    var maxSum = 0,// максимальна сума
        sum = 0,//поточна сума
        left = 0,//лівий індекс (початковий індекс підмасиву)
        right = 0,// правий індекс (кніцевий індекс підмасиву)
        start_index = -1;//початковий індекс для поточного підмасиву

    for (var i = 0; i < foo.length; i++) {
        sum += foo[i];
         if(maxSum < sum){
             maxSum = sum ;
             left = start_index + 1;
             right = i + 1;
         }

        if (sum < 0){
            sum = 0;
            start_index = i;
        }

    }
    console.log("max sum = ", maxSum);
    return foo.slice(left,right);
}
console.log(getMaxSubArray([-2,1,-3, 4,-1, 2, 1,-5, 4]));
console.log(getMaxSubArray([1,2,3,4,5,6,7]));
console.log(getMaxSubArray([1,2,3,4,-2,5,6,7,-15]));
console.log(getMaxSubArray([1,2,3,-9,4,-2,5,6,7,-15]));
console.log(getMaxSubArray([1,5,1,-5,7,16,23,11,4,-5,12,16]));

console.log("------------------second task----------------------");
//Створити функцію сумування двох дуже довгих чисел представлених строкою.
function longStringSum(a,b){
    var c = "", //вихідний рядок
        op1,op2;// змінні для цифр-опереандів
    var carry = false;// булівська змінна для збереження перенесення розряду, так як операція додавання то достатньо лиш її
    if(a.length > b.length){ // перевірка чи різна довжина оперенандів і вирівнювання їх
        b = new Array(a.length - b.length + 1).join("0") + b;
    }
    else {
        a = new Array(b.length - a.length + 1).join("0") + a;
    }
    for(var i = 1; i <= a.length; i++){
        op1 = Number(a.charAt(a.length-i));
        op2 = Number(b.charAt(b.length-i));
        op1 += op2;
        if (carry){ //перевірка чи збережений  перенос
            op1++;
            carry = false;
        }
        if(op1 / 10.0 >= 1){ //перевірка чи сума цифр більша 10 і збережння розряду переноса
            op1 = op1 % 10;
            carry = true;
        }
       c =  String(op1) + c ;
    }

    if (carry)
        c = "1" + c; // перевірка чи залишився перенесений розряд і додавання його в кінець

    return c;
}
console.log(longStringSum("6","3"));
console.log(longStringSum("126","437"));
console.log(longStringSum("1000000000000000000000000000000","888"));
console.log(longStringSum("222", "1"));
console.log(longStringSum("122","888"));

console.log("--------------------3 task-------------------------");
//Написати метод реалізуючий різницю двох масивів. Причому різниця має враховувати кількість однакових елементів.

function differenceSimple(a, b){ // проста різниця яка не враховує кількість однакових елементів
    var answer = [];
    for (var i = 0; i < a.length; i++)
    {
        if ( b.indexOf(a[i]) < 0) // якщо a[i] нема в b, то це те що нам треба)
            answer.push(a[i]);
    }
    return answer;
}
function differencePro(a, b){// вдосконалена різниця, яка враховує повторювані елементи
    var answer = [];
    var arr = b.slice();//копія масиву b, щоб не пошкодити дані які в ньому зберігаютсья
    for (var i = 0; i < a.length; i++)
    {
        var temp = arr.indexOf(a[i]); //шукаємо в 2 масиві елементи з першого по порядку
        if (temp < 0) // якщо a[i] нема в b, то це те що нам треба
            answer.push(a[i]);//і пишемо його (елемент a[i]) у відповідь
        else
            arr.splice(temp, 1); // в іншому випадку видаляємо з 2 масива елемент, який є в першому,
    }                          // щоб він не повторювався знову при пошуку
    return answer;
}

console.log(differenceSimple([1,2,3,4,5,6],[1,3,5]));
console.log(differencePro(   [1,2,3,4,5,6],[1,3,5]));
console.log("----");
console.log(differenceSimple([1,2,3,4,5,6,1],[1,2,6]));
console.log(differencePro(   [1,2,3,4,5,6,1],[1,2,6]));
console.log("----");
console.log(differenceSimple([1,1,2,3,1,6,7],[1,2,6]));
console.log(differencePro(   [1,1,2,3,1,6,7],[1,2,6]));