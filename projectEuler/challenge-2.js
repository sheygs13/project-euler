/*
 Even Fibonacci

 Each new term in the Fibonacci sequence is generated 
 by adding the previous two terms. By starting with 1 and 2,
 the first 10 terms will be:

           1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence that do not 
exceed the nth term, find the sum of the even-valued terms.
*/

(function fiboEvenSum(n){
  let f1 = 1,
      f2 = 2,
      sum = 2,
      fiboAdd;
  for (let i = 3; i <= n; i++){
      fiboAdd = f1 + f2;
      if (fiboAdd % 2 === 0){
         sum+=fiboAdd;
      }
      f1 = f2;
      f2 = add;
  }
  return sum;
})(10); // 44

fiboEvenSum(18); // 3382

// Code needs refactoring