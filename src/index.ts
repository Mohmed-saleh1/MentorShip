// let num = 10;
// num = "Muhamed"
// console.log(num); 
////// => we can't reassign a variable with different data type /////////

// let age = 40;
// if(age > 30){
//     console.log("Good");    
// }else{
//     console.log(age.repeate(3));
// }
/////// => TS can recognize the errors in compiletime envieronment  //////////



let theName : string = "Muhaemd";
let theAge : number = 22;
let hire : boolean = false; 
//////// => we define the variable datatype in this way  ///////

hire = true ; // we can change the value but it should be with the same type

// let all : any = "Muhamed Saleh" // the "any" dataType can hold any type of data and it looks like "var" in JS

// function add (n1:number,n2:number){
//     return n1+n2;
// }
//  console.log(add(4,5)); //=> 9

//  console.log(add(4,"5")); //=> gives error because the inputs types diff from the initaliztion types 

 
//////////// Type Annotaions with Arrays  //////////

// let all : (string | number | boolean) ;  // we can define more than one data type 

// all = "A";
// all = 100;
// all = true ; 

// let myFriends: string[] = ["osama","ahmed","Sayed"]  // we can define the array data type by this way 

// for (let i = 0; i < myFriends.length; i++) {
//     console.log(myFriends[i].repeat(3));
        
// }


////////////  Annotaions with Multidimensional Arrays  //////////

let arrayOne: number[]=[1,2,3,4,5];
let arrayTwo: string[]=['a','b','c'];
let arrayThree: (number|string)[]=[1,2,3,4,5,"A","B","C"];
let arrayFour: (number|string|string[]|boolean)[]=[1,2,3,4,5,"A","B",["C","D"],true,false];  // we can define the multidimentional array data type by this way 

//////////// Type Annotaions with Functions  //////////


let showMsg = true;

function showDetails(name: string,age: number,salary: number) {

    let test = 10;
    if (showMsg) {
    return `hello ${name},Age Is ${age},Salary Is ${salary} , Test Variable ${test}`
    }
    return `no data to show`
}

console.log(showDetails("Muhamed",22,10000));

