import React from "react";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            margin: "40px 0 20px 0"
        },
        input: {
            width: "100%"
        },
        form: {
            margin: "10px, 0, 10px, 0",
        },
        buttons: {
            margin: "10px",
        }
    })
);

// form to type search term
export default function SearchForm(props) {

    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <form className={classes.form} onSubmit={props.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Search Books
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <TextField className={classes.input} id="standard-search" label="search" type="search" name="search" variant="outlined" onChange={props.handleInputChange} />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Button className={classes.buttons} variant="contained" color="secondary" type="submit">Search</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )

}
