import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import {
    Dialog,
    Typography,
    Button,
    CardHeader,
    Divider,
    Stack,
    Paper,
    Grid,
    IconButton
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
 
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Buy = ({ open, onClose }) => {

    const handleClose = () => {
        onClose(true);
    }
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <Typography 
                    component="div"
                    sx={{
                        p: '1rem',
                        pt: '1.5rem',
                        width: '500px',
                        textAlign: 'center',
                        bgcolor: '#f4f7fc'
                    }}
                >
                    <Typography 
                        component="div"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <ArrowBackIosNewIcon />
                        <IconButton sx={{ p: '10px' }} aria-label="menu">
                            <ShowChartOutlinedIcon />
                        </IconButton>
                    </Typography>
                    <Typography component="div" sx={{ p: '1rem', pb: '2rem' }}>
                        <CardHeader 
                            sx={{
                                textAlign: 'left'
                            }}
                            title={
                                <Typography>Ethereum</Typography>
                            }
                            subheader={
                                <Typography sx={{
                                    fontSize: '1.5rem',
                                    fontWeight: 600,
                                    color: 'black'
                                }}>$17,679.31</Typography>
                            }
                        />
                        <Typography component="div"
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '3rem',
                                    color: 'black',
                                    fontWeight: 500
                                }}
                            >0</Typography>
                            {/* <Divider orientation="vertical" /> */}
                            <Typography
                                sx={{
                                    fontWeight: 500,
                                    fontSize: '3rem',
                                    color: '#909aa9'
                                }}
                            >| ETH</Typography>
                        </Typography>
                        <Typography 
                            sx={{ 
                                paddingTop: '0.875rem',
                            }}
                        >Accounts require a minimum balance of 0.1 Algos</Typography>
                        <Grid container 
                            sx={{ 
                                paddingTop: '3.5rem',
                                flexWrap: 'nowrap',
                                paddingBottom: '2rem',
                                gap: '1rem' 
                            }}
                        >
                            <Grid item sx={{ bgcolor: 'white', p: '2rem', borderRadius: '0.25rem' }} lg={4} md={4} sm={4}>Send</Grid>
                            <Grid item sx={{ bgcolor: 'white', p: '2rem', borderRadius: '0.25rem' }} lg={4} md={4} sm={4}>Receive</Grid>
                            <Grid item sx={{ bgcolor: 'white', p: '2rem', borderRadius: '0.25rem' }} lg={4} md={4} sm={4}>Copy</Grid>
                        </Grid>
                        <Button sx={{ bgcolor: '#7C66EB', fontSize: '1rem', width: '100%', py: '.875rem' }} variant="contained">Buy ethereum</Button>
                    </Typography>
                </Typography>
            </Dialog>
        </>
    );
}

export default Buy;