import React,{useState} from 'react';
import { Button ,Grid,Card,CardContent} from '@mui/material';

export const Piano=()=>{
    const[name,setName]=useState("");
    return(
        <React.Fragment>
            <Grid container className='justify-center'><Card item><CardContent><img src="./Tx/tt.jpg" className='max-w-4xl ' alt="" /></CardContent></Card> </Grid>
            <Grid container  className='justify-center ' >

                <Grid item >
                    <Button variant='contained' className="h-64 w-20 bg-black" onClick={()=>setName("SA")} >SA</Button>
                </Grid>
                <Grid item >
                    <Button variant='contained' className='h-64 w-20 bg-black' onClick={()=>setName("RE")}>RE</Button>
                </Grid>
                <Grid item >
                    <Button variant='contained' className='h-64 w-20 bg-black' onClick={()=>setName("GA")}>GA</Button>
                </Grid>
                <Grid item >
                    <Button variant='contained'className='h-64 w-20 bg-black' onClick={()=>setName("MA")}>MA</Button>
                </Grid>
                <Grid item >
                    <Button variant='contained'className='h-64 w-20 bg-black' onClick={()=>setName("PA")}>PA</Button>
                </Grid>
                <Grid item >
                    <Button variant='contained' className='h-64 w-20 bg-black' onClick={()=>setName("DHA")}>DHA</Button>
                </Grid>
                <Grid item >
                    <Button variant='contained'className='h-64 w-20 bg-black' onClick={()=>setName("NI")}>NI</Button>
                </Grid>
            <Grid container><Card  item><CardContent><audio src={`Saregama/${name}.mp3`}></audio></CardContent></Card></Grid>
            </Grid>
        </React.Fragment>
    )
}