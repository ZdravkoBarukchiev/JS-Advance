function addAndRemoveElements(arr) {
  let newArr = [];
  let count = 0;
  for (el of arr) {
      count++;
    switch (el) {
      case "add":
        newArr.push(count);
        break;
      case "remove":
        newArr.pop();
        break;
    }
  }
  if (newArr.length <= 0) {
    console.log("Empty");
  } else {
    console.log(newArr.join("\n"));
  }
}
addAndRemoveElements(["add", "add", "remove", "add", "add"]);
