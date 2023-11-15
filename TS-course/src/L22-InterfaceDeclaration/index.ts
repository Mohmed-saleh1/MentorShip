

  interface Usr{
    id:number,
    username:string,
    country:string,
  }

  let usr : Usr ={
    id:2,
    username:'muhamed',
    country:'fayoum',
    
  }
//   console.log(user);
  
  function gettData(data:Usr):void{
    console.log(`id is ${data.id}`);
    console.log(`username is ${data.username}`);
    console.log(`country is ${data.country}`);
  }

  getData({id:4,username:"lolo",country:"palstine"});