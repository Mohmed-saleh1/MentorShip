/**
 * Function
 * Rest Parameter
 * what about float => it relates to the datatype number
 */

function addAll(...nums:number[]): number {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
         result+=nums[i];
            }
    // nums.forEach((num)=> result+=num)
    return result;
}

console.log(addAll(10,10,10,10.5,+true));
