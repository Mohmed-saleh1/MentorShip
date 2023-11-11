/**
 * Data types
 * Advanced Type Aliax
 */

type Buttons = {
    up:string,
    right:string,
    down:string,
    left:string
}
type last = Buttons &{
    x:boolean
}
function getActions(btns:last) {
    console.log(`Action For Buttons Up Is${btns.up} `);
    console.log(`Action For Buttons right Is${btns.right} `);
    console.log(`Action For Buttons down Is${btns.down} `);
    console.log(`Action For Buttons left Is${btns.left} `);
    console.log(`Action For Buttons boolean Is${btns.x} `);
}
getActions({up:"Jump",right:"Go Right",down:"go Down",left:"Go Left",x:true})