# JavaScript Interview Question FlashCards Using Express.js

### Description

This web application is designed to facilitate collaborative learning by allowing users to input and access a diverse collection of potential JavaScript interview questions. The intuitive toggle effect effortlessly toggles between hiding and showing answers, offering a seamless learning experience.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Visual](#visuals)
- [Technologies](#technologies-used)
- [Getting Started With Express JS](#getting-started-with-express-js)

## Features

- **Input Questions:** Submit your own JavaScript interview questions.
- **Toggle Effect:** Switch between viewing and hiding detailed answers for each question.
- **Express.js Backend:** Powered by Express.js, the server side functionality ensures robust performance and efficient communication between users and the server.

## Installation

- `git clone` this repository
- `npm i` installs all necessary dependencies
- `npm i --save-dev nodemon` installs nodemone as a dev dependency for ease of testing and updating
- `npm run watch` starts the server at [http://localhost:3001](http://localhost:3001)

## Visuals

If you don't wish to install the application but are curious about how it works: [CLICK HERE](https://watch.screencastify.com/v/yML6BWAiUEQyg7v2cU5J)!!

## Technologies Used

- HTML5
- CSS3
- ES6 (JS)
- [Express.js](#getting-started-with-express-js)
- 
## Getting Started With Express JS

General instructions for anyone wanting to add Express.js to their own project:

- Ensure you have **[node](https://nodejs.org/en)** installed
- Create a package.json using `npm init -y`
- Add a `server.js` file for your routes
- Install express library `npm i express`

Optional but helpful:

- Install nodemon `npm i --save-dev nodemon`
  - `nodemon` allows you to view your code updates in the browser in real time
  - without `nodemon` you must:
    - manually refresh your browser to view client-side code changes
    - restart your server to view server-side code changes
- Add `"watch": "nodemon server.js"` to `"scripts"` in package.json.
  - Use the command `npm run watch` where `watch` matches your command in the `package.json` file.
    - Ex: `"myApp":"nodemon server.js"` --> `npm run myApp`

Enhance your JavaScript knowledge and prepare for interviews with this interactive and user-friendly web app. Happy coding!
