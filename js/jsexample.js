function AlertFunction()
{
    alert('Hello, World!');
}

var gameScore = 0;
var num = 5;
var animation = true;

function HideOrShowServices()
{
    var el = document.getElementById("services");
    if (el.hidden) {
        el.hidden = false;
    } else {
        el.hidden = true;
    }
}

function MoveServicesMeth()
{
    animation = animation == true ? false : true;
    MoveServices();
}

function MoveServices() {
    var el = document.getElementById("services");

    if (animation) {
        el.setAttribute("style", "position:relative;top:" + (gameScore += num).toString() + "px;");
        if (gameScore >= el.clientHeight) {
            num = -5;
        } else if (gameScore <= 0) {
            num = 5;
        }
        setTimeout(MoveServices, 100);
    } else {
        return;
    }
}
