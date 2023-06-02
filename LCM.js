function smallestCommons(arr) {
    
    const [min, max] = arr.sort((a, b) => a - b);
    const numberDivisors = max - min + 1; // this case 4 divisors
    
    let upperBound = 1;
    for (let i = min; i <= max; i++) {
      upperBound *= i; // biggest common multiple - this case 120
    }
    
    for (let multiple = max; multiple <= upperBound; multiple += max) {
      
      let divisorCount = 0;
      for (let i = min; i <= max; i++) {
        
        if (multiple % i === 0) {
          divisorCount += 1;  
        }
      }
      if (divisorCount === numberDivisors) { // when divisorCount reaches 4 is the smallest common multiple
        return multiple;
      }
    }
  }
  
  console.log(smallestCommons([1, 5]));