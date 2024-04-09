function customMap(array, transformFunc) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray.push(transformFunc(array[i], i, array));
    }
    return newArray;
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  
  // Doubling each element
  const doubledNumbers = customMap(numbers, (num) => num * 2);
  console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
  
  // Mapping to strings
  const stringNumbers = customMap(numbers, (num) => num.toString());
  console.log(stringNumbers); // Output: ["1", "2", "3", "4", "5"]
  
  // Using index and original array
  const indexAndValue = customMap(numbers, (num, index, array) => `${index}: ${num} (${array})`);
  console.log(indexAndValue); // Output: ["0: 1 (1,2,3,4,5)", "1: 2 (1,2,3,4,5)", "2: 3 (1,2,3,4,5)", "3: 4 (1,2,3,4,5)", "4: 5 (1,2,3,4,5)"]
  