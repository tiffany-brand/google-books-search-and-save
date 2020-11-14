import React from "react";
import Container from '@material-ui/core/Container';
import Book from '../Book';


export default function SearchResults(props) {

    const { bookResults, saveBook, deleteBook, page } = props;

    return (
        <Container>
            {bookResults.map(book => {
                return <Book key={book.id || book._id} bookInfo={book} page={page} saveBook={saveBook} deleteBook={deleteBook} />
            })}
        </Container>
    )
}
