# TODO List App
TODO list is a standard app which allows user to remember future events by setting the date and an hour of the event. The details of the new event are provided with using a simple HTML form. The data is stored in the SQL database. The backend is implemented in PHP.

## About project
The application allows you to create a new event, view a list of current events and delete a selected item.

Each item has its own deadline which need to be fixed at start. The app shows the remaining time for all items. The time is refreshed every second and shows the number of days, hours, minutes and seconds till the end. A user is not able to create an event for the past time. Earlier events are always at the top of the list and later events are always below. The form error messages are provided.

The goal was to practice backend skills, especialy checking how backend scripts communicate and work with database. This project was also a good opportunity to learn more about PHP and AJAX.

## Used technology
<ul>
  <li>JS, HTML, CSS</li>
  <li>PHP</li>
  <li>SQL (MySQL)</li>
  <li>AJAX</li>
</ul>

## Using the App
To run this app you need to use Apache HTTP Server, MySQL DB and PHP interpreter. You can use XAMPP Control Panel to provide it.

<ol>
  <li>Install XAMPP Control Panel</li>
  <li>Go to the path where your XAMPP is installed. Open 'htdocs' directory, create a new directory there and give it any name you like, e.g. 'X'</li>
  <li>Download the content of this repository to the X directory</li>
  <li>Run your XAMPP and Start service 'Apache' and service 'MySQL'</li>
  <li>Run your web browser (Firefox, Chrome, etc.) and enter the following path to the address bar: localhost/phpmyadmin</li>
  <li>In the panel on the left click 'New' to create a new database</li>
  <li>As a name of the DB write 'todoUkasz1' and select 'utf8_polish_ci' from the list. Accept it</li>
  <li>Select 'todoUkasz1' database on the left and click 'Import' tab on the top. Choose the file 'todoukasz1.sql' based in X/DB ('X' is your new directory in 'htdocs'). Make sure if the coding type below is set to 'utf-8'. Accept it downsite</li>
  <li>Done! Now you can run your App. To do so, open your browser and write 'localhost/X' in the address bar.</li>
</ol>

## Screenshots
![todoview](https://user-images.githubusercontent.com/46789003/146185079-f8d5a623-66fb-4e74-9a56-5f9bd0ca2ee8.PNG)
## Further development
To improve the app every single events could have a progress bar. It can be a graphical presentation of advancement status.
