// THIS SCRIPT IS THE ONE THAT DISPLAYS THE DESCRIPTION BUT NO TITLE 

function displayCards() {

        // CREATE DYNAMIC TABLE.
        var table = document.createElement('table');

        // SET THE TABLE ID. 
        // WE WOULD NEED THE ID TO TRAVERSE AND EXTRACT DATA FROM THE TABLE.
        table.setAttribute('id', 'cardTable');

        // This array will hold our user input test data
        const data = [
          {title : 'Please Fix the cofee machine already!', 
          description : 'The coffee machine in the break room has been broken for like a month now.'},
          {title: 'Espresso Please!!', 
          description: 'Who else here would love an espresso machine? I know I would!'}
          ]

          // This will stringify it into json
          //This does not apply to te code now but could help later on 
          let x = JSON.stringify(data, null, 2);

          // This will take the json string and parse it into y 
          //This does not apply to te code now but could help later on 
          let y = JSON.parse(x)


        //IGNORE FOR NOW 
        // This will add header values so the array should only be header values 
        var title = new Array();
        title.push = (['Title:','Please Fix the cofee machine already!'], 
        ['Title:','Espresso Please!!']);
        
         //IGNORE FOR NOW 
        // This will add values to the table data so this array should only have table data 
        var description = new Array();
        description.push(['Description:', 'The coffee machine in the break room has been broken for like a month now.'], 
        ['Description:', 'Who else here would love an espresso machine? I know I would!']);
       
        // initializing tr 
        var tr = table.insertRow(-1);

        // This loop will traverse through the data values and create a th element for each title
        for (var h = 0; h < title.length; h++) {
            var th = document.createElement('th');        // TABLE HEADER.
            // This will insert actual text to the 'header' at least it should 
            th.innerHTML = title[h];
            tr.appendChild(th);
        }

        // This loop will traverse through the data value values and creat a td element for 
        for (var c = 0; c <= description.length - 1; c++) {
            tr = table.insertRow(-1);

            for (var j = 0; j < description.length; j++) {
                var td = document.createElement('td');          // TABLE DEFINITION.
                td = tr.insertCell(-1);
                // This will insert actual text into td
                td.innerHTML = description[c][j];                  // ADD VALUES TO EACH CELL.
            }
        }

    
        
        // This will add new table onto body 
        document.body.appendChild(table);
        
    }



