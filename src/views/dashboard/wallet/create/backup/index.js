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
import BackButton from '../BackButton';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';

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
                            <Grid lg={6} md={6} sm={12} xs={12} item>
                                <Box 
                                    sx={{ 
                                        bgcolor: theme.palette.common.white,
                                        position: 'relative',
                                        textAlign: 'center',
                                        borderRadius: `${customization.borderRadius}px`,
                                        px: '7.5rem',
                                        py: '5rem',
                                    }}
                                >
                                    <Typography sx={{ pb: '1rem' }}>
                                        <VerifiedUserOutlinedIcon sx={{
                                            color: '#7c66eb',
                                            fontSize: '8rem',
                                        }} />
                                    </Typography>
                                    <Typography variant="h2">Back up your wallet now</Typography>
                                    <Typography sx={{ fontSize: '.875rem', pt: '1rem' }}>In the next step you will see 12 words that allow you to recover a wallet</Typography>
                                    <Typography component="div" sx={{ pt: '10rem', display: 'flex' }}>
                                        <Checkbox sx={{ pt: '0px', display: 'initial', pl: '0px' }} onChange={onCheck} checked={check} />
                                        <Typography sx={{ display: 'inline-block' }}>
                                            I understand that if I lose my recovery words, will not be able to access my wallet
                                        </Typography>
                                    </Typography>
                                    <Typography sx={{ pt: '2rem' }}>
                                        {!check 
                                            ? <Button variant="contained" disabled sx={{ width: '100%' }}>Continue</Button>
                                            : <Button variant="contained" sx={{ width: '100%' }}>Continue</Button>
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