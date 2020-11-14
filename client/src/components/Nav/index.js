import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: "100%",
            marginBottom: 0
        },
        title: {
            flexGrow: 1,
            display: "none",
            [theme.breakpoints.up("sm")]: {
                display: "block"
            }
        },

        links: {
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
                    <Typography variant="h6" className={classes.title}>
                        Google Books
                    </Typography>
                    <Link to='/'><Button className={classes.links}>Search</Button></Link>
                    <Link to='/saved'><Button className={classes.links}>Saved Books</Button></Link>
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </header>

    )

}