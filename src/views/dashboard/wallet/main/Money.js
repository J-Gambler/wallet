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
import * as React from 'react';
import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';

const blue = {
    200: '#80BFFF',
    400: '#3399FF',
};

const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
};

const StyledInputElement = styled('input')(
    ({ theme }) => `
        width: 100%;
        font-size: 0.875rem;
        font-family: IBM Plex Sans, sans-serif;
        font-weight: 400;
        line-height: 1.5;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: white;
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
        border-radius: 4px;
        padding: 12px 12px;
        transition: all 150ms ease;

        &:hover {
            background: white;
            border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[400]};
        }

        &:focus {
            outline: 2px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
        }
    `,
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
  );
});

const Money = ({ open, onClose}) => {
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
                        pt: '5rem',
                        pb: '3rem',
                        width: '500px',
                    }}
                >
                    <Typography variant="h1" sx={{ textAlign: 'center', pb: '3rem' }}>Set a password to unlock</Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            gap: '0.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            pb: '1.5rem'
                        }}
                    >
                        <CustomInput aria-label="Demo input" placeholder="Password" />
                        <CustomInput aria-label="Demo input" placeholder="Confirm password" />
                    </Typography>
                    <Typography>
                        <Button sx={{ bgcolor: '#7C66EB', p: '.875rem', color: 'white', fontSize: '1rem', width: '100%' }}>Done</Button>
                    </Typography>
                </Typography>
            </Dialog>
        </>
    );
}

export default Money;