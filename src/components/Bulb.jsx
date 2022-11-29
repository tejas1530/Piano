import React,{useState} from 'react';
import {Button,Grid,Card} from "@mui/material"
 export const Bulb=()=>{
    const[name,setName]=useState("Black")
    return(
        <React.Fragment>
            <Grid container spacing={3} align="center">
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={4}>
                    <Card sx={{width:100,height:100,bgcolor:name,borderRadius:20}}></Card>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}>
                    <Button variant='contained' onClick={()=>setName("yellow")}>ON</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant='contained' onClick={()=>setName("black")}nClic>OFF</Button>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item sx={6}><h1>{name}</h1></Grid>
            </Grid>
        </React.Fragment>
    )
}