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
import { styled } from '@mui/system';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IdentifyImage from 'assets/images/background/image 45.png';

const blue = {
  500: '#007FFF',
};

const grey = {
  400: '#BFC7CF',
  500: '#AAB4BE',
};

const Root = styled('span')`
    font-size: 0;
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    margin: 10px;
    cursor: pointer;

    &.${switchUnstyledClasses.disabled} {
        opacity: 0.4;
        cursor: not-allowed;
    }

    & .${switchUnstyledClasses.track} {
        background: ${grey[400]};
        border-radius: 10px;
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
    }

    & .${switchUnstyledClasses.thumb} {
        display: block;
        width: 14px;
        height: 14px;
        top: 3px;
        left: 3px;
        border-radius: 16px;
        background-color: #fff;
        position: relative;
        transition: all 200ms ease;
    }

    &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
        background-color: ${grey[500]};
        box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
    }

    &.${switchUnstyledClasses.checked} {
        .${switchUnstyledClasses.thumb} {
        left: 22px;
        top: 3px;
        background-color: #fff;
        }

        .${switchUnstyledClasses.track} {
        background: ${blue[500]};
        }
    }

    & .${switchUnstyledClasses.input} {
        cursor: inherit;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        z-index: 1;
        margin: 0;
    }
`;

const Setting = ({ open, onClose}) => {

    const label = { componentsProps: { input: { 'aria-label': 'Demo switch' } } };

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
                        pb: '4rem',
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
                                py: '.75rem' ,
                                borderRadius: '.75rem',
                            }}
                        >
                            <Typography variant="h4" sx={{ display: 'inline-block', fontSize: '16px', fontWeight: 600 }}>Preffered currency</Typography>
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
                            component="div" 
                            sx={{ 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center', 
                                bgcolor: '#F2F6FA',
                                p: '1rem', 
                                py: '.25rem' ,
                                borderRadius: '.75rem',
                            }}
                        >
                            <Typography variant="h4" sx={{ display: 'inline-block', fontSize: '16px', fontWeight: 600 }}>Wallet Lock</Typography>
                            <Typography sx={{ display: 'inline-block' }}>
                               <SwitchUnstyled component={Root} {...label} />
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
                                py: '.25rem' ,
                                borderRadius: '.75rem',
                                mt: '.5rem'
                            }}
                        >
                            <Typography variant="h4" sx={{ display: 'inline-block', fontSize: '16px', fontWeight: 600 }}>Auto change address</Typography>
                            <Typography sx={{ display: 'inline-block' }}>
                                <SwitchUnstyled component={Root} {...label} />
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