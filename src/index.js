var num = 10;
num = "Muhamed";
console.log(num);
////// => we can't reassign a variable with different data type /////////
var age = 40;
if (age > 30) {
    console.log("Good");
}
else {
    console.log(age.repeate(3));
}
/////// => TS can recognize the errors in compiletime envieronment  //////////
var theName = "Muhaemd";
var theAge = 22;
var hire = false;
//////// => we define the variable datatype in this way  ///////
hire = true; // we can change the value but it should be with the same type
var alll = "Muhamed Saleh"; // the "any" dataType can hold any type of data and it looks like "var" in JS
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(4, 5)); //=> 9
console.log(add(4, "5")); //=> gives error because the inputs types diff from the initaliztion types 
//////////// Type Annotaions with Arrays  //////////
var all; // we can define more than one data type 
all = "A";
all = 100;
all = true;
var myFriends = ["osama", "ahmed", "Sayed"]; // we can define the array data type by this way 
for (var i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i].repeat(3));
}
////////////  Annotaions with Multidimensional Arrays  //////////
var arrayOne = [1, 2, 3, 4, 5];
var arrayTwo = ['a', 'b', 'c'];
var arrayThree = [1, 2, 3, 4, 5, "A", "B", "C"];
var arrayFour = [1, 2, 3, 4, 5, "A", "B", ["C", "D"], true, false]; // we can define the multidimentional array data type by this way 
//////////// Type Annotaions with Functions  //////////
var showMsg = true;
function showDetails(name, age, salary) {
    var test = 10;
    if (showMsg) {
        return "hello ".concat(name, ",Age Is ").concat(age, ",Salary Is ").concat(salary, " , Test Variable ").concat(test);
    }
    return "no data to show";
}
console.log(showDetails("Muhamed", 22, 10000));
