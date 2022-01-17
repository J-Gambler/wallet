import { Typography, Box, CardHeader, Avatar, IconButton, Divider, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';

import SendIcon from 'assets/images/icons/SendTemp.svg';
import BuyIcon from 'assets/images/icons/BuyTemp.svg';
import ReceiveIcon from 'assets/images/icons/Receive.svg';
import SwapIcon from 'assets/images/icons/SwapTemp.svg';

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const History = () => {

    const tokens = [
        {coin: 'Bitcoin', sub: 'Send', img: SendIcon,unit: 'BTS', token: '-3.9587448 BTC', money: '-$32,434.34', bg: 'rgba(255, 210, 51, 0.1)'},
        {coin: 'Ethereum', sub: 'Buy',img: BuyIcon,unit: 'ETH', token: '-3.9587448 BTC', money: '-$32,434.34', bg: 'rgba(96, 186, 98, 0.1)'},
        {coin: 'XPR', sub: 'Swap',img: SwapIcon,unit: 'BNB', token: '-3.9587448 BTC', money: '-$32,434.34', bg: 'rgba(68, 189, 255, 0.1)'},
        {coin: 'Bitcoin', sub: 'Send',img: SendIcon,unit: 'BTS', token: '-3.9587448 BTC', money: '-$32,434.34', bg: 'rgba(255, 210, 51, 0.1)'},
        {coin: 'Ethereum', sub: 'Buy',img: BuyIcon,unit: 'ETH', token: '-3.9587448 BTC', money: '-$32,434.34', bg: 'rgba(96, 186, 98, 0.1)'},
        {coin: 'XPR', sub: 'Swap',img: SwapIcon,unit: 'BNB', token: '-3.9587448 BTC', money: '-$32,434.34', bg: 'rgba(68, 189, 255, 0.1)'},
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
                    pt: '0px',
                    pb: '3rem'
                }}
            >
                <Typography component="div">
                    <Typography component="div" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '1.25rem' }}>
                        <Typography variant="h3" sx={{ display: 'inline-block' }}>History</Typography>
                        <Typography variant="h3" sx={{ display: 'inline-block' }}>
                            <Button
                                sx={{ pt: 0, bgcolor: '#e6f4fc', color: '#485068', p: '.5rem', px: '1rem' }}
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
                                            <Avatar aria-label="recipe" src={e.img} sx={{ p: '8px', bgcolor: e.bg }} />
                                        }
                                        title={<Typography sx={{ fontSize: '14px', fontWeight: 500, color: 'black', lineHeight: '132.5%' }}>{e.coin}</Typography>}
                                        subheader={<Typography sx={{ display: 'inline-block', fontSize: '11px', fontWeight: 500, color: 'rgba(22, 37, 52, 0.5)', lineHeight: '120%' }}>{ e.sub }</Typography>}
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
                            <Button sx={{ bgcolor: 'white', color: 'black', width: '100%' }}>View more</Button>
                        </Typography>
                    </Typography>
                </Typography>
            </Box>
        </>
    );
}

export default History;