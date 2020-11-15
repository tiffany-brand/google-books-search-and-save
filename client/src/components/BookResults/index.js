import React from "react";
import Container from '@material-ui/core/Container';
import Book from '../Book';

// map over search results to create Book components and display books found
export default function BookResults(props) {

    const { bookResults, saveBook, deleteBook, page } = props;

    return (
        <Container>
            {bookResults.map(book => {
                return <Book key={book.id || book._id} bookInfo={book} page={page} saveBook={saveBook} deleteBook={deleteBook} />
            })}
        </Container>
    )
}
