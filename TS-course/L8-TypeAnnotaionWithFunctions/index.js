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
