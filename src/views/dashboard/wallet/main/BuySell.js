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
import BitcoinTemp from 'assets/images/icons/BitcoinTemp.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
    >
        {value === index && (
        <Box sx={{ p: 3, pt: 0, pb: '3rem' }}>
            <Typography component="div" sx={{ flexDirection: 'column', gap: '.5rem', display: 'flex' }}>{children}</Typography>
        </Box>
        )}
    </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
    
const BuySell = ({ onClose, open }) => {
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const customization = useSelector((state) => state.customization);

    const handleClose = () => {
        onClose(true)
    };
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
          
    return (
        <Dialog 
            onClose={handleClose} 
            open={open}
        >
            <Typography component="div" sx={{ bgcolor: '#F8FAFC'}}>
                <Box sx={{ p: '2rem', width: '500px' }}>
                    <Tabs
                        indicatorColor="transparent"
                        value={value} 
                        onChange={handleChange} 
                        centered
                    >
                        <Tab label="Buy" {...a11yProps(0)} 
                            sx={{ 
                                bgcolor: 'rgba(124, 102, 235, 0.1)',
                                color: '#7C66EB !important',
                                borderColor: 'transparent',
                                border: '0px',
                                fontSize: '16px',
                                borderRadius: '4px 0px 0px 4px',
                            }} 
                        />
                        <Tab label="Sell" {...a11yProps(0)} />
                    </Tabs>
                </Box>
                <Box sx={{ px: '1rem' }}>
                    <TabPanel value={value} index={0} dir={theme.direction}>
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
                                <Typography sx={{ fontSize: '12px'}}>YOU PAY</Typography>
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
                                        <Avatar aria-label="recipe" src={User1} sx={{ width: '32px', height: '32px' }} />
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
                                <Typography sx={{ fontSize: '12px'}}>YOU RECEIVE</Typography>
                                <Typography variant="h4" sx={{ fontSize: '18px', pt: '.25rem' }}>~0.346838568434</Typography>
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
                                Buy Now
                            </Button>
                        </Typography>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                    </TabPanel>
                </Box>
            </Typography>
        </Dialog>
    );
}

BuySell.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };
  

export default BuySell;