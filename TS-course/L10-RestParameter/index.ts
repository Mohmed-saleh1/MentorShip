/**
 * Function
 * Rest Parameter
 * what about float => it relates to the datatype 'number' ..
 */

function addAll(...nums:number[]) {
    let sum = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     return sum+nums[i]       
    // }
    nums.forEach((num)=>{
        return sum + num;
    })
}

console.log(addAll(10,10,10,10));
