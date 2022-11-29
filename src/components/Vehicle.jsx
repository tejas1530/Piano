import React,{useState} from 'react'
import {Button,Card,CardContent,Grid} from "@mui/material" 
 export const Vehicle =()=>{
    const[name,setName]=useState("")
    return(
        <React.Fragment>
        <Grid container spacing={4} align="center" >
            <Grid item xs={2} ></Grid>
            <Grid item xs={8} >
                <Card>
                    <CardContent>
                        <img src={`Vehicle/${name}.jpg`} style={{width:600,height:300}} alt="" />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={2} ></Grid>
            <Grid item xs={1} ></Grid>
            <Grid item xs={2} >
                <Button variant='contained' fullWidth onClick={()=>setName("Airplane")}>Airplane</Button>
            </Grid>
            <Grid item xs={2} >
                <Button variant='contained' fullWidth onClick={()=>setName("Bike")}>Bike</Button>
            </Grid>
            
            <Grid item xs={2} >
                <Button variant='contained' fullWidth onClick={()=>setName("Taxi")}>Taxi</Button>
            </Grid>
            <Grid item xs={2} >
                <Button variant='contained' fullWidth onClick={()=>setName("Train")}>Train</Button>
            </Grid>
            <Grid item xs={2} >
                <Button variant='contained' fullWidth onClick={()=>setName("Van")}>Van</Button>
            </Grid>

            
        </Grid>
        </React.Fragment>
    )
}