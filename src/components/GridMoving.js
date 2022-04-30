import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Background from '../img/background.webp'
import Bike from '../img/yamaha.png'
import { styled } from '@material-ui/core/styles';
// this is only one of the grid that have the motorbike

function GridMoving(pos){
    
    let positions = Array(12)

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

    const getGridItem = positions.map(function(i){
        if(i==pos){
            return(
            <Grid item sx={sx_}>
                <Paper style={styles.paperContainer}>
                <img src={Bike} alt='' style={styles.ImageContainer}/>
                </Paper>
            </Grid>
            )
        }
        return(
        <Grid item sx={sx_} >
            <Paper style={styles.paperContainer}/>
        </Grid>
        )
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