console.log("-----------------1------------------");
var types = {
  typeInt : 1,
  typeString: "",
  typeObj: {a:1},
  typeFunc: function(){},
  typeArray: [1,23] 
}

for(var i in types)
    console.log(typeof types[i]);
console.log("---------------2-swap----------------");
var tInt = 1;
var tString = "abc";
var temp = tInt;
tInt = tString;
tString = temp;
console.log(tInt);
console.log(tString);
console.log("-----------------3------------------");
if(12 == '12')
  console.log("12 equal '12' with ==");
else console.log("12 unequal '12' with using ==");
if (12 === '12')
  console.log("12 equal '12' with ===");
else console.log("12 unequal '12' with using ===");

console.log("--------------------4----------------");
var inf = 1234;
var key = 10999;

var coded = inf^key;
var decrypt = coded^key;
if(decrypt === inf)
  console.log("great!")
  else("smthg going wrong...");
console.log("information: " + inf + "\nsecret key: " + key + "\nencrypted information: " + coded +"\ndecrypted information: "+ decrypt);


