function solution(myString, pat) {
    var pattern = pat.toLowerCase()
    
    return myString.toLowerCase().includes(pattern) ? 1 : 0
}