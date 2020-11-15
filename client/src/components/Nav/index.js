import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Alert from "../Alert";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: "100%",
            marginBottom: 0
        },
        title: {
            flexGrow: 1,
            color: "#fff",
            display: "none",
            [theme.breakpoints.up("sm")]: {
                display: "block"
            }
        },

        links: {
            textDecoration: "none",
            color: "#fff"
        },
        offset: theme.mixins.toolbar,

    })
);

// Header with Navigation
export default function Header() {

    const classes = useStyles();

    return (
        <header className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Link to='/' className={classes.links}> <Typography variant="h6" className={classes.title}>
                        Google Books
                    </Typography></Link>
                    <Alert />
                    <Link to='/'><Button className={classes.links}>Search</Button></Link>
                    <Link to='/saved'><Button className={classes.links}>Saved Books</Button></Link>
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </header>
    )
}