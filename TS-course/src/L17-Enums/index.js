"use strict";
const KIDS = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;
var level;
(function (level) {
    level[level["kids"] = 15] = "kids";
    level[level["Easy"] = 9] = "Easy";
    level[level["medium"] = 6] = "medium";
    level[level["hard"] = 3] = "hard";
})(level || (level = {}));
let lvl = "Easy";
if (lvl === "Easy") {
    console.log(`the level Is ${lvl} and Number of seconds is ${level.Easy}`);
}
//# sourceMappingURL=index.js.map