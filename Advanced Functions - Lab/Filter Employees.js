function filterEmployees(input, command) {
  let arrObj = JSON.parse(input);
  let comandToken = command.split("-");
  let searchValue = comandToken[1];
  let count = -1;

  for (obj of arrObj) {
    let valuesArr = Object.values(obj);
    if (valuesArr.includes(searchValue)) {
      count++;
      result = `${count}. ${valuesArr[1]} ${valuesArr[2]} - ${valuesArr[3]}`;
      console.log(result);
    }
  }
}
filterEmployees(
  `[{

        "id": "1",
        
        "first_name": "Kaylee",
        
        "last_name": "Johnson",
        
        "email": "k0@cnn.com",
        
        "gender": "Female"
        
        }, { "id": "2", "first_name": "Kizzee", "last_name": "Johnson", "email": "kjost1@forbes.com", "gender": "Female" }, { "id": "3", "first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" }, { "id": "4", "first_name": "Evanne", "last_name": "Johnson", "email": "ev2@hostgator.com", "gender": "Male" }]`,
  "last_name-Johnson"
);
