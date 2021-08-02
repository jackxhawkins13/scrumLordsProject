// This is the function that will be performed onclick of the add button
function addCard(form){

  //If the user did not enter a either title or description then they will get an alert 
  if(!form.checkValidity()){
    alert("See the highlighted input boxes, there are errors.");
  } 

  //Other wise the following code will execute 
  else{

    // Card Title will = whats in the titleId box 
    cardTitle = document.getElementById("title");

    // Logging it to prove it 
    console.log("Card Title:", cardTitle.value);

    // Card Title will = whats in the descriptionId box 
    cardDescription = document.getElementById("description");

    //Logging it to prove it 
    console.log("Card description:", cardDescription.value);
  }
}


// This function will clear all of the values in the form input boxes when the clear button is clicked
function clearInputs(form){
  // alert("function fun is running")
  let formElements = form.elements; 
  // This will loop through all elements aka inputboxes
  for(let i=0; i < formElements.length; i++){
    // For every item in the list it will set it equal to balnk 
    formElements[i].value = "";
  }// end of for loop 
} 



