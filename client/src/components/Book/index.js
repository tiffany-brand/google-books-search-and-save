import React from "react";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            margin: "20px",
            border: "1px solid gray",
            padding: "20px"


        },
        buttons: {
            margin: "10px"
        }
    })
);

export default function Book(props) {

    const classes = useStyles();

    const { title, authors, description, image, link } = props.bookInfo;

    return (
        <Container className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textPrimary" component="p" paragraph>
                        {authors.join(", ")}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <img src={image} />
                </Grid>
                <Grid item xs={12} sm={9}>

                    <Typography variant="body2" color="textSecondary" component="p" paragraph>
                        {description}
                    </Typography>
                    <Button className={classes.buttons} href={link} target="_blank" variant="contained" color="primary">View</Button>
                    {props.page === "search" ? <Button className={classes.buttons} variant="contained" color="default">Save</Button> : <Button className={classes.buttons} variant="contained" color="secondary">Delete</Button>}

                </Grid>
            </Grid>
        </Container>


    )

}
