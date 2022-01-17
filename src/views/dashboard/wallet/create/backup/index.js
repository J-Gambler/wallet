import { useState, useEffect } from 'react';
import { useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';

import { 
    Typography, 
    Button, 
    Box, 
    Grid,
    Checkbox 
} from '@mui/material';
import { Link } from 'react-router-dom';
import BackButton from '../BackButton';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import VerifiedUser from 'assets/images/icons/Frame.svg';

const BackUp = () => {
    const [check, setCheck] = useState(false);
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);

    const onCheck = (e) => {
        setCheck(e.target.checked);
    }

    return (
        <>
            <BackButton url="/wallet/create" />
            <Box>
                <Grid container direction="column">
                    <Grid item>
                        <Grid container>
                            <Grid lg={5} md={5} sm={12} xs={12} item>
                                <Box 
                                    sx={{ 
                                        bgcolor: theme.palette.common.white,
                                        position: 'relative',
                                        textAlign: 'center',
                                        borderRadius: `${customization.borderRadius}px`,
                                        py: '50px',
                                    }}
                                >
                                    <Typography sx={{ pb: '1rem' }}>
                                        <img src={VerifiedUser} style={{
                                            width: '100px',
                                            height: '100px'
                                        }} />
                                        {/* <VerifiedUserOutlinedIcon sx={{
                                            color: '#7c66eb',
                                            fontSize: '8rem',
                                        }} /> */}
                                    </Typography>
                                    <Typography sx={{
                                        fontWeight: 600,
                                        fontSize: '24px',
                                        color: 'black'
                                    }}>Back up your wallet now</Typography>
                                    <Typography sx={{ fontSize: '16px', fontWeight: 400, pt: '1rem', px: '80px' }}>In the next step you will see 12 words that allow you to recover a wallet</Typography>
                                    <Typography component="div" sx={{ pt: '10rem', display: 'flex', pr: '68px', pl: '64px' }}>
                                        <Checkbox sx={{ pt: '0px', display: 'initial', pl: '0px' }} onChange={onCheck} checked={check} />
                                        <Typography sx={{ display: 'inline-block', fontSize: '14px', textAlign: 'left', fontWeight: 400 }}>
                                            I understand that if I lose my recovery words, will not be able to access my wallet
                                        </Typography>
                                    </Typography>
                                    <Typography sx={{ pt: '24px', px: '60px' }}>
                                        {!check 
                                            ?   <a style={{ 
                                                    display: 'block',
                                                    backgroundColor: '#F3F3F5',
                                                    color: 'rgba(152, 161, 170, 0.5)', 
                                                    paddingTop: '16.5px', 
                                                    paddingBottom: '16.5px', 
                                                    fontSize: '16px', 
                                                    width: '100%',
                                                    borderRadius: '4px',
                                                }} disabled>Continue</a>
                                            :   <Link 
                                                    to="/wallet/create/backup/word" 
                                                    style={{ 
                                                        display: 'block',
                                                        textDecoration: 'none',
                                                        backgroundColor: '#7C66EB',
                                                        color: '#FFFFFF', 
                                                        paddingTop: '16.5px', 
                                                        paddingBottom: '16.5px', 
                                                        fontSize: '16px', 
                                                        width: '100%',
                                                        borderRadius: '4px',
                                                    }}
                                                >
                                                    Continue
                                                </Link>
                                        }
                                        
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default BackUp;