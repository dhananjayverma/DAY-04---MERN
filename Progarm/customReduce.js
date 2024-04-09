function customReduce(array, reducer, initialValue) {
    let accumulator = initialValue === undefined ? undefined : initialValue;
  
    for (let i = 0; i < array.length; i++) {
      if (accumulator === undefined && i === 0) {
        accumulator = array[0];
        continue;
      }
      accumulator = reducer(accumulator, array[i], i, array);
    }
  
    return accumulator;
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  
  // Summing all numbers
  const sum = customReduce(numbers, (acc, curr) => acc + curr, 0);
  console.log(sum); // Output: 15
  
  // Finding maximum number
  const max = customReduce(numbers, (max, curr) => Math.max(max, curr));
  console.log(max); // Output: 5
  
  // Flattening an array of arrays
  const nestedArray = [[1, 2], [3, 4], [5, 6]];
  const flattenedArray = customReduce(nestedArray, (acc, curr) => acc.concat(curr), []);
  console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
  