import React from "react";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


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

export default function Book(props) {
    const { title, authors, description, image, link } = props;

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                    <img src={image} />
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" paragraph>
                        {authors}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" paragraph>
                        {description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" paragraph>
                        {link}
                    </Typography>
                </Grid>
            </Grid>
        </Container>


    )

}
