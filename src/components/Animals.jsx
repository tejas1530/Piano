import React, {useState} from 'react'
import {Button,Card,CardContent,Grid} from "@mui/material"
 export const Animals=()=>{
            const[name,setName]=useState("")
    return(
        <React.Fragment>
            <Grid container spacing={4} align="center">
                <Grid item xs={2} ></Grid>
                <Grid item xs={8} >
                    <Card >
                        <CardContent>
                            <img src={`Wilanimal/${name}.jpg`} style={{width:600,height:300}} alt="" />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2} ></Grid>
                <Grid item xs={1} ></Grid>
                <Grid item xs={2}>
                    <Button variant='contained' fullWidth onClick={()=>setName("Camel")}>Camel</Button>
                    
                </Grid>
                <Grid item xs={2}>
                    <Button variant='contained' fullWidth onClick={()=>setName("Chipmunk")}>Chipmunk</Button>
                    
                </Grid>
                <Grid item xs={2}>
                    <Button variant='contained' fullWidth onClick={()=>setName("Jiraaf")}>Giraffe</Button>
                    
                </Grid>
                <Grid item xs={2}>
                    <Button variant='contained' fullWidth onClick={()=>setName("Lion")}>lion</Button>
                    
                </Grid>
                <Grid item xs={2}>
                    <Button variant='contained' fullWidth onClick={()=>setName("Fox")}>fox</Button>
                    
                </Grid>
            </Grid>
        </React.Fragment>
    )
}