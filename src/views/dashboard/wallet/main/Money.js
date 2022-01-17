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
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import IdentifyImage from 'assets/images/background/image 45.png';
import Setting from './Setting';


const Money = ({ open, onClose}) => {
    const [openSetting, setOpenSetting] = useState(false);

    const handleClose = () => {
        onClose(true);
    }

    const handleClickSetting = () => {
        setOpenSetting(true);
    };
  
    const handleCloseSetting = (value) => {
        setOpenSetting(false);
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
                        bgcolor: 'white',
                        p: '2rem',
                        pt: '2rem',
                        pb: '3rem',
                        width: '400px',
                    }}
                >
                    <Typography component="div" sx={{
                        alignItems: 'center',
                        display: 'flex'
                    }}>
                        <ArrowBackIosNewIcon />
                    </Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            pt: '2rem',
                            gap: '0.5rem',
                            pb: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Typography 
                            sx={{ 
                                bgcolor: '#F2F6FA',
                                p: '1rem',
                                pl: '2rem', 
                                borderRadius: '.75rem',
                            }}
                            variant="h4"
                        >
                            U.S. Dollar (USD)
                        </Typography>
                        <Typography 
                            sx={{ 
                                bgcolor: '#F2F6FA',
                                p: '1rem',
                                pl: '2rem', 
                                borderRadius: '.75rem',
                            }}
                            variant="h4"
                        >
                            Japanese Yen (JPY)
                        </Typography>
                        <Typography 
                            sx={{ 
                                bgcolor: '#F2F6FA',
                                p: '1rem',
                                pl: '2rem', 
                                borderRadius: '.75rem',
                            }}
                            variant="h4"
                        >
                            Euro (EUR)
                        </Typography>
                        <Typography 
                            sx={{ 
                                bgcolor: '#F2F6FA',
                                p: '1rem',
                                pl: '2rem', 
                                borderRadius: '.75rem',
                            }}
                            variant="h4"
                        >
                            Korean Won (KRW)
                        </Typography>
                    </Typography>
                    <Typography>
                        <Button onClick={handleClickSetting} sx={{ bgcolor: '#7C66EB', p: '.875rem', color: 'white', fontSize: '1rem', width: '100%' }}>Done</Button>
                    </Typography>
                </Typography>
            </Dialog>
            <Setting 
                open={openSetting}
                onClose={handleCloseSetting}
            />

        </>
    );
}

export default Money;