function solution(num_list) {
    var answer = [];
    var a = 0;
    var b =0;
    
    for(let i=0;i< num_list.length;i++){
        num_list[i]%2==0? a++ : b++
    }
    answer = [a,b]
    return answer;
}