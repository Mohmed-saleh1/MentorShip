
let el = document.getElementById("id") as HTMLElement ;

 

//Homepage
interface settings {
   readonly theme:boolean,
  font:string,
  sidebar:boolean;
  external :boolean;

 }

let userSettings :settings={
  theme:true,
  font:'sans-serf',
  sidebar:false,
  external:true
}
