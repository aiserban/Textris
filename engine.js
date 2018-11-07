var tick = 0;
var running = true;
var I1 = "■■■■";
var I2 = "■\n■\n■\n■";

var keypress = function(event){
    let key = event.which;
    console.log("Pressed " + event.which);

    switch (key) {
        // Left arrow = 37, A = 65
        case 37:
        case 65:
        {
            console.log("You pressed left");
            break;
        }
        // Up arrow = 38, W = 87
        case 38:
        case 87:
        {
            console.log("You pressed up");
            break;
        }
        // Right arrow = 39, D = 68
        case 39:
        case 68:
        {
            console.log("You pressed right");
            break;
        }
        // Down arrow = 40, S = 83
        case 40:
        case 83:
        {
            console.log("You pressed down");
            break;
        }
    }
};