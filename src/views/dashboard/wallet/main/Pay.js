import { useState, useEffect } from 'react';
import {
    Grid,
    Typography,
    Dialog,
    Box,
    Divider,
    Button,
    Link,
    CardHeader
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import IdentifyImage from 'assets/images/background/image 45.png';

const Pay = ({ open, onClose}) => {
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
                        bgcolor: '#f8fafc',
                        p: '2rem',
                        pt: '1.5rem',
                        width: '500px',
                    }}
                >
                    <Typography component="div" sx={{
                        alignItems: 'center',
                        display: 'flex'
                    }}>
                        <ArrowBackIosNewIcon />
                    </Typography>
                    <Typography component="div" sx={{ textAlign: 'center', pt: '5rem' }}>
                        <Typography component="span" variant="h1" sx={{ fontSize: '3rem', color: '#949daa' }}>$</Typography>
                        <Typography component="span" variant="h1" sx={{ fontSize: '3rem', color: 'black' }}>150</Typography>
                        <Typography component="span" variant="h1" sx={{ fontSize: '3rem', color: '#949daa' }}>|</Typography>
                    </Typography>
                    <Typography variant="h4" sx={{ textAlign: 'center', pt: '0.5rem', pb: '4rem' }}>
                        ~0.00324 BTC
                    </Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            p: '1rem',
                            py: '0.5rem',
                            backgroundColor: '#e9e9fa',
                            borderRadius: '0.25rem',
                            mb: '1rem'
                        }}
                    >
                        <Typography component="div">
                            <Typography variant="h4">MoonPay</Typography>
                            <Typography sx={{ color: '#485068' }}>Third Party Provider</Typography>
                        </Typography>
                        <Typography variant="h4">Available</Typography>
                    </Typography>
                    <Typography>
                        <Button sx={{ bgcolor: '#7C66EB', p: '.875rem', color: 'white', fontSize: '1rem', width: '100%' }}>Next</Button>
                    </Typography>

                </Typography>



            </Dialog>
        </>
    );
}

export default Pay;