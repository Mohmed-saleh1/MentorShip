let num = 10;
num = "Muhamed"
console.log(num); 
////// => we can't reassign a variable with different data type /////////

let age = 40;
if(age > 30){
    console.log("Good");    
}else{
    console.log(age.repeate(3));
}
/////// => TS can recognize the errors in compiletime envieronment  //////////



let theName : string = "Muhaemd";
let theAge : number = 22;
let hire : boolean = false; 
//////// => we define the variable datatype in this way  ///////

hire = true ; // we can change the value but it should be with the same type