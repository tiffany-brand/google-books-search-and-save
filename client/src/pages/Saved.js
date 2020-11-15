import React, { useState, useEffect } from "react";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import BookResults from '../components/BookResults';
import API from "../utils/API";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            margin: "20px 0 20px 0"
        },
        title: {
            margin: "40px 20px 40px 20px",
        },
        buttons: {
            margin: "10px",
        }
    })
);

export default function Saved() {

    const classes = useStyles();

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
            <Container className={classes.root}>
                <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                    Saved Books
                </Typography>
                <BookResults bookResults={savedBooks} deleteBook={deleteBook} page="saved" />
            </Container>
        </section>

    )

}