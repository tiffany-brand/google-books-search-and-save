import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';

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
        }

    })
);

// Header with Navigation
export default function Header() {

    const classes = useStyles();

    return (
        <header className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Google Books
                    </Typography>
                    <Button className={classes.links}>Search</Button>
                    <Button className={classes.links}>Save</Button>
                </Toolbar>
            </AppBar>
        </header>

    )

}