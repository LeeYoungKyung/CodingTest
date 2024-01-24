function solution(my_string, num1, num2) {
  let array = my_string.split('');
  let str = array[num1];
  array[num1] = array[num2];
  array[num2] = str;
  return array.join('');
}
