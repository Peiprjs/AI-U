import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

import Bike1 from '../img/bmw.png'
import Bike2 from '../img/custom.png'
import Bike3 from '../img/peugeot.png'
import Bike4 from '../img/suzuki.png'
import Bike5 from '../img/yamaha.png'



function MenuMotorbike({setbikechild}){
    const [anchorEl, setAnchorEl] = useState(null);
    const [open,setOpen] = useState(true)
    
    
    const styles = {
        ImageContainer:{
            width: "100%",
            height: "100%",
        },
    }

    const handleClose = (event) => {
        const model = event.currentTarget.dataset.id
        console.log(model)
        setbikechild(model)
        setOpen(false)
    };

    

    return(
    
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
          >

               <MenuItem onClick={handleClose} data-id={0}>
               <Grid container>
                        <Grid item>
                        <img src={Bike1} alt='' style={styles.ImageContainer} />
                
                        </Grid>
                        <Grid item>
                            Price 10 k€, Power 80KW                            
                        </Grid>
                    </Grid>
                </MenuItem>
                <MenuItem onClick={handleClose} data-id={1} >
                <div>
                    <Grid container>
                        <Grid item>
                        <img src={Bike2} alt='' style={styles.ImageContainer} data-id={1}/>
                
                        </Grid>
                        <Grid item>
                            Price 10 k€, Power 80KW                            
                        </Grid>
                    </Grid>

                </div>
                </MenuItem>
                <MenuItem onClick={handleClose} data-id={2} >
                <Grid container>
                        <Grid item>
                        <img src={Bike3} alt='' style={styles.ImageContainer} data-id={2}/>
                
                        </Grid>
                        <Grid item>
                            Price 10 k€, Power 80KW                            
                        </Grid>
                    </Grid>
                </MenuItem>
                <MenuItem onClick={handleClose} data-id={3}>
                <Grid container>
                        <Grid item>
                        <img src={Bike4} alt='' style={styles.ImageContainer} data-id={3}/>
                
                        </Grid>
                        <Grid item>
                            Price 10 k€, Power 80KW                            
                        </Grid>
                    </Grid>
                </MenuItem>
                <MenuItem onClick={handleClose} data-id={4}>
                <Grid container>
                        <Grid item>
                        <img src={Bike5} alt='' style={styles.ImageContainer} data-id={4}/>
                
                        </Grid>
                        <Grid item>
                            Price 10 k€, Power 80KW                            
                        </Grid>
                    </Grid>
                </MenuItem>
    
      </Menu>

    )
}   
export default MenuMotorbike