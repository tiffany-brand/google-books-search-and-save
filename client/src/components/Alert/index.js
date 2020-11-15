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

// Hero image and page title
export default function Alert() {

    console.log("in alert component");
    const classes = useStyles();

    const [response, setResponse] = useState("");

    useEffect(() => {
        console.log("attempting to connect");
        console.log("ENV PORT" + process.env.REACT_APP_PORT)
        socket.on("broadcast", data => {
            setResponse(data);
        });
        console.log("after connect attempt");
    }, []);

    return (

        <Container maxWidth="xs" className={classes.root}>
            <div className={classes.msg}>
                <Typography component="p">{response}</Typography>
            </div>
        </Container>

    )
}