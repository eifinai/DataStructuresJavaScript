// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
    if(number === 0)
    return 1;

    return number * findFactorialRecursive(number - 1)
  }
  
  function findFactorialIterative(number) {
    //code here
    var answer = 1;
    if(number === 0 || number === 1){
        return 1
    }
    if (number === 2){
        return 2;
    }
    for (let i = 1; i<=number;i++){
        answer = answer * i;
        
    }
    return answer;
  }
  console.log(findFactorialRecursive(5));
  