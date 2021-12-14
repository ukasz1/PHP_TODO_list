# TODO List App
TODO list is a standard app which allows user to remember future events by setting the date and an hour of the event. The details of the new event are provided with using a simple HTML form. The data is stored in the SQL database. The backend is implemented in PHP.

## Functions
The application allows you to create a new event, view a list of current events and delete a selected item.

Each item has its own deadline which need to be fixed at start. The app shows the remaining time for all items. The time is refreshed every second and shows the number of days, hours, minutes and seconds till the end. A user is not able to create an event for the past time.
