const arr = []
for (let index = 0; index < 30; index++) {
  arr.push(Math.floor(Math.random() * 50))
}

const initialValue = 0;
const sumWithInitial = arr.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(`value = ${sumWithInitial}`);

// hyperfine "bun http.js" "node http.js" --warmup 100