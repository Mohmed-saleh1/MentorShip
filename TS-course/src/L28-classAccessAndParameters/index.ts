 /**
  *
 Class

- Data Access Modifiers & Parameters Properties
--Public
- All Members Of A Class In TypeScript Are Public.
- All Public Members Can Be Accessed Anywhere Without Any Restrictions
- Private
- Members Are Visible Only To That Class And Are Not Accessible Outside The Class
-- Protected
--Same Like Private But Can Be Accessed Using The Deriving Class
TypeScript Is A Layer On Top Of JavaScript
It Should Remove All Annotations And Although Access Modifiers "Private For Example" 

  */

class UUser {
  
    msg:()=> string;
    constructor(private username:string,protected salary:number, ) {
       
        this.msg=function(){
            return `Hello ${this.username} your salary is ${this.salary}`
        }
    }
    Saymsg=function(){
        return `Hello ${this.username} your salary is ${this.s}`
    }
}
let useOne = new User("mohamed",10000);

console.log(useOne.username);
console.log(useOne.s);
console.log(useOne.msg());
console.log(useOne.Saymsg());