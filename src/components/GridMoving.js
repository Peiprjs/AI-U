import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Background from '../img/background.webp'
import Bike from '../img/yamaha.png'

// this is only one of the grid that have the motorbike

function GridMoving(prop){
    const n_pos = 12
    let positions = [0,0,0,0,0,0,0,0,0,0,0,0]

    const styles = {
        paperContainer: {
            backgroundImage: `url(${Background})`,
            width: 150, height: 210,
            
        },
        ImageContainer:{
            width: "100%",
            height: "100%",
        },
    };

    const sx_ = {width: 832, height: 410};

    
    const getGridItem = positions.map(function(e,i){
        if(i === prop.pos){
            return(
            <Grid item sx={sx_} key={i}>
                <Paper style={styles.paperContainer}>
                <img src={Bike} alt='' style={styles.ImageContainer}/>
                </Paper>
            </Grid>
            )
        }else{
            return(
                <Grid item sx={sx_} key={i}>
                    <Paper style={styles.paperContainer}/>
                </Grid>
                )
        }
    })


    return(
        // spacing = distance between grid items
    <>
    <Grid container spacing={0} justifyContent="center">
    {getGridItem}
    </Grid>
    
    </>
    )

}

export default GridMoving;