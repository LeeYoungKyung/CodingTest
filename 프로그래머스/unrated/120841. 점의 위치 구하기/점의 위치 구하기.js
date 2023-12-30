function solution(dot) {
    var answer = 0;
    let [a,b] = dot
    a>0 && b>0 ? answer = 1:null
    a<0 && b>0 ? answer = 2:null
    a>0 && b<0 ? answer = 4:null
    a<0 && b<0 ? answer = 3:null
    
    return answer;
}