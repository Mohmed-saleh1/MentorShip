"use strict";
function getActions(btns) {
    console.log(`Action For Buttons Up Is${btns.up} `);
    console.log(`Action For Buttons right Is${btns.right} `);
    console.log(`Action For Buttons down Is${btns.down} `);
    console.log(`Action For Buttons left Is${btns.left} `);
    console.log(`Action For Buttons boolean Is${btns.x} `);
}
getActions({ up: "Jump", right: "Go Right", down: "go Down", left: "Go Left", x: true });
//# sourceMappingURL=index.js.map