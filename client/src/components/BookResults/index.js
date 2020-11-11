import React from "react";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Book from '../Book';


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            maxWidth: 400,

        },
        media: {
            height: 400,
        }
    })
);

export default function SearchResults(props) {

    const { bookResults, saveBook, deleteBook, page } = props;

    return (
        <div>
            {bookResults.map(book => {
                return <Book key={book.id || book._id} bookInfo={book} page={page} saveBook={saveBook} deleteBook={deleteBook} />
            })}
        </div>


    )

}
