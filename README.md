# ScholarSync

## Hayley Pyle

This is an app that acts as a question forum for teachers. 
- This app uses  .html, .css, .js, react, mysql, and node.js.
- The user can register an account, and the backend will check if the username is taken, if the confirm password matches other password, and if the password meets the requirements. Argon2 encrypts the password before storing it in the database.
- The user can login with their username and password, and will recieve an error message if the username or password is wrong. 
- Upon successful login the user can use the left navigation bar to select a topic to browse, and in the topic they can create a new question, view already existing questions, and select a question to view answers to. 
- When the user selects a question to view they can answer the question themselves and view the existing answers to the question. 
- The user can logout with a button in the top navigation bar. 
- Future Improvements to this app would be:
    - Ability to change password.
    - Ability to delete account.
    - Ability to edit your own questions and answers shortly after posting them. 
    - Ability to search questions and answers.

# How to use
- Register an account and log in to it on the website https://hayleypyle-scholarsync.netlify.app/. Create and answer questions as you like!
or
- Download zip file and use terminal to cd to the backend directory
    - npm install mysql express cors nodemon axios argon2
    - npm start
- cd to scholar-sync directory
    - npm install react-bootstrap bootstrap
    - npm install react-bootstrap-icons —save
    - npm run dev





