import { useState, useEffect } from 'react';
import {
    Grid,
    Typography,
    Dialog,
    Box,
    Divider,
    Button,
    Link
} from '@mui/material';
import Pay from './Pay';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import IdentifyImage from 'assets/images/background/image 45.png';

const Receive = ({ open, onClose}) => {

    const [openPay, setOpenPay] = useState(false);

    const handleClose = () => {
        onClose(true);
    }

    const handleClickPay = () => {
        setOpenPay(true);
    };
  
    const handleClosePay = (value) => {
        setOpenPay(false);
    };
    
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
                        bgcolor: '#e6eefb'
                    }}
                >
                    <Typography component="div" sx={{
                        alignItems: 'center',
                        display: 'flex'
                    }}>
                        <ArrowBackIosNewIcon />
                        <Typography sx={{ pl: '0.5rem', fontSize: '1rem', display: 'inline-block' }}>Receive BTC</Typography>
                    </Typography>
                    <Typography component="div" sx={{ textAlign: 'center', pt: '3rem' }}>
                        <img src={IdentifyImage} />
                    </Typography>
                    <Typography component="div" sx={{ paddingTop: '1rem', textAlign: 'center' }}>
                        <Typography
                            sx={{
                                display: 'inline-block',
                                padding: '1rem',
                                backgroundColor: 'white',
                                fontSize: '.75rem',
                                color: 'black',
                                borderRadius: '1rem'
                            }}
                        >1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2</Typography>
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: 'center',
                            padding: '1rem',
                            fontSize: '1rem',
                            color: 'black',
                            paddingLeft: '3.5rem',
                            paddingRight: '3.5rem',
                            paddingBottom: '2.5rem',
                            lineHeight: '1.5rem'
                        }}
                    >
                        Send only BTC to this address otherwise your funds will be completely lost
                    </Typography>
                    <Typography>
                        <Button 
                            onClick={handleClickPay}
                            sx={{ 
                                bgcolor: '#f2f0fd', 
                                p: '.875rem', 
                                color: '#7c66eb', 
                                fontSize: '1rem', 
                                width: '100%' 
                            }}
                        >Copy</Button>
                    </Typography>

                </Typography>

                <Pay 
                    open={openPay}
                    onClose={handleClosePay}
                />


            </Dialog>
        </>
    );
}

export default Receive;