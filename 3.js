/**
 * Created by Ігор Дім on 22.11.2015.
 */
var MyMath = (function() {
    var mem ={};
    var addict = function(a,b) {
        var key = String(a).concat('+', String(b));
        var value;
        if (key in mem) {
            value = mem[key];
            console.log('cache used')
        } else {
            value = a + b;
            mem[key] = value;
            mem[String(b).concat('+', String(a))] = value;// because a + b === b + a
            console.log('calculating...');
        }
        return value;
    };
    var multiplication = function(a,b) {
        var key = String(a).concat('*', String(b));
        var value;
        if (key in mem) {
            value = mem[key];
            console.log('cache used')
        } else {
            value = a * b;
            mem[key] = value;
            mem[String(b).concat('*', String(a))] = value;// because a * b === b * a
            console.log('calculating...');
        }
        return value;
    };
    var subtraction = function(a,b) {
        var key = String(a).concat('-', String(b));
        var value;
        if (key in mem) {
            value = mem[key];
            console.log('cache used')
        } else {
            value = a - b;
            mem[key] = value;
            console.log('calculating...');
        }
        return value;
    };
    var division = function(a,b) {
        var key = String(a).concat('/', String(b));
        var value;
        if (key in mem) {
            value = mem[key];
            console.log('cache used')
        } else {
            value = a / b;
            mem[key] = value;
            console.log('calculating...');
        }
        return value;
    };
    return {
        add: function (a,b) {
           return addict(a,b);

        },
        sub: function (a,b) {
            return subtraction(a,b);
        },
        mul: function (a,b){
            return multiplication(a,b);
        },
        div: function(a,b){
            return division(a,b);
        }
    }
})();
console.log(MyMath.add(1,2));
console.log(MyMath.add(2,2));
console.log(MyMath.add(1,2));
console.log(MyMath.add(2,1));

console.log(MyMath.sub(2,1));
console.log(MyMath.sub(8,1));
console.log(MyMath.sub(2,1));

console.log(MyMath.mul(1,2));
console.log(MyMath.mul(2,2));
console.log(MyMath.mul(1,2));
console.log(MyMath.mul(2,1));

console.log(MyMath.div(5,2));
console.log(MyMath.div(4,2));
console.log(MyMath.div(5,2));
