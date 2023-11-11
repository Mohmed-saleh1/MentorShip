"use strict";
let showMsg = true;
function showDetails(name, age, salary) {
    let test = 10;
    if (showMsg) {
        return `hello ${name},Age Is ${age},Salary Is ${salary} , Test Variable ${test}`;
    }
    return `no data to show`;
}
console.log(showDetails("Muhamed", 22, 10000));
//# sourceMappingURL=index.js.map