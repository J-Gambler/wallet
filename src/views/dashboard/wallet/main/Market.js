import { useState, useEffect } from 'react';
import {
    Grid,
    Typography,
    Dialog,
    Box,
    Divider,
    Button,
    Link
} from '@mui/material'; 
import Chart from 'react-apexcharts';
import chartData from './chartData';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import UpArrowCircle from 'assets/images/icons/UpArrowCircle.svg';

const Market = ({ open, onClose}) => {
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
                        bgcolor: '#f8fafc',
                        p: '1rem',
                        pt: '2rem',
                        width: '700px'
                    }}
                >
                    <Typography component="div">
                        <ArrowBackIosNewIcon />
                    </Typography>
                    <Grid container sx={{ pt: '1rem' }}>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Box
                                sx={{
                                    bgcolor: 'white',
                                    borderRadius: '0.25rem',
                                    p: '1rem',
                                    pl: '1.5rem',
                                    mb: '1rem',
                                }}
                            >
                                <Typography variant="h4" sx={{ lineHeight: '2rem' }}>
                                    Description
                                </Typography>
                                <Grid container>
                                    <Grid item lg={8} md={8} sm={12} xs={12}>
                                        <Typography>
                                            Ethereum is the community-run technology powering the cyptocurrency ether (ETH) and thousands of decentralized applications.
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={12} xs={12}>
                                        <Typography>
                                            <Link href="https://www.ethereum.org" sx={{
                                                textDecoration: 'none',
                                                color: '#7c66eb'
                                            }}>www.ethereum.org</Link>
                                        </Typography>                                        
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ gap: '1rem', flexWrap: 'nowrap' }}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Box
                                sx={{
                                    bgcolor: 'white',
                                    borderRadius: '0.25rem',
                                    p: '1rem',
                                    pl: '1.5rem',
                                }}
                            >
                                <Typography component="div" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Button sx={{ color: '#98a1aa' }}>Day</Button>
                                    <Button sx={{ bgcolor: '#f2f0fd', color: '#7c66eb' }}>Week</Button>
                                    <Button sx={{ color: '#98a1aa' }}>Month</Button>
                                    <Button sx={{ color: '#98a1aa' }}>Year</Button>
                                </Typography>
                                <Typography component="div" sx={{ pt: '.75rem' }}>
                                        <Typography variant="h3">$17,679.31</Typography>
                                        <Typography component="div" sx={{ display: 'flex', alignItems: 'center'}}>
                                            <Typography component="div" sx={{ display: 'inline-block' }}>
                                                <img src={UpArrowCircle} style={{ verticalAlign: 'middle' }} />
                                            </Typography>
                                            <Typography sx={{ color: '#60BA62', display: 'inline-block' }}>12.34% (+$13.66)</Typography>
                                        </Typography>
                                        <div style={{ paddingTop: '1rem'}}>
                                            <Chart {...chartData} />
                                        </div>
                                        {/* <Typography variant="h6" sx={{ color: '#9c9fa8', pt: '.5rem', textAlign: 'right' }}>$22,558.25</Typography>
                                        <Typography component="div">
                                            <Chip label="1H" clickable={true} sx={{ ml: '1rem', bgcolor: '#ff4a4a', height: 'inherit', color: '#FFFFFF', p: '.1rem', mt: '.5rem', fontWeight: 600 }} />
                                            <Chip label="1D" clickable={true} sx={{ ml: '1rem', height: 'inherit', p: '.1rem', mt: '.5rem', fontWeight: 600 }} />
                                            <Chip label="1W" clickable={true} sx={{ ml: '1rem', height: 'inherit', p: '.1rem', mt: '.5rem', fontWeight: 600 }} />
                                            <Chip label="1M" clickable={true} sx={{ ml: '1rem', height: 'inherit', p: '.1rem', mt: '.5rem', fontWeight: 600 }} />
                                            <Chip label="1Y" clickable={true} sx={{ ml: '1rem', height: 'inherit', p: '.1rem', mt: '.5rem', fontWeight: 600 }} />
                                        </Typography> */}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Box
                                sx={{
                                    bgcolor: 'white',
                                    borderRadius: '0.25rem',
                                    p: '1rem',
                                    pl: '1.5rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.75rem',
                                }}
                            >
                                <Typography component="div">
                                    <Typography sx={{ fontSize: '.75rem', fontSize: '14px', fontWeight: 500, color: '#98a1aa' }}>Market Cap</Typography>
                                    <Typography variant="h5" sx={{ lineHeight: '1.5rem', fontSize: '16px', fontWeight: 600, color: '#162534' }}>$473,599,584.99</Typography>
                                    <Divider  sx={{ py: '.25rem' }}/>
                                </Typography>
                                <Typography component="div">
                                    <Typography sx={{ fontSize: '.75rem', fontSize: '14px', fontWeight: 500, color: '#98a1aa' }}>Volume</Typography>
                                    <Typography variant="h5" sx={{ lineHeight: '1.5rem', fontSize: '16px', fontWeight: 600, color: '#162534' }}>$473,599,584.99</Typography>
                                    <Divider sx={{ py: '.25rem' }}/>
                                </Typography>
                                <Typography component="div">
                                    <Typography sx={{ fontSize: '.75rem', fontSize: '14px', fontWeight: 500, color: '#98a1aa' }}>Total supply</Typography>
                                    <Typography variant="h5" sx={{ lineHeight: '1.5rem', fontSize: '16px', fontWeight: 600, color: '#162534' }}>$473,599,584.99</Typography>
                                    <Divider sx={{ py: '.25rem' }} />
                                </Typography>
                                <Typography component="div">
                                    <Typography sx={{ fontSize: '.75rem', fontSize: '14px', fontWeight: 500, color: '#98a1aa' }}>Circulating Supply</Typography>
                                    <Typography variant="h5" sx={{ lineHeight: '1.5rem', fontSize: '16px', fontWeight: 600, color: '#162534' }}>$473,599,584.99</Typography>
                                </Typography>
                                <Typography>
                                    <Button sx={{ bgcolor: '#f2f0fd', color: '#7c66eb', width: '100%' }}>View on CoinMarketCap</Button>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                </Typography>



            </Dialog>
        </>
    );
}

export default Market;