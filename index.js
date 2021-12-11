// function superbowlWin(s) {
//     if(s.result === "W") {
//         return s.year
//     }
// }

// array.find(superbowlWin(s) {
//     return s.year
// })

function superbowlWin(array) {
    let team = array.find(function(s) { return s.result === "W"} );
    if(team) {
        return team.year;
    } else {
        return team
    }
}