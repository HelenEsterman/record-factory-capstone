# Record Capstone ReadMe
## Steps to Test
  1. click on the `code` button at the top of the repository
  2. make sure `SSH` is selected as the proper key, copy the link and run `git clone [the link copied]` in your terminal
  3. next cd into the proper directory by running `cd record-factory-capstone`
  4. run `npm install` in your terminal
  5. and then `npm start` to deploy the website onto the browser
  6. next follow the link to this repository https://github.com/HelenEsterman/record-capstone-api
  7. click on the `code` button at the top of this repository
  8. make sure `SSH` is selected as the proper key, copy the link and run `git clone [the link copied]` in your terminal
  9. next cd into the proper directory by running `cd record-capstone-api`
  10. run `json-server database.json -p 8088 -w!` in your terminal to start the json server
  11. log in with the email address artlover@creativity.com to see an example of a user with multiple albums in their record archive or register with your own name and email address by selecting the "Not a Member Yet?" button
  12. once logged in, begin creating your album!
## Website Functionality
  - given the user wants to create an album, when they click on the "create album" nav bar link, then the user will be taken to a screen that shows the option of an EP or an LP album
  - given the user wants to create an album with only 3-6 songs, when they click the EP album button, then the browser will take them to a form where they can put in the information they want on their album and have the ability to create no less than 3 songs and no more than 6
  - given the user wants to create an album with 7-15 songs, when they click the LP album button, then the browser will take them to a form where they can put in the information they want on their album and have the ability to create no less than 7 songs and no more than 15
  - given the user changes their mind an wants to create an EP album instead of an LP album and vice versa, when the user clicks the "cancel" button, then the user will be taken back to the page with the options of LP and EP albums
  - given the user tries to save an EP album that has less than 3 songs or an LP album that has less than 7 songs, or given the user tries to save an album by leaving one or more fields blank, when the user attempts to click the button "create album", then a window alert will pop up informing the user that they are missing an input field or they don't have enough songs
  - given the user tries to add more than 6 songs on an EP album and more then 15 songs on an LP, when the user attempts to add that extra song by clicking the button with a plus sign and a music note, a window alert will appear informing the user that they have too many songs and will need to delete one before continuing
  - given the user wants to delete a song they don't like, when the user clicks the delete button next to the song, then the song will be removed from the song list
  - given the user wants to save their album, when they click the "create album" button, then their album will be saved in the database and the browser will take the user to the "record archive" view which has a collection of every album this specific user has created including the album that was just created
  - given the user wants to view their record archive page withou creating a new album, when the user clicks the "record archive" nav bar link, then the browser will take them to a page where they can see all the albums they've created along with two buttons labled EP and LP
  - given the user wants to only see LP albums, when the user clicks on the "LP" album button, then the albums will be filtered down by only the albums labeled LP (same goes for EP albums)
  - given the user wants to see the details of a specific album, when a user clicks on an album cover image, then the browser will take them to a new page where they can view how the details of the album actually look displayed on the album cover image
  - given the user is on the album details page and wants to go back to the record archive view, when they click the "back to archive" button, then the user will be taken back to the full archive
  - given the user wants to delete their album, when the user goes to the "album details" page and clicks the "delete" button, then the album will be deleted from the database and the browser will rerender the "record archive view"
  - given the user wants to make changes to their album, when the user clicks the "edit" button on the "album details" page, then the browser will take the user to an "edit album" form, this page has basically the same functionality as the "create album" page (for ex. user cannot create albums that don't fit the song requirements (EP: 3-6, LP: 7-15), user cannot create album with blank fields, and user has ability to add and delete songs)
  - given the user wants to save their edited album, when the user clicks "save album", then the album will be updated in the database and the browser will render the "album details" page again for that specific album showing the updated details changed
  - given the user is done using the application, when they click the "logout" nav bar link, then the user will be taken back to the login page
## Project Goals
  - Build and application where a user can create made up albums for fun and have full creative freedom
  - Create Login page where users have to authenticate before entering the website
  - Authentication page will ensure that users only have access to their specific albums and therefore can only make changes with the data associated with them
  - Create register page for non members to sign up and use website
  - Create Navigation bar that allows users to navigate between different views of the website (creating an album, their record archive, logging out)
  - Create welcome page for users to see upon logging in to website
  - Give users the option between creating an EP album of an LP album
  - Depending on users' choice of album, EP albums can have the option of 3 - 6 songs and LP albums have the option of 7-15 songs
  - User has ability to cancel album while in the middle of creating it
  - User had ability to delete songs while in the middle of adding them to their album
  - User must create name of album, provide an image URL for the album cover, provide their artist name, pick a genre for the album, and name any number of songs as long as they fall within the constraints       depending on album (EP albums 3-6 and LP albums 7-15)
  - If user tries to create an album and leaves even one input field empty, a window alert will appear informing the user that they cannot move any further without completing the form
  - The same error will show up if the user tries to create an album with not enough songs (less than 3 for EP albums and less than 7 for LP albums)
  - A different error will show up if the user tries to add more than the allowed number of songs per album (greater than 6 for EP albums and greater than 15 for LP albums), this error will inform the user to delete a song if they want to add one, because they are currently trying to add too many
  - The user's "record archive" view will be specific to each user and only contain the albums that they have created
  - The record archive view will display the album covers in a grid with the album name listed below the image
  - In the record archive view there will two buttons that you can click on where one shows only the EP albums in the record archive and the other shows only the LP albums
  - When the user clicks on an album cover image it will take them to that specifc album's details page
  - The details page will show the album cover image with all the details of their album (album name, artist name, song names, genre) displayed in a text overlay over the album cover image
  - The details page will also have three buttons, "back" (takes you back to the record archive), "delete" (has the ability to delete the selected album), and "edit" (will take user to a page that looks very similar to the creating album form and has basically the same functionality, only this page has the current values of the album details filling in the input fields)
