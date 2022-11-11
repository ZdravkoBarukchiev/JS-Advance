function rotateArray(arr, n) {
  for (let i = 0; i < n; i++) {
    let lastEl = arr.pop();
    arr.unshift(lastEl);
  }
  console.log(arr.join(" "));
}
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
