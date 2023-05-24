// code your solution here
function superbowlWin(data) {
    const win = data.find(superBowl => superBowl.result === "W");
    return win ? win.year : undefined;
}