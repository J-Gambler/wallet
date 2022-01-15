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
import User1 from 'assets/images/users/user-round.png';
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
                        border: 2,
                        borderColor: 'white',
                        '&:hover': {
                            cursor: 'pointer',
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
                        <Typography>EXCHANGE</Typography>
                        <Typography variant="h4">400</Typography>
                    </Typography>
                    <Typography 
                        component="div" 
                        sx={{ 
                            width: '200px',
                            bgcolor: '#ecf8ff',
                            p: '1.25rem',
                            borderRadius: `0px ${customization.borderRadius}px ${customization.borderRadius}px 0px`,
                        }}
                    >
                        
                        <CardHeader 
                            sx={{ p: 0, '& .css-sgoict-MuiCardHeader-action': {m: 'auto'} }}
                            avatar={
                                <Avatar aria-label="recipe" src={User1} />
                            }
                            title={<Typography variant="h3" sx={{ bgcolor: 'transparent' }}>Alex S.</Typography>}
                            action={
                                <KeyboardArrowDownIcon sx={{ fontSize: '1.5rem', ml: 1 }} />
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
                        border: 2,
                        borderColor: 'white',
                        '&:hover': {
                            cursor: 'pointer',
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
                        <Typography>YOU RECEIVE</Typography>
                        <Typography variant="h4">~0.346838568434</Typography>
                    </Typography>
                    <Typography 
                        component="div"
                        sx={{ 
                            width: '200px',
                            bgcolor: '#ecf8ff',
                            p: '1.25rem',
                            borderRadius: `0px ${customization.borderRadius}px ${customization.borderRadius}px 0px`,
                        }}
                    >
                        <CardHeader 
                            sx={{ p: 0, '& .css-sgoict-MuiCardHeader-action': {m: 'auto'} }}
                            avatar={
                                <Avatar aria-label="recipe" src={User1} />
                            }
                            title={<Typography variant="h3" sx={{ bgcolor: 'transparent' }}>BTC</Typography>}
                            action={
                                <KeyboardArrowDownIcon sx={{ fontSize: '1.5rem', ml: 1 }} />
                            }
                        />
                    </Typography>
                </Box>
                <Typography sx={{ textAlign: 'center', p: 1 }}>
                    1 BTC = ~143.23 ETH
                </Typography>
                <Typography component="div">
                    <Button variant="contained" sx={{ width: '100%', bgcolor: '#7c66eb', py: 1 }}>
                        Swap
                    </Button>
                </Typography>
            </Box>
        </Dialog>
    );
}

Swap.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };
  

export default Swap;