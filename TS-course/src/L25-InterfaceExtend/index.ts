

interface User {
  id:number,
  username:string,
  country:string
}

interface moderator extends User{
  role : number|string,
}

interface Admin extends User,moderator{
  protect :true 
}
  let user:Admin={
    id:1,
    username:'Muhamed',
    country:"Egypt",
    role:2,
    protect:true,

}