/**
 * Data types
 * Advanced Type Aliax
 */
function getActions(btns) {
    console.log("Action For Buttons Up Is".concat(btns.up, " "));
    console.log("Action For Buttons right Is".concat(btns.right, " "));
    console.log("Action For Buttons down Is".concat(btns.down, " "));
    console.log("Action For Buttons left Is".concat(btns.left, " "));
    console.log("Action For Buttons boolean Is".concat(btns.x, " "));
}
getActions({ up: "Jump", right: "Go Right", down: "go Down", left: "Go Left", x: true });
