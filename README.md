# React Google Books Search and Save

[![License: MIT](https://img.shields.io/github/license/tiffany-brand/google-books-search-and-save?style=plastic)](./LICENSE)

## Table of Contents

* [Description](#description)
* [Deployed Link](#deployed-link)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Questions](#questions)

## Description
This application allows a user to search for books through the Google Books API. There are two views, served by React Router - Search and Saved Books.  On the search page, users can type in a search term. Search results are rendered in a list of books containing the title, author(s), a description, and book cover image. Users can view a book, which takes the user to the Google Books information page. Users can also save a book - book informaton will be stored in the MongoDB database. The saved books page renders a list of books that have been saved. Saved books can be viewed or deleted from the database.

The application also implements Socket.io messaging to alert users when a book has been saved. When one user saves a book, all current users receive a message in the Navbar with the book title and a message that the book has been saved.

### User Story

AS An avid reader

I WANT to be able to search for and save books

SO THAT I can find new and interesting books to read



## Deployed Link

[Google Books Search and Save](https://gb-search-n-save.herokuapp.com/)

## Screenshots

![search-books](https://user-images.githubusercontent.com/16748389/99197323-caa32d00-275f-11eb-86a1-968332ccf356.JPG)
![saved-books](https://user-images.githubusercontent.com/16748389/99197324-cb3bc380-275f-11eb-9bbb-055a2c65c048.JPG)


## Technologies

* [React.js](https://reactjs.org/)
* [Create React App](https://github.com/facebook/create-react-app)
* [React Router](https://reactrouter.com/)
* [Socket.io](https://socket.io/)
* [Material UI](https://material-ui.com/)
* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [Heroku](https://heroku.com)



## Installation

To install dependencies, run the following:

`
npm i
`

To run it locally, make sure that the MongoDB server is running on your machine.

## Usage


`
npm start
`

## License

This repository is licensed under the [MIT license](./LICENSE).

## Questions

Questions about this repository? Please contact me at [tiffanylbrand@outlook.com](mailto:tiffanylbrand@outlook.com). View more of my work in GitHub at [tiffany-brand](https://github.com/tiffany-brand) 