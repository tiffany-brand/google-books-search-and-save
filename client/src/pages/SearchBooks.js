import React, { useState, useEffect } from "react";
import Container from '@material-ui/core/Container';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import API from "../utils/API";
import parseBooks from "../utils/parseBooks";

export default function SearchBooks() {

    const [bookResults, setBookResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState("Apple");

    // Load all books and store them with setBooks
    useEffect(() => {
        searchBooks()
    }, [])


    // Searches Google books and sets the response to bookResults
    function searchBooks() {
        API.searchGoogleBooks(searchTerm)
            .then(res => {

                console.log(res.data.items)
                setBookResults(parseBooks(res.data.items))
            })
            .catch(err => console.log(err));
    };

    // Handles updating component state when the user types into the input field
    const handleInputChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        searchBooks(searchTerm.split(" ").join("+"))
    };




    return (
        <section>
            <Container>
                <div>
                    <SearchForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
                    <SearchResults bookResults={bookResults} />
                </div>

            </Container>
        </section>
    )

}