## Record Capstone ReadMe
# Steps to Test
  1. click on the `code` button at the top of the repository
  2. make sure `SSH` is selected as the proper key, copy the link and run `git clone [the link copied]` in your terminal
  3. next cd into the proper directory by running `cd record-factory-capstone`
  4. run `npm install` in your terminal
  5. and then `npm start` to deploy the website onto the browser
  6. the browser should 
# Project Goals
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
