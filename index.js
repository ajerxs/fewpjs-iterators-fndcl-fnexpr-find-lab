function superbowlWin(array) {
    let team = array.find(function(s) { return s.result === "W"} );
    if(team) {
        return team.year;
    } else {
        return team
    }
}