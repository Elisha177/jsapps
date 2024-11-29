const nums = [1, 2, 3, 4, 5];

// Using map
const doubled = nums.map(x => x * 2);
console.log("Map (doubled):", doubled);

// Using reduce
const sum = nums.reduce((acc, val) => acc + val, 0);
console.log("Reduce (sum):", sum);

// Using filter
const filtered = nums.filter(x => x > 3);
console.log("Filter (greater than 3):", filtered);

// Using flatMap
const flatMapped = nums.flatMap(x => [x, x * 2]);
console.log("FlatMap:", flatMapped);
