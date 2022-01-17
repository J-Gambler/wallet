import { useState, useEffect } from 'react';
import {
    Typography,
    Dialog,
    Button,
} from '@mui/material';
import * as React from 'react';
import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import EyeClosedIcon from 'assets/images/icons/EyeClosed.svg';
import Money from './Money';

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
        border: 0px;
        padding: 16px 16px;
        ::placeholder {
            font-size: 16px;
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

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <div style={{ 
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: 1.5,
            // color: `${theme.palette.mode === 'dark' ? grey[300] : grey[900]}`,
            background: 'white',
            // border: `1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]}`,
            border: '1px solid #E1E1FF',
            borderRadius: '4px',
            transition: 'all 150ms ease',
        // position: 'relative'
        }}>
        <StyledInputElement {...props} ref={ref}/>
        <img src={EyeClosedIcon} style={{ width: '24px', height: '24px', marginRight: '16px' }} />
    </div>
  );
});

const Password = ({ open, onClose}) => {

    const [openMoney, setOpenMoney] = useState(false);
    
    const handleClose = () => {
        onClose(true);
    }

    const handleClickMoney = () => {
        setOpenMoney(true);
    };
  
    const handleCloseMoney = (value) => {
        setOpenMoney(false);
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
                        pt: '5rem',
                        pb: '3rem',
                        width: '400px',
                    }}
                >
                    <Typography variant="h1" sx={{ textAlign: 'center', pb: '34px', fontWeight: 600, fontSize: '26px' }}>Set a password to unlock</Typography>
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
                        <Button onClick={handleClickMoney} sx={{ bgcolor: '#7C66EB', p: '.875rem', color: 'white', fontSize: '1rem', width: '100%' }}>Save</Button>
                    </Typography>
                </Typography>
            </Dialog>
            <Money 
                open={openMoney}
                onClose={handleCloseMoney}
            />
        </>
    );
}

export default Password;