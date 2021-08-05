First  run the following commands on your main terminal to ensure that you use your device’s has the necessary packages to run our application. 

npm init (press enter multiple times until module installed)
npm install mysql
npm install express
npm install body-parser

Once you have these packages installed then ensure that you have the “feedbackVisualiztionServices” folder open in visual studio code and once you do, right click the folder and select “open in integrated terminal”. You will then want to run the following command on the terminal in visual studio code “node backend.js”. 

The webpage can now be ran locally on your browser, simply go to your choice of browser and type the following into the browser “http://localhost:4000/“. 

You’ll notice that the first page is the welcome page which will ask for login, the employee and or manager will use their credentials to login. The manager will be given access to additional features to manage cards in the view cards web page and they lose privilege to add a card feature. other than that the webpage and features will be the same for both. 

You can use the following credentials to login to our webpage 

username - jxhawki1 
password - jack 

username - ejchacon
password - ernesto

username - brandonau
password - brandon

username - xhuan103
password - xin 

username - chvanatta 
password - connor 

username - jjgarc
password - jeremy 

All users have manager credentials except for ejchacon. 

Once you put in your credentials as a regular non-manager employee and login you will see you have the option to add a card, or to view cards. When you click on the add card button it should take you to the add card web page and in that webpage you will see two input boxes one for title which will be the title of your card and the other being the description. You will only be able to add a card if both fields are filled out, otherwise you will receive a warning to input information into the textbook that is in red. If you filled it out correctly then your card will be added to the database. If you filled it out but decide you do not want to submit then you can hit the clear button and it will clear out both input boxes. To go back to the main menu simply click the menu button. 

Once you back at the menu you can click on the view cards button which will populate all the cards that where submitted by the users. There will then be a button next to the cards so that you can select a card and rate it. To rate a card simply use the radio button next to the card you want to rate and a yes or no button should pop up click yes if you agree with the card or no if you do not and you will see that a score will be kept of the popularity of the card. 

from here you can go back to the menu and add another card or simply log out. 

If you are logging in as a manager you will see that you only have access to view cards which will look the exact same as the view cards for employees, however instead of clicking the radio button to rate the card you will use the radio buttons to approve or deny cards. 

Once the manager is done approving or denying cards then they can logout out of the application or go back to the main menu. 





