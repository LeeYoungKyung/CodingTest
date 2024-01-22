function solution(sides) {
    var answer = 0;
    arr = sides.sort()
    for(let i=0 ; i<sides.length;i++){
      answer= arr[2]<arr[0]+arr[1] ? 1:2
    }
    return answer;
}