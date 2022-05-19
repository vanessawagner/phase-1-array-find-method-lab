//function superbowlWin(record) {
//    return record.result === "W"
//}

//let win = record.find(superbowlWin)
//    console.log(win)

//function superbowlWin(record) {
//var win = record.find(win = win.result === "W").year
//    return win
//}

function superbowlWin(record) {
    let win = record.find(record => record.result === "W");
    //return win.year
    if (win === undefined){
        return undefined
    }
    if (win.result === "W"){
        return win.year
    }

}
