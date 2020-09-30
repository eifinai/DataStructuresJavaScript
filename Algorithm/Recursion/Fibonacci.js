// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){ //O(n)
    //code here;
    if(n === 0)
    return 0
    if (n === 1)
    return 1;
    var temp1 = 0, temp2 = 1, next = 1
    for(let i = 2;i<=n; i++){
        next = temp1 + temp2
        temp1 = temp2;
        temp2 = next;
    }
    return next;
  }
  console.log(fibonacciIterative(5));
  
  function fibonacciRecursive(n) { //O(n)
    //code here;
    if(n === 0)
    return 0
    if (n === 1)
    return 1;

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n-2);
  }
  
  console.log(fibonacciRecursive(5));