import { useState, useEffect, forwardRef } from 'react';
import { Typography, Dialog, Grid, Box, Button, Divider, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
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
        padding: 16px 16px;
        background: #FFFFFF;
        border: 1px solid #E1E1FF;

        ::placeholder {
            font-size: 16px;
            line-height: 23px;
            color: #98A1AA;
        }

        &:hover {
            background: white;
            border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[400]};
        }

        &:focus {
            outline: 2px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
        }
    `,
);

const CustomInput = forwardRef(function CustomInput(props, ref) {
    return (
        <div style={{ 
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                fontSize: '16px',
                background: 'white',
                border: '1px solid #E1E1FF',
                borderRadius: '4px',
                transition: 'all 150ms ease',
            }}>
            <StyledInputElement {...props} ref={ref}/>
        </div>
    );
});

const CreateNFT = ({open, onClose, onStep}) => {
    const handleClose = () => {
        onClose(true);
    }

    const handleStep = () => {
        onStep(true);
        onClose(true);
    }
    
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="md"
            sx={{
                bgcolor: 'rgba(13, 15, 29, 0.7)',
                '& .MuiPaper-root': {
                    bgcolor: 'transparent !important',
                    boxShadow: 'none',
                    borderRadius: '0px'
                }
            }}
        >
            <Stack
                sx={{
                    background: '#FFFFFF',
                    borderRadius: '12px',
                    width: '400px',
                    p: '30px'
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 600,
                        fontSize: '26px',
                        lineHeight: '33px',
                        pt: '45px',
                        pb: '35px',
                        color: '#162534',
                        textAlign: 'center'
                    }}
                >Add NFT</Typography>
                <Stack flexDirection={'column'} gap={'7px'}>
                    <CustomInput aria-label="Demo input" placeholder="Address" />
                    <CustomInput aria-label="Demo input" placeholder="Token ID" />
                </Stack>
                <Stack sx={{
                    pt: '21px',
                    pb: '45px'
                }}>
                    <Button 
                        onClick={handleStep}
                        sx={{ 
                            bgcolor: '#7C66EB', 
                            p: '.875rem', 
                            color: 'white', 
                            fontSize: '1rem', 
                            width: '100%' 
                        }}
                    >Add</Button>
                </Stack>
            </Stack>
        </Dialog>
    );
}

export default CreateNFT;