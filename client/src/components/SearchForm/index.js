import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function SearchForm(props) {

    return (
        <form onSubmit={props.handleSubmit}>
            <TextField id="standard-search" label="search" type="search" name="search" variant="outlined" onChange={props.handleInputChange} />
            <Button variant="contained" color="secondary" type="submit">Search</Button>
        </form>
    )

}
