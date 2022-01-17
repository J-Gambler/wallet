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
import Market from './Market';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import DiagramIcon from 'assets/images/icons/Diagram.svg';
import SendIcon from 'assets/images/icons/SendOrigin.svg';
import ReceiveIcon from 'assets/images/icons/ReceiveOrigin.svg';
import CopyIcon from 'assets/images/icons/Copy.svg';
import UpArrowIcon from 'assets/images/icons/UpArrow.svg';
 
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Buy = ({ open, onClose }) => {

    const [openMarket, setOpenMarket] = useState(false);

    const handleClose = () => {
        onClose(true);
    }

    const handleClickMarket = () => {
        setOpenMarket(true);
    };
  
    const handleCloseMarket = (value) => {
        setOpenMarket(false);
    };
    
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
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <ArrowBackIosNewIcon />
                        <IconButton sx={{ p: '10px', bgcolor: 'rgba(152, 161, 170, 0.1)' }} aria-label="menu">
                            <img src={DiagramIcon} />
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
                                <Typography component="div">
                                    <Typography 
                                        sx={{
                                            fontSize: '1.5rem',
                                            fontWeight: 600,
                                            color: 'black',
                                            display: 'inline-block'
                                        }}
                                    >$17,679.31</Typography>
                                    <Typography sx={{ display: 'inline-block', verticalAlign: 'top', pl: '.5rem' }}>
                                        <img src={UpArrowIcon} />
                                    </Typography>
                                    <Typography sx={{ display: 'inline-block', color: '#60BA62', fontSize: '12px', verticalAlign: 'top' }}>$12.00</Typography>
                                </Typography>
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
                                gap: '1rem' ,
                                textAlign: 'center'
                            }}
                        >
                            <Grid item sx={{ bgcolor: 'white', borderRadius: '6px', py: '1rem' }} lg={4} md={4} sm={4}>
                                <Typography>
                                    <img src={SendIcon} />
                                </Typography>
                                <Typography>Send</Typography>
                            </Grid>
                            <Grid item sx={{ bgcolor: 'white', borderRadius: '6px', py: '1rem' }} lg={4} md={4} sm={4}>
                                <Typography>
                                    <img src={ReceiveIcon} />
                                </Typography>
                                <Typography>Receive</Typography>
                            </Grid>
                            <Grid item sx={{ bgcolor: 'white', borderRadius: '6px', py: '1rem' }} lg={4} md={4} sm={4}>
                                <Typography>
                                    <img src={CopyIcon} />
                                </Typography>
                                <Typography>Copy</Typography>
                            </Grid>
                        </Grid>
                        <Button 
                            onClick={handleClickMarket}
                            sx={{ bgcolor: '#7C66EB', fontSize: '1rem', width: '100%', py: '.875rem' }} variant="contained">Buy ethereum</Button>
                    </Typography>
                </Typography>
                <Market 
                    open={openMarket}
                    onClose={handleCloseMarket}
                />

            </Dialog>
        </>
    );
}

export default Buy;