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

    const { bookResults } = props;

    return (
        <div>
            {bookResults.map(book => {
                return <Book key={book.id} bookInfo={book} page="search" />
            })}
        </div>


    )

}
