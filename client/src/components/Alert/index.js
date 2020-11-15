import React, { useState, useEffect } from "react";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import socket from '../../utils/socket';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            marginRight: "30px"
        },
        msg: {
            color: "white",
        }
    })
);

// Alert for Socket.io messages when books are saved
export default function Alert() {

    const classes = useStyles();

    const [response, setResponse] = useState("");

    useEffect(() => {
        socket.on("broadcast", data => {
            setResponse(data);
        });
    }, []);

    return (

        <Container maxWidth="xs" className={classes.root}>
            <div className={classes.msg}>
                <Typography component="p">{response}</Typography>
            </div>
        </Container>

    )
}