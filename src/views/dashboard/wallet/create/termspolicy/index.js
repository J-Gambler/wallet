import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Policy from './Policy';
import Terms from './Terms';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Typography, Box, Button, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const customization = useSelector((state) => state.customization);

    return (
        <div
            role="tabpanel"
            style={{ 
                backgroundColor: '#f8fafc',
                borderRadius: `${customization.borderRadius}px` 
            }}
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                <Typography component="div">{children}</Typography>
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

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TermsPolicy = () => {
    const [value, setValue] = useState(0);
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Box 
            sx={{ 
                position: 'relative', 
                bgcolor: theme.palette.common.white, 
                p: '1.5rem',
                borderRadius: `${customization.borderRadius}px`,
            }}>
            <Box>
                <Tabs 
                    value={value} 
                    onChange={handleChange} 
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="basic tabs example" 
                    sx={{ 
                        backgroundColor: '#f8fafc', 
                        mb: '1rem',
                        borderRadius: `${customization.borderRadius}px`,
                        pl: '2rem',
                    }}
                >
                    <Tab label="Terms of Service" {...a11yProps(0)} />
                    <Tab label="Privacy Policy" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Terms />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Policy />
            </TabPanel>
            <Typography component="div" sx={{ pt: 2 }}>
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'end' }}>
                    <Button variant="outlined" size="large" sx={{ color: '#7C66EB',border: '0px', px: '2rem', backgroundColor: 'rgba(124, 102, 235, 0.1)' }}>
                        Decline
                    </Button>
                    <Link to="/wallet/create/backup" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" size="large" sx={{ color: '#f8fafc', px: '4rem', backgroundColor: '#7C66EB' }}>
                            Accept
                        </Button>
                    </Link>
                </Stack>
            </Typography>
        </Box>
    )
}

export default TermsPolicy;