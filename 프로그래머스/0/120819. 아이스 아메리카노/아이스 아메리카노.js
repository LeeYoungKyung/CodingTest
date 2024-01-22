function solution(money) {
    var answer = [];
    var coffee = Math.floor(money/5500)
    answer = [coffee,money-5500*coffee]
    return answer;
}