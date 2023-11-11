/**
 * Data types
 * --Literal types
 */
type nums = 0|1|-1
function compare(num1:number,num2:number):nums {
    if (num1===num2) {
        return 0;
    } else if(num1>num2) {
        return 1;
    }else{
        return -1;
    }
}

console.log(compare(20,20)); 
console.log(compare(20,19));
console.log(compare(20,22));

let myNumber :nums = 1
