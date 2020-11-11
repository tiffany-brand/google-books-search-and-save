import React from "react";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import heroImg from '../../assets/images/books-bg.jpg'



const useStyles = makeStyles((theme) =>
    createStyles({
        hero: {
            height: 400,
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover"
        },
        title: {
            paddingTop: 50,
            color: "#FFF",
            textAlign: "right",
            textShadow: "2px 2px #000"
        }
    })
);

// Hero image and page title
export default function Hero() {

    const classes = useStyles();

    return (
        <section className={classes.hero}>
            <Container>
                <div className={classes.title}>
                    <Typography variant="h2" component="h1">Google Books Search</Typography>
                    <Typography component="h2" variant="h5">Search for and Save Books of Interest</Typography>
                </div>
            </Container>
        </section>
    )
}