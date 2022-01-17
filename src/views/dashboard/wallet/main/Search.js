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

import CloseIcon from '@mui/icons-material/Close';
import EtherIcon from 'assets/images/icons/Eth.svg';
import Bitcoin from 'assets/images/icons/Bitcoin.svg';
import XPRcoin from 'assets/images/icons/XPR.svg';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Search = ({open, onClose}) => {

    const customization = useSelector((state) => state.customization);
    const tokens = [
        {coin: 'Bitcoin',img: Bitcoin,unit: 'BTS', bg: 'rgba(255, 210, 51, 0.15)', p: '13px'},
        {coin: 'Ethereum',img: EtherIcon,unit: 'ETH', bg: '#7F6EE9', p: '13px'},
        {coin: 'XPR',img: XPRcoin,unit: 'BNB', bg: '#25292C', p: '13px'},
        {coin: 'Bitcoin',img: Bitcoin ,unit: 'BTS', bg: 'rgba(255, 210, 51, 0.15)', p: '13px'},
        {coin: 'Ethereum',img: EtherIcon,unit: 'ETH', bg: '#7F6EE9', p: '13px'},
        {coin: 'XPR',img: XPRcoin,unit: 'BNB', bg: '#25292C', p: '13px'},
        {coin: 'Bitcoin',img: Bitcoin ,unit: 'BTS', bg: 'rgba(255, 210, 51, 0.15)', p: '13px'},
        {coin: 'Ethereum',img: EtherIcon,unit: 'ETH', bg: '#7F6EE9', p: '13px'},
    ]
    let index = 1

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
                                sx={{ borderRadius: '8px', ml: 1, flex: 1, "::placeholder" : {
                                    fontSize: '16px'
                                } }}
                                placeholder="Search"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Paper>
                    </Box>
                    <Box sx={{ px: '2rem', pb: '3rem', flexDirection: 'column', gap: '.5rem', display: 'flex' }}>
                        { tokens.map ( (e) => 
                            <Box key={index ++}
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
                                            <Avatar aria-label="recipe" src={e.img} sx={{ p: '8px', px: e.p, bgcolor: e.bg }} />
                                        }
                                        title={<Typography variant="h4" sx={{ bgcolor: 'transparent', fontSize: '16px', fontWeight: 600 }}>{e.coin}</Typography>}
                                    />
                                </Typography>
                            </Box>
                        )}
                        <Typography component="div">
                            <Button 
                                variant="contained" 
                                sx={{
                                    mt: 2, 
                                    width: '100%', 
                                    bgcolor: '#7C66EB',
                                    borderRadius: '4px',
                                    paddingTop: '12.5px', 
                                    paddingBottom: '12.5px', 
                                    color: '#FFFFFF', 
                                    fontSize: '16px',  
                                }}
                            >
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