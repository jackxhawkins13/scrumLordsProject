1. Install Node js on your computer
2. Open Visual Studio Code
3. Go to File > Open folder
4. Navigate to the "scrumLordsProject" folder 
5. Select and open the FeedbackVisualizationsServices folder
6. With FeedbackVisualizationsServices being your main folder in VSCode
    open a new terminal. (Terminal > New Terminal)
7. Run the following commands to install the necesary modules. 
    npm init (press enter multiple times until module installed)
    npm install mysql
    npm install express
    npm install body-parser
8. When all modules have been installed, type in "node backend.js"

The webpage can now be ran locally on your browser, simply go to your choice of browser and 
type the following into the browser “http://localhost:4000/“. 

The first page is the welcome page which will ask for login. The employee and/or manager will 
use their credentials to login.

The manager will only be given access to the "manage cards" feature. A manager may not submit
or rate a card.

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

Once you put in your credentials as a regular non-manager employee and login you will have 
the option to add a card or to view cards. 

Add Cards Button:
When you click on the "Add Cards" button it should take you to the add card web page and in that
    webpage you will see two input boxes one for the title of your card and the other being 
    the description. You will only be able to add a card if both fields are filled out. 
    Otherwise you will receive a warning to input information into the textbook that is in 
    red. If you filled it out correctly then your card will be added to the database. 
    If you filled it out but decide you do not want to submit then you can hit the clear 
    button and it will clear out both input boxes. To go back to the main menu simply click 
    the menu button. 

View and Rate Cards Button:
Once you go back to the menu, you can click on the "View and Rate Cards" button. This will 
    forward you to the another page. A table will populate all the cards that where submitted 
    by the users. There will then be a button next to the cards so that you can select a card 
    and rate it. To rate a card, simply use the radio button next to the card you want to rate 
    and select "Rate Card" at the top of the page. A "Yes" or "No" button should pop up. Click 
    yes if you agree with the card or no if you do not and you will see that a score will be 
    kept of the popularity of the card. 

From here you can go back to the menu and add another card or simply log out. 

If you are logging in as a manager you will see that you only have access to view cards which 
will look the exact same as the view cards for employees. However, instead of clicking the 
radio button to rate the card, you will use the radio buttons to approve or deny cards. 

Once the manager is done approving or denying cards then they can logout out of the 
application or go back to the main menu. 