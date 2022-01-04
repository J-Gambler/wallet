import { useState, useEffect } from "react";
import Policy from './Policy';
import Terms from './Terms';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Typography, Box, Button, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            style={{ backgroundColor: '#f8fafc' }}
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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ backgroundColor: '#f8fafc' }}>
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
                    <Button variant="outlined" size="large" sx={{ color: '#7C66EB', backgroundColor: '#f8fafc' }}>
                        Decline
                    </Button>
                    <Link to="/wallet/create/backup">
                        <Button variant="contained" size="large" sx={{ color: '#f8fafc', backgroundColor: theme.palette.secondary.main }}>
                            Accept
                        </Button>
                    </Link>
                </Stack>
            </Typography>
        </>
    )
}

export default TermsPolicy;