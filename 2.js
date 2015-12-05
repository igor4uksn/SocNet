/**
 * Created by Igor on 14.11.2015.
 */
// ========завдання 1=========
var foo = 1;
function bar() {
    if (!foo) {
        var foo = 10;
    }
    alert(foo);
}
bar();
/////під час виконання даного коду на екран алеротом виведе 10
//==========2==========
//викоритсання var в середині функції  bar призводить до того що створюється локальна змінна foo і ніяк не впливає на глобальну foo

//============3============

var a = 1;
function b()
{
  //  alert(a);// виведе значення а{} як функцію
    a = 10;//присвоїть цій функції значення 10, але не вплине на зовнішню глобальну а
  //  alert(a);// що і виведе її

    function a(){}
}
b();
alert(a);
//в середині фунції b оголошується функція а, яка перекриває зовнішню глобальну змінну а,
// тому будь-які зміни з параметром  а в функції b будуть стосуватися функції а
//==================4===================
//для вирішення проблем у попереднтому завданні можна закоментувати оголошення функції а
var a = 1;
function b()
{
    //  alert(a);// виведе значення а{} як функцію
    a = 10;//присвоїть цій функції значення 10, але не вплине на зовнішню глобальну а
    //  alert(a);// що і виведе її

 //   function a(){}
}
b();
alert(a);
// або переіменувати внутрішню функцію
var a = 1;
function b()
{
    //  alert(a);// виведе значення а{} як функцію
    a = 10;//присвоїть цій функції значення 10, але не вплине на зовнішню глобальну а
    //  alert(a);// що і виведе її

    function A(){}
}
b();
alert(a);
//або змінити назву глобальної змінної
var A = 1;
function b()
{
    //  alert(a);// виведе значення а{} як функцію
    A = 10;//присвоїть цій функції значення 10, але не вплине на зовнішню глобальну а
    //  alert(a);// що і виведе її

    function a(){}
}
b();
alert(A);

//-------------5--____------
//унарні оператори
var bool = !true;
console.log(bool, typeof(bool));
var x = 10;
x = -x;
console.log(x, typeof(x));
var s= "23";
console.log(s, typeof(s));
x = +s;
console.log(x, typeof(x));
console.log(++x, typeof(x));
console.log(x++, typeof(x));

//бінарні оператори
var x = 1, y = 3;
console.log( y - x, x + y, x / y, x * y, !!(x&&y), !!(x^y) );
//тернарний
console.log(x--?"true":"false");
console.log(x--?"true":"false");


//=============6=============
var poem = ["e сонце", "e небо", "e мама","у я"];
var base = "Нехай завжди буд";
for(var i in poem)
    alert(base.concat(poem[i]));

//===============7=============
for(var i = 0; i < 25; i++)
{
    var length = Math.sin( i * Math.PI /15 ) * 25;
    var stars = '*';
    for(var j = 0; j<= length; j++)
        stars+='*';
    console.log(stars);

}
//=================8==================
var t = new Date();
console.log(t);
var secondsWait = 10;//time in seconds for waiting
t.setSeconds(t.getSeconds()+secondsWait);
while(new Date() < t);
console.log(new Date());
