import { Typography, Box, CardHeader, Avatar, IconButton, Divider, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';

import CloseIcon from '@mui/icons-material/Close';
import BinanceIcon from 'assets/images/icons/binance-smart-chain.png';
import EtherIcon from 'assets/images/icons/eth.png';

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const History = () => {

    const tokens = [
        {coin: 'Bitcoin',img: BinanceIcon,unit: 'BTS', token: '-3.9587448 BTC', money: '-$32,434.34'},
        {coin: 'Ethereum',img: EtherIcon,unit: 'ETH', token: '-3.9587448 BTC', money: '-$32,434.34'},
        {coin: 'XPR',img: EtherIcon,unit: 'BNB', token: '-3.9587448 BTC', money: '-$32,434.34'},
        {coin: 'Bitcoin',img: EtherIcon,unit: 'BTS', token: '-3.9587448 BTC', money: '-$32,434.34'},
        {coin: 'Ethereum',img: EtherIcon,unit: 'ETH', token: '-3.9587448 BTC', money: '-$32,434.34'},
        {coin: 'XPR',img: EtherIcon,unit: 'BNB', token: '-3.9587448 BTC', money: '-$32,434.34'},
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
                    <Typography component="div" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h3" sx={{ display: 'inline-block' }}>History</Typography>
                        <Typography variant="h3" sx={{ display: 'inline-block' }}>
                            <Button
                                sx={{ pt: 0, bgcolor: '#e6f4fc', color: '#485068', p: '1rem' }}
                                startIcon={
                                    <CalendarTodayOutlinedIcon />
                                }
                            >Today, 29.10.2021</Button>
                        </Typography>
                    </Typography>
                    <Typography component="div">
                        {
                            tokens.map(e => 
                                <Typography component="div" key={index ++} sx={{my: '.5rem', p: '.5rem', bgcolor: 'white', borderRadius: `${customization.borderRadius}px` }}>
                                    <CardHeader 
                                        sx={{ p: 0, '& .css-sgoict-MuiCardHeader-action': {m: 'auto'} }}
                                        avatar={
                                            <Avatar aria-label="recipe" src={e.img} />
                                        }
                                        title={<Typography variant="h5">{e.coin}</Typography>}
                                        subheader={<Typography sx={{ fontSize: '.75rem' }}>$43,678.54</Typography>}
                                        action={
                                            <Typography component="div">
                                                <Typography sx={{ textAlign: 'right',fontSize: '1rem', color: '#162534'}} variant="h4">{e.token}</Typography>
                                                <Typography sx={{ textAlign: 'right', fontSize: '.875rem', color: '#98a1aa'}}>{e.money}</Typography>
                                            </Typography>
                                        }
                                    />
                                </Typography>
                        )}
                        <Typography component="div" sx={{ pt: '1.7rem' }}>
                            <Button sx={{ bgcolor: 'white', width: '100%' }}>View more</Button>
                        </Typography>
                    </Typography>
                </Typography>
            </Box>
        </>
    );
}

export default History;