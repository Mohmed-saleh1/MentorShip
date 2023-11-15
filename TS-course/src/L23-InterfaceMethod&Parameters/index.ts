

  interface User{
    id:number,
    username:string,
    country:string,
    sayhello():string,
    sayWelcome : ()=> string,
    getDouble(num:number):number
  }

  let user : User ={
    id:2,
    username:'muhamed',
    country:'fayoum',
    sayhello(){
      return ` Hello ${this.username}`
    },
    sayWelcome :()=>{
      return  `welcome ${user.username}`
    },
    getDouble(num:number){
      return num*2;
        }
  }
//   console.log(user);
  
  function getData(data:User):void{
    console.log(`id is ${data.id}`);
    console.log(`username is ${data.username}`);
    console.log(`country is ${data.country}`);
    console.log(`country is ${data.sayhello()}`);
    console.log(`country is ${data.sayWelcome()}`);
    console.log(`country is ${data.getDouble(2)}`);
  }
 
 console.log(user.sayhello());
 