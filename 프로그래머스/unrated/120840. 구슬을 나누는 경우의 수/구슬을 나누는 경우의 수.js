function solution(balls, share) {
    let n = 1,m=1,mn=1
    
    var answer = 0;
    for(let i=1;i<=balls;i++){
        n*=i
    }
    for(let i=1;i<=balls-share;i++){
        mn*=i
    }
    for(let i=1;i<=share;i++){
        m*=i
    }
    
    return Math.round(n/(mn*m));
}