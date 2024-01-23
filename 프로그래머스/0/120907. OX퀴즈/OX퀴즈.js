function solution(quiz) {
  return quiz.map(eq => {
    let parts = eq.split(' '); 
    let X = Number(parts[0]);
    let operator = parts[1];
    let Y = Number(parts[2]);
    let Z = Number(parts[4]);

    let result = operator === '+' ? X + Y : X - Y;
    return result === Z ? 'O' : 'X';
  });
}