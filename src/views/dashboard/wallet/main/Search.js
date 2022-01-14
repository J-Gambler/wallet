import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import {
    Typography,
    CardHeader,
    Dialog,
    Avatar,
    Box, 
    Button
} from '@mui/material';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

import Bitcoin from 'assets/images/icons/bitcoin.png';
import Ethereum from 'assets/images/icons/eth.png';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Search = ({open, onClose}) => {

    const customization = useSelector((state) => state.customization);
    const list = [1,2,3,4,5,6,7,8]

    const handleClose = () => {
        onClose(true)
    }
    return (
        <>
            <Dialog 
                onClose={handleClose} 
                open={open}
            >
                <Typography component="div" sx={{ bgcolor: '#F8FAFC' }}>
                    <Box sx={{ p: '2rem', pt: '3rem', pb: '1rem', width: '500px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <ArrowBackIosNewIcon sx={{ cursor: 'pointer' }} />
                        <Paper
                            component="form"
                            sx={{ display: 'flex', alignItems: 'center', width: '100%', marginLeft: '1rem', bgcolor: '#EAEBF2' }}
                        >
                            <IconButton sx={{ p: '10px' }} aria-label="menu">
                                <SearchIcon />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Paper>
                    </Box>
                    <Box sx={{ px: '2rem', pb: '3rem', flexDirection: 'column', gap: '.5rem', display: 'flex' }}>
                        { list.map ( () => 
                            <Box 
                                sx={{ 
                                    display: 'flex', 
                                    flexDirection: 'row', 
                                    justifyContent: 'space-between', 
                                    bgcolor: 'white',
                                    borderRadius: `${customization.borderRadius}px`,
                                    border: 2,
                                    borderColor: 'white',
                                    '&:hover': {
                                        cursor: 'pointer',
                                        borderColor: '#7c66eb'
                                    }
                                }}
                            >
                                <Typography 
                                    component="div" 
                                    sx={{ 
                                        p: '.25rem',
                                        borderRadius: `0px ${customization.borderRadius}px ${customization.borderRadius}px 0px`,
                                    }}
                                >
                                    
                                    <CardHeader 
                                        sx={{ p: 0, '& .css-sgoict-MuiCardHeader-action': {m: 'auto'} }}
                                        avatar={
                                            <Avatar aria-label="recipe" src={Ethereum} />
                                        }
                                        title={<Typography variant="h4" sx={{ bgcolor: 'transparent' }}>Ethereum</Typography>}
                                    />
                                </Typography>
                            </Box>
                        )}
                        <Typography component="div">
                            <Button variant="contained" sx={{ width: '100%', bgcolor: '#7c66eb', py: 1, mt: 2 }}>
                                Done
                            </Button>
                        </Typography>
                    </Box>
                </Typography>
            </Dialog>
        </>
    );
}

export default Search;