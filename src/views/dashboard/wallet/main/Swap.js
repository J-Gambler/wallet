import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { 
    Box,
    Dialog,
    Tabs,
    Tab,
    Typography,
    Avatar,
    Button,
    CardHeader
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import EtherIcon from 'assets/images/icons/Eth.svg';
import BitcoinTemp  from 'assets/images/icons/BitcoinTemp.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
    
const Swap = ({ onClose, open }) => {
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);

    const handleClose = () => {
        onClose(true)
    };
          
    return (
        <Dialog 
            onClose={handleClose} 
            open={open}
        >
            <Typography component="div" sx={{ bgcolor: '#F8FAFC'}}>
                <Box sx={{ p: '2rem', width: '500px' }}>
                    <Typography sx={{ textAlign: 'center' }} variant="h2">Swap</Typography>
                </Box>
                <Box sx={{ px: '1rem', pb: '3rem', flexDirection: 'column', gap: '.5rem', display: 'flex' }}>
                    <Box 
                        sx={{ 
                            display: 'flex', 
                            flexDirection: 'row', 
                            justifyContent: 'space-between', 
                            bgcolor: 'white',
                            borderRadius: `${customization.borderRadius}px`,
                            borderColor: 'white',
                            '&:hover': {
                                cursor: 'pointer',
                                border: 2,
                                borderColor: '#7c66eb'
                            }
                        }}
                    >
                        <Typography component="div" 
                            sx={{ 
                                p: '1.25rem', 
                                display: 'inline-block' 
                            }}
                        >
                            <Typography sx={{ fontSize: '12px'}}>EXCHANGE</Typography>
                            <Typography variant="h4" sx={{ fontSize: '18px', pt: '.25rem' }}>400</Typography>
                        </Typography>
                        <Typography 
                            component="div" 
                            sx={{ 
                                my: 'auto',
                                width: '200px',
                                bgcolor: '#ecf8ff',
                                p: '27px',
                                borderRadius: `0px ${customization.borderRadius}px ${customization.borderRadius}px 0px`,
                            }}
                        >
                            
                            <CardHeader 
                                sx={{ p: 0, 
                                    '& .MuiCardHeader-action' : {
                                        m: '0px', ml: 'auto', mt: 'auto'
                                } }}
                                avatar={
                                    <Avatar aria-label="recipe" src={EtherIcon} sx={{ width: '32px', height: '32px', bgcolor: '#7F6EE9', p: '8px', py: '4px' }} />
                                }
                                title={<Typography variant="h3" sx={{ bgcolor: 'transparent', fontSize: '16px' }}>Alex S.</Typography>}
                                action={
                                    <KeyboardArrowDownIcon sx={{ fontSize: '1.5rem' }} />
                                }
                            />
                        </Typography>
                    </Box>
                    <Box 
                        sx={{ 
                            display: 'flex', 
                            flexDirection: 'row', 
                            justifyContent: 'space-between', 
                            bgcolor: 'white',
                            borderRadius: `${customization.borderRadius}px`,
                            borderColor: 'white',
                            '&:hover': {
                                cursor: 'pointer',
                                border: 2,
                                borderColor: '#7c66eb'
                            }
                        }}
                    >
                        <Typography 
                            component="div" 
                            sx={{ 
                                display: 'inline-block',
                                p: '1.25rem'
                            }}
                        >
                            <Typography sx={{ fontSize: '12px'}}>RECEIVE</Typography>
                            <Typography variant="h4" sx={{ fontSize: '18px', pt: '.25rem' }}>~0.3468</Typography>
                        </Typography>
                        <Typography 
                            component="div"
                            sx={{ 
                                my: 'auto',
                                width: '200px',
                                bgcolor: '#ecf8ff',
                                p: '27px',
                                borderRadius: `0px ${customization.borderRadius}px ${customization.borderRadius}px 0px`,
                            }}
                        >
                            <CardHeader 
                                sx={{ p: 0, 
                                    '& .MuiCardHeader-action' : {
                                        m: '0px', ml: 'auto', mt: 'auto'
                                } }}
                                avatar={
                                    <Avatar aria-label="recipe" src={BitcoinTemp} sx={{ width: '32px', height: '32px', p: '8px', bgcolor: '#FFAF50' }} />
                                }
                                title={<Typography variant="h3" sx={{ bgcolor: 'transparent', fontSize: '16px' }}>BTC</Typography>}
                                action={
                                    <KeyboardArrowDownIcon sx={{ fontSize: '1.5rem' }} />
                                }
                            />
                        </Typography>
                    </Box>
                    <Typography sx={{ textAlign: 'center', p: 1, color: 'black' }}>
                        1 BTC = ~143.23 ETH
                    </Typography>
                    <Typography component="div">
                        <Button 
                            variant="contained" 
                            sx={{ width: '100%', 
                                bgcolor: '#7C66EB',
                                borderRadius: '4px',
                                paddingTop: '12.5px', 
                                paddingBottom: '12.5px', 
                                color: '#FFFFFF', 
                                fontSize: '16px',  
                            }}
                        >
                            Swap
                        </Button>
                    </Typography>
                </Box>
            </Typography>
        </Dialog>
    );
}

Swap.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };
  

export default Swap;