

// let all:string | number=100;

type A = {
  one:string,
  two:number,
  three:boolean
}

type B = A &{
    four:number
}

type C = {
    five:boolean
}

type mix = A & C

function getActions(btns:mix) {
    console.log(`Hello ${btns.one}`);
    console.log(`Hello ${btns.two}`);
    console.log(`Hello ${btns.three}`);
    console.log(`Hello ${btns.five}`);
    
}

getActions({one:"string",two:100,three:true,five:true})