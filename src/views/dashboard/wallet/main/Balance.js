import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import { 
    Box,
    Typography,
    Button
} from '@mui/material';

import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import VerticalAlignBottomOutlinedIcon from '@mui/icons-material/VerticalAlignBottomOutlined';
import VerticalAlignTopOutlinedIcon from '@mui/icons-material/VerticalAlignTopOutlined';

const Balance = () => {
    const customization = useSelector((state) => state.customization);
    const theme = useTheme();

    return (
        <>
            <Box 
                sx={{ 
                    mt: '1rem',
                    bgcolor: '#e2eafc',
                    position: 'relative',
                    display: 'flex',
                    borderRadius: `${customization.borderRadius}px`,  
                }}
            >
                <Typography 
                    component="div" 
                    sx={{ 
                        bgcolor: '#e4e4fa', 
                        borderRadius: `${customization.borderRadius}px`, 
                        p: '1rem',
                        width: '50%'
                    }}
                >
                    <Typography sx={{ fontSize: '.875rem', pb: '.2rem' }}>Current Balance</Typography>
                    <Typography variant="h3">$17,679.31</Typography>
                </Typography>
                <Typography
                    component="div"
                    sx={{ 
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'inherit',
                        width: '50%',
                        gap: '.5rem',
                        py: '.5rem'
                    }}
                >
                    <Button startIcon={<VerticalAlignTopOutlinedIcon />} size="large" sx={{ bgcolor: theme.palette.common.white, px: '1rem', color: '#7c66eb' }} >Send</Button>
                    <Button startIcon={<VerticalAlignBottomOutlinedIcon />} size="large" sx={{ bgcolor: theme.palette.common.white, px: '1rem', color: '#7c66eb' }}>Buy</Button>
                    <Button startIcon={<VerticalAlignBottomOutlinedIcon />} size="large" sx={{ bgcolor: theme.palette.common.white, px: '1rem', color: '#7c66eb' }}>Receive</Button>
                    <Button startIcon={<SwapHorizOutlinedIcon />} size="large" sx={{ bgcolor: theme.palette.common.white, px: '1rem', color: '#7c66eb' }}>Swap</Button>
                </Typography>
            </Box>
        </>
    );
}

export default Balance;