/**
 * Data Types
 * -- Somtime compiler dosen't know the information we do 
 * -- TypeScript is not performing any check to make sure Type assertion is valid 
 */

// let myImg = document.getElementById("my-img") as HTMLImageElement ;
// let myImg = <HTMLImageElement> document.getElementById("my-img")  ;
// console.log(myImg.src);

let data : any = "1000"
console.log((data as string).repeat(3));


