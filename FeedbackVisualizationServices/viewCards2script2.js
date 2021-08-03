// THIS SCRIPT DISPLAYS ONE PART OF TITLE/DESCRIPTION BUT OUT OF ORDER NAD NOT SEPERATED. 

function displayCards() {

  // CREATE DYNAMIC TABLE.
  var table = document.createElement('table');

  // SET THE TABLE ID. 
  // WE WOULD NEED THE ID TO TRAVERSE AND EXTRACT DATA FROM THE TABLE.
  table.setAttribute('id', 'cardTable');

  // This array will hold our user input
  // Which we would still need a way to insert data from a querry into here 
  // Test data for now
  const data = [
  ['Title:'], 
  ['Please Fix the cofee machine already!']
  ['Description:'], 
  ['The coffee machine in the break room has been broken for like a month now.'],
  ['Title:']
  ['Espresso Please!!'],
  ['Description:'], 
  ['Who else here would love an espresso machine? I know I would!']
  ]

  // This will stringify data into json
  //let x = JSON.stringify(data, null, 2);

  // This will take the json string and parse it into y 
  //let y = JSON.parse(x)

      
  // (B) CREATE HTML TABLE OBJECT
  var perrow = 2, // 2 CELLS PER ROW
  table = document.createElement("table"),
  row = table.insertRow();

  // LOOP THROUGH ARRAY AND ADD TABLE CELLS
  for (var i = 0; i < data.length; i++) {
    // ADD "BASIC" CELL
    var cell = row.insertCell();
    //This should insert data from the array which would be the "title"
    cell.innerHTML = data[i];



    // BREAK INTO NEXT ROW
    var next = i + 1;
    if (next%perrow==0 && next!=data.length) {
      row = table.insertRow();
    }
  }

  // (C) ATTACH TABLE TO CONTAINER
  document.body.appendChild(table);

}




