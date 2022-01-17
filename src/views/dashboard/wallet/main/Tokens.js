import { Typography, Box, CardHeader, Avatar, IconButton, Divider, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';

import CloseIcon from '@mui/icons-material/Close';
import EtherIcon from 'assets/images/icons/Eth.svg';
import Bitcoin from 'assets/images/icons/Bitcoin.svg';
import XPRcoin from 'assets/images/icons/XPR.svg';

import UpArrow from 'assets/images/icons/UpArrow.svg';
import DownArrow from 'assets/images/icons/DownArrow.svg';

const Tokens = () => {

    const tokens = [
        {coin: 'Bitcoin',img: Bitcoin,unit: 'BTS', bg: 'rgba(255, 210, 51, 0.15)', p: '13px', arrow: UpArrow, arrowColor: '#60BA62' },
        {coin: 'Ethereum',img: EtherIcon,unit: 'ETH', bg: '#7F6EE9', p: '13px', arrow: DownArrow, arrowColor: '#ED2F00'},
        {coin: 'XPR',img: XPRcoin,unit: 'BNB', bg: '#25292C', p: '13px', arrow: UpArrow, arrowColor: '#60BA62'},
        {coin: 'Bitcoin',img: Bitcoin ,unit: 'BTS', bg: 'rgba(255, 210, 51, 0.15)', p: '13px', arrow: UpArrow, arrowColor: '#60BA62'},
        {coin: 'Ethereum',img: EtherIcon,unit: 'ETH', bg: '#7F6EE9', p: '13px', arrow: DownArrow, arrowColor: '#ED2F00'},
        {coin: 'XPR',img: XPRcoin,unit: 'BNB', bg: '#25292C', p: '13px', arrow: UpArrow, arrowColor: '#60BA62'},
        {coin: 'Bitcoin',img: Bitcoin ,unit: 'BTS', bg: 'rgba(255, 210, 51, 0.15)', p: '13px', arrow: UpArrow, arrowColor: '#60BA62'}
    ]
    const customization = useSelector((state) => state.customization);
    const theme = useTheme();
    let index = 0
    return (
        <>
            <Box 
                sx={{
                    bgcolor: '#f8fafc',
                    position: 'relative',
                    borderRadius: `${customization.borderRadius}px`,  
                    my: '1rem',
                    mr: '.5rem',
                    p: '1.5rem',
                    pb: '3rem'
                }}
            >
                <Typography component="div">
                    <Typography variant="h3" sx={{ pb: '2rem' }}>Tokens</Typography>
                    <Typography component="div">
                        {
                            tokens.map(e => 
                                <Typography component="div" key={index ++} sx={{my: '.5rem', p: '.5rem', bgcolor: 'white', borderRadius: `${customization.borderRadius}px` }}>
                                    <CardHeader 
                                        sx={{ p: 0, '& .css-sgoict-MuiCardHeader-action': {m: 'auto'} }}
                                        avatar={
                                            <Avatar aria-label="recipe" src={e.img} sx={{ p: '8px', px: e.p, bgcolor: e.bg }} />
                                        }
                                        title={<Typography sx={{ fontSize: '14px', fontWeight: 500, color: 'black' }}>{e.coin}</Typography>}
                                        subheader={
                                            <Typography component="div">
                                                <Typography sx={{ display: 'inline-block', fontSize: '11px', fontWeight: 500, color: 'rgba(22, 37, 52, 0.5)' }}>$43,678.54</Typography>
                                                <Typography component="div" sx={{ verticalAlign: 'middle', display: 'inline-block', pl: '7px' }}>
                                                    <img src={e.arrow} style={{ width: '11px' }} />
                                                </Typography>
                                                <Typography sx={{ display: 'inline-block', color: e.arrowColor, fontSize: '11px' }}>$12.00</Typography>
                                            </Typography>}
                                        action={
                                            <Typography component="div" sx={{ display: 'flex' }}>
                                                <Typography sx={{ display: 'inline-block', m: 'auto', fontSize: '1rem', color: '#162534'}} variant="h4">0 {e.unit}</Typography>
                                                <Divider orientation="vertical" flexItem sx={{ borderColor: '#cbd0d4', mx: '.5rem' }} />
                                                <CloseIcon sx={{ m: 'auto', color: '#cbd0d4' }}/>
                                            </Typography>
                                        }
                                    />
                                </Typography>
                        )}
                    </Typography>
                </Typography>
            </Box>
        </>
    );
}

export default Tokens;