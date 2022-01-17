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
import Receive from './Receive';

import SendIcon from 'assets/images/icons/Send.svg';
import BuyIcon from 'assets/images/icons/Buy.svg';
import ReceiveIcon from 'assets/images/icons/Receive.svg';
import SwapIcon from 'assets/images/icons/Swap.svg';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import VerticalAlignBottomOutlinedIcon from '@mui/icons-material/VerticalAlignBottomOutlined';
import VerticalAlignTopOutlinedIcon from '@mui/icons-material/VerticalAlignTopOutlined';

const Balance = () => {
    const customization = useSelector((state) => state.customization);
    const theme = useTheme();
    const [openBuySell, setOpenBuySell] = useState(false);
    const [openBuy, setOpenBuy] = useState(false);
    const [openSwap, setOpenSwap] = useState(false);
    const [openReceive, setOpenReceive] = useState(false);
  
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

    const handleClickReceive = () => {
        setOpenReceive(true);
    };
  
    const handleCloseReceive = (value) => {
        setOpenReceive(false);
    };

    return (
        <>
            <Box 
                sx={{ 
                    mt: '1rem',
                    bgcolor: '#e2eafc',
                    position: 'relative',
                    display: 'flex',
                    borderRadius: '8px',  
                }}
            >
                <Typography 
                    component="div" 
                    sx={{ 
                        bgcolor: '#e4e4fa', 
                        borderRadius: '8px', 
                        p: '13px',
                        pl: '21px',
                        width: '50%'
                    }}
                >
                    <Typography sx={{ fontSize: '14px', pb: '8px' }}>Current Balance</Typography>
                    <Typography variant="h3" sx={{ fontSize: '26px', fontWeight: 600}}>$17,679.31</Typography>
                </Typography>
                <Typography
                    component="div"
                    sx={{ 
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'inherit',
                        width: '50%',
                        gap: '.5rem',
                        py: '1rem'
                    }}
                >
                    <Button startIcon={<img src={SendIcon} />} size="large" onClick={handleClickBuy} sx={{ bgcolor: '#fafbfe', fontSize: '14px', px: '1.5rem', color: '#7c66eb' }} >Send</Button>
                    <Button startIcon={<img src={BuyIcon} />} size="large" onClick={handleClickBuySellOpen} sx={{ bgcolor: '#fafbfe', fontSize: '14px', px: '1.5rem', color: '#7c66eb' }}>Buy</Button>
                    <Button startIcon={<img src={ReceiveIcon} />} size="large" onClick={handleClickReceive} sx={{ bgcolor: '#fafbfe', fontSize: '14px', px: '1.5rem', color: '#7c66eb' }}>Receive</Button>
                    <Button startIcon={<img src={SwapIcon} />} size="large" onClick={handleClickSwap} sx={{ bgcolor: '#fafbfe', fontSize: '14px', px: '1.5rem', color: '#7c66eb' }}>Swap</Button>
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
            <Receive 
                open={openReceive}
                onClose={handleCloseReceive}
            />
        </>
    );
}

export default Balance;