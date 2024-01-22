function solution(keyinput, board) {
    var answer = [];
    let position = [0, 0];
    let maxX = Math.floor(board[0] / 2);
    let maxY = Math.floor(board[1] / 2);
    let rpg = {up: [0, 1], down: [0, -1], left: [-1, 0], right: [1, 0]};

    for (let key of keyinput) {
        let newPos = [position[0] + rpg[key][0], position[1] + rpg[key][1]];
        if (Math.abs(newPos[0]) <= maxX && Math.abs(newPos[1]) <= maxY) {
            position = newPos;
        }
    }

    answer = position;

    return answer;
}
