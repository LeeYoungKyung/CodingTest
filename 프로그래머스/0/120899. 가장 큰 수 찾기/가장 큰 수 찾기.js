function solution(array) {
    const a = Math.max(...array);
    return [a, array.indexOf(a)];
    
}