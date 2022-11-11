function listProcessor(input) {
  let arr = input;
  let newArr = [];
  for (el of arr) {
    let token = el.split(" ");
    let command = token[0];
    let str = token[1];
    switch (command) {
      case "add":
        newArr.push(str);
        break;
      case "remove":
        if (newArr.includes(str)) {
          let index = newArr.indexOf(str);
          newArr.splice(index, 1);
        }
        break;
      case "print":
        console.log(newArr.join(","));

        break;
    }
  }
}
listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
