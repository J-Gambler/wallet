import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import { 
    Box,
    Typography,
    Button
} from '@mui/material';

import BuySell from './BuySell';
import Buy from './Buy';
import Swap from './Swap';

import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import VerticalAlignBottomOutlinedIcon from '@mui/icons-material/VerticalAlignBottomOutlined';
import VerticalAlignTopOutlinedIcon from '@mui/icons-material/VerticalAlignTopOutlined';

const Balance = () => {
    const customization = useSelector((state) => state.customization);
    const theme = useTheme();
    const [openBuySell, setOpenBuySell] = useState(false);
    const [openBuy, setOpenBuy] = useState(false);
    const [openSwap, setOpenSwap] = useState(false);
  
    const handleClickBuySellOpen = () => {
        setOpenBuySell(true);
    };
  
    const handleCloseBuySell = (value) => {
        setOpenBuySell(false);
    };
      
    const handleClickBuy = () => {
        setOpenBuy(true);
    }

    const handleCloseBuy = () => {
        setOpenBuy(false);
    }

    const handleClickSwap = () => {
        setOpenSwap(true);
    };
  
    const handleCloseSwap = (value) => {
        setOpenSwap(false);
    };

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
                    <Button startIcon={<VerticalAlignTopOutlinedIcon />} size="large" onClick={handleClickBuy} sx={{ bgcolor: theme.palette.common.white, px: '1rem', color: '#7c66eb' }} >Send</Button>
                    <Button startIcon={<VerticalAlignBottomOutlinedIcon />} size="large" onClick={handleClickBuySellOpen} sx={{ bgcolor: theme.palette.common.white, px: '1rem', color: '#7c66eb' }}>Buy</Button>
                    <Button startIcon={<VerticalAlignBottomOutlinedIcon />} size="large" sx={{ bgcolor: theme.palette.common.white, px: '1rem', color: '#7c66eb' }}>Receive</Button>
                    <Button startIcon={<SwapHorizOutlinedIcon />} size="large" onClick={handleClickSwap} sx={{ bgcolor: theme.palette.common.white, px: '1rem', color: '#7c66eb' }}>Swap</Button>
                </Typography>
            </Box>
            <BuySell 
                open={openBuySell}
                onClose={handleCloseBuySell}
            />
            <Swap 
                open={openSwap}
                onClose={handleCloseSwap}
            />
            <Buy 
                open={openBuy}
                onClose={handleCloseBuy}
            />
        </>
    );
}

export default Balance;