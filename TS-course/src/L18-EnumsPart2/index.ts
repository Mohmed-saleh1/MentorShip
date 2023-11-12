
function getHardSeconds():number {
    return 3;
}
enum kids{
    Five = 25,
    Seven = 20,
    Ten = 15
}
enum level {
    kid = kids.Ten,
    Easy = 9,
    medium = Easy,
    hard = getHardSeconds()
}

let lvl : string = "Easy" ;
if (lvl==="Easy") {
    console.log(`the level Is ${lvl} and Number of seconds is ${level.hard}`);
    
}