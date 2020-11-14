import React, { useState, useEffect } from "react";
import Container from '@material-ui/core/Container';
import SearchForm from '../components/SearchForm';
import BookResults from '../components/BookResults';
import API from "../utils/API";
import parseBooks from "../utils/parseBooks";

export default function Search() {

    const [bookResults, setBookResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState("Apple");

    // Load all books and store them with setBooks
    // useEffect(() => {
    //     searchBooks()
    // }, [])


    // Searches Google books and sets the response to bookResults
    function searchBooks() {
        API.searchGoogleBooks(searchTerm)
            .then(res => {

                console.log(res.data.items)
                setBookResults(parseBooks(res.data.items))
            })
            .catch(err => console.log(err));
    };

    // Saved a book to the database
    function saveBook(book) {
        API.saveBook(book)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    // Handles updating component state when the user types into the input field
    const handleInputChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        searchBooks(searchTerm.split(" ").join("+"))
    };




    return (

        <Container>
            <SearchForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            <BookResults bookResults={bookResults} saveBook={saveBook} page="search" />
        </Container>

    )

}