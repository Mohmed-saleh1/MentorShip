

  interface User{
    id:number,
    username:string,
    country:string,
  }

  let user : User ={
    id:2,
    username:'muhamed',
    country:'fayoum'
  }
//   console.log(user);
  
  function getData(data:User):void{
    console.log(`id is ${data.id}`);
    console.log(`username is ${data.username}`);
    console.log(`country is ${data.country}`);
  }

  getData({id:4,username:"lolo",country:"palstine"});