"use strict";
function logging(msg) {
    console.log(msg);
    return;
}
console.log(logging("Iam a message"));
console.log('test');
const fail = (msg) => {
    throw new Error(msg);
    return 10;
};
function alwaysLog(name) {
    while (true) {
        console.log(name);
    }
}
alwaysLog("Muhamed");
console.log("test");
//# sourceMappingURL=index.js.map