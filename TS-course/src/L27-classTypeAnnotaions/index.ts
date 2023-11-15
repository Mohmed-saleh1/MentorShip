class User {
    u:string;
    s:number;
    msg:()=> string;
    constructor(username:string,salary:number) {
        this.u=username;
        this.s=salary;
        this.msg=function(){
            return `Hello ${this.u} your salary is ${this.s}`
        }
    }
    Saymsg=function(){
        return `Hello ${this.u} your salary is ${this.s}`
    }
}

let userOne = new User("mohamed",10000);

console.log(userOne.u);
console.log(userOne.s);
console.log(userOne.msg());
console.log(userOne.Saymsg());
