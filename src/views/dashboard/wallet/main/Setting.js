import { useState, useEffect } from 'react';
import {
    Grid,
    Typography,
    Dialog,
    Box,
    Divider,
    Button,
    Link,
    CardHeader,
    IconButton
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IdentifyImage from 'assets/images/background/image 45.png';


const Setting = ({ open, onClose}) => {
    const handleClose = () => {
        onClose(true);
    }
    
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="md"
            >
                <Typography 
                    component="div"
                    sx={{
                        bgcolor: 'white',
                        p: '2rem',
                        pt: '3rem',
                        width: '500px',
                    }}
                >
                    <Typography variant="h2">Wallet Settings</Typography>
                    <Typography component="div" sx={{ pt: '2rem' }}>
                        <Typography sx={{ color: '#98a1aa', pb: '.5rem' }}>Preferences</Typography>
                        <Typography 
                            component="div" 
                            sx={{ 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center', 
                                bgcolor: '#F2F6FA',
                                p: '1rem', 
                                borderRadius: '.75rem',
                            }}
                        >
                            <Typography variant="h4" sx={{ display: 'inline-block' }}>Preffered currency</Typography>
                            <Typography sx={{ display: 'inline-block' }}>
                                <IconButton sx={{ bgcolor: 'white' }}>
                                    <ArrowForwardIosIcon sx={{ fontSize: '1rem' }} />
                                </IconButton>
                            </Typography>
                        </Typography>
                    </Typography>
                    <Typography component="div" sx={{ pt: '1.5rem' }}>
                        <Typography sx={{ color: '#98a1aa', pb: '.5rem' }}>Security</Typography>
                        <Typography
                            component="div                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          " 
                            sx={{ 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center', 
                                bgcolor: '#F2F6FA',
                                p: '1rem', 
                                borderRadius: '.75rem',
                            }}
                        >
                            <Typography variant="h4" sx={{ display: 'inline-block' }}>Wallet Lock</Typography>
                            <Typography sx={{ display: 'inline-block' }}>
                                <IconButton>
                                    <ArrowForwardIosIcon />
                                </IconButton>
                            </Typography>
                        </Typography>
                        <Typography
                            component="div" 
                            sx={{ 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center', 
                                bgcolor: '#F2F6FA',
                                p: '1rem', 
                                borderRadius: '.75rem',
                                mt: '.5rem'
                            }}
                        >
                            <Typography variant="h4" sx={{ display: 'inline-block' }}>Auto change address</Typography>
                            <Typography sx={{ display: 'inline-block' }}>
                                <IconButton>
                                    <ArrowForwardIosIcon />
                                </IconButton>
                            </Typography>
                        </Typography>
                        <Typography sx={{ pt: '.5rem', fontSize: '.75rem' }}>Only works for Bitcoin and forks</Typography>
                    </Typography>
                </Typography>
            </Dialog>
        </>
    );
}

export default Setting;