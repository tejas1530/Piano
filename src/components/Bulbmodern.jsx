import React,{useState} from 'react'
import {Button,Grid,Card} from "@mui/material" 
 export const Bulbmodern=()=>{
            const[name,setName]=useState("Black")
    return(
        <React.Fragment>
            <Grid container spacing={4} align="center">
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Card sx={{width:200,height:200,borderRadius:50,bgcolor:name}} ></Card>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={2}>
                    <Button variant="contained" fullWidth onClick={()=>setName("green")}>Green</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" fullWidth onClick={()=>setName("yellow")}>Yellow</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" fullWidth onClick={()=>setName("blue")}>Blue</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" fullWidth onClick={()=>setName("orange")}>Orange</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" fullWidth onClick={()=>setName("gray")}>Gray</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" fullWidth onClick={ ()=>setName("brown")}>Brown</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}