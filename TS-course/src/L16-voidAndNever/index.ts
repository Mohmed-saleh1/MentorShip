

function logging(msg:string):void{
    console.log(msg);
    return;    
}

console.log(logging("Iam a message"));

console.log('test');

const fail = (msg:string)=>{
    throw new Error(msg);
    return 10;  // the program will not reach to this line
}

function alwaysLog (name:string):never{
    while (true) {
        console.log(name);
    }
    // return 29;  // the program will not reach to this line
}

alwaysLog("Muhamed")
console.log("test");
