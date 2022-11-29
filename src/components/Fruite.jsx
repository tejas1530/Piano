import React,{useState} from 'react'
import{Button,Card,CardContent,Grid} from "@mui/material"
export const Fruite=()=>{
    const [name,setName]=useState("")
    return(
        <React.Fragment>
            <Grid container spacing={4} align="center">
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <Card>
                        <CardContent>
                            <img src={`Fruite/${name}.jpg`}  style={{width:600,height:300}}alt="" />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={2}>
                    <Button variant='contained' fullWidth onClick={()=>setName("Apple")} >Apple</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant='contained' fullWidth onClick={()=>setName("Banana")} >Banana</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant='contained' fullWidth onClick={()=>setName("Kivi")} >Kivi</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant='contained' fullWidth onClick={()=>setName("Mango")} >Mango</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant='contained' fullWidth onClick={()=>setName("Orange")} >Orange</Button>
                </Grid>

            </Grid>
        </React.Fragment>
    )
}