function solution(my_string) {
    var answer = [];
    for (var i = 0; i < my_string.length; i++) {
        my_string[i] === my_string[i].toUpperCase() ? answer.push(my_string[i].toLowerCase()) : answer.push(my_string[i].toUpperCase());
    }
    return answer.join("");
}
