import React,{useState} from "react"
import { TextField, Button, Grid } from "@mui/material"
export const Addcolors = () => {
    const[name,setName]=useState("?")
    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h1>{name}</h1>

                </Grid>
                <Grid item xs={8}>
                    <TextField variant="outlined" label="Enter Color" fullWidth ></TextField>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" fullWidth sx={{height:55}}>ADD</Button>

                </Grid>
                <Grid item xs={12}>

                </Grid>
                <Grid item xs={3}>
                    <h2>{name}</h2>
                </Grid>
                <Grid item xs={3}>
                    <h3>{name}</h3>
                </Grid>
                <Grid item xs={3}>
                    <h4>{name}</h4>
                </Grid>
                <Grid item xs={3}>
                    <h5>{name}</h5>
                </Grid>

            </Grid>
        </React.Fragment>
    )
}