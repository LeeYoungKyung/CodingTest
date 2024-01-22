function solution(my_string) {
    let arr = my_string.split(" ").map(el => el*0 === 0 ? Number(el) : el)
    let sum = arr[0];
    for(let i=1; i<arr.length; i+=2){
      arr[i] === "+" ? sum += arr[i+1] : sum -= arr[i+1]
    }
    return sum   
}