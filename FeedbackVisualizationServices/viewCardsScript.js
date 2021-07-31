    function displayCards() {

        // CREATE DYNAMIC TABLE.
        var table = document.createElement('table');

        // SET THE TABLE ID. 
        // WE WOULD NEED THE ID TO TRAVERSE AND EXTRACT DATA FROM THE TABLE.
        table.setAttribute('id', 'cardTable');

        // This will add header values so the array should only be header values 
        var arrHead = new Array();
        arrHead = ['Title:','User Input1'];
        
        // This will add values to the table data so this array should only have table data 
        var arrValue = new Array();
        arrValue.push(['Description:', 'User input1']);
       
        // initializing tr 
        var tr = table.insertRow(-1);

        // This loop will traverse through the arrHead values and create a td element for each, I tried td since our header is technically a td 
        for (var h = 0; h < arrHead.length; h++) {
            var td = document.createElement('td');        // TABLE HEADER.
            //This will insert actual text to the 'header' 
            td.innerHTML = arrHead[h];
            tr.appendChild(td);
        }

        // This loop will traverse through the arrValue values and creat a td element for 
        for (var c = 0; c <= arrValue.length - 1; c++) {
            tr = table.insertRow(-1);

            for (var j = 0; j < arrHead.length; j++) {
                var td = document.createElement('td');          // TABLE DEFINITION.
                td = tr.insertCell(-1);
                // This will insert actual text into td
                td.innerHTML = arrValue[c][j];                  // ADD VALUES TO EACH CELL.
            }
        }

    
        
        // This will add new table onto body 
        document.body.appendChild(table);
        
    }

