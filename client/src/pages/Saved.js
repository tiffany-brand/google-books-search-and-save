import React, { useState, useEffect } from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import BookResults from '../components/BookResults';
import API from "../utils/API";

export default function Search() {

    const [savedBooks, setSavedBooks] = useState([]);


    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])


    // Loads all books and sets them to savedBooks
    function loadBooks() {
        API.getBooks()
            .then(res =>
                setSavedBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    return (
        <section>
            <Container>
                <div>
                    <Typography>Saved Books</Typography>
                    <BookResults bookResults={savedBooks} deleteBook={deleteBook} page="saved" />
                </div>

            </Container>
        </section>
    )

}