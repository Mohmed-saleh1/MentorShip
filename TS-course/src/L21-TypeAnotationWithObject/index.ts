

let myObject : {
          readonly  userName:string,
            id:number,
            hire:boolean,
            skills:{
                one:string,
                two:string
            }
            } = {
            userName : "Muhamed",
            id:1,
            hire:false,
            skills:{
                one:'reading',
                two: "paint"
            }
            }

myObject.id = 1;
myObject.hire = true;

console.log(myObject);
