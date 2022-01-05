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
import { Link } from 'react-router-dom';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';

const Last = () => {
    const [check, setCheck] = useState(false);
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);
    const progress = [1,0,0,0,0,0]
    let index = 0;

    const onCheck = (e) => {
        setCheck(e.target.checked);
    }

    return (
        <>
            <BackButton url="/wallet/create/backup/word" />
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
                                        py: '5rem',
                                    }}
                                >
                                    <Typography variant="h2" sx={{ px: '7rem', lineHeight: '2rem'}}>The last step before using the wallet</Typography>
                                    <Typography sx={{ fontSize: '1rem', pt: '1rem' }}>Please enter the recovery words</Typography>
                                    <Typography component="div" sx={{ pt:'2rem', px: '3rem' }}>
                                        {progress.map(e =>
                                        <Typography component="div" key={index ++} sx={{ width: '50%', p: '.5rem', flexDirection: 'column', display: 'inline-block'}}>
                                            <Button variant="outlined" disabled size="large" 
                                                sx={{ 
                                                    bgcolor: '#f2effd', 
                                                    color: `${theme.palette.common.black} !important`, 
                                                    fontSize: '1.25rem', 
                                                    py: '1.25rem',
                                                    fontWeight: 500, 
                                                    width: '100%'
                                                }}
                                            >{index + 1}</Button>
                                        </Typography>
                                        )}
                                    </Typography>
                                    <Typography sx={{ pt: '2rem', px: '3rem' }} component="div">
                                        <Link to="/wallet/create/backup/result" style={{ textDecoration: 'none' }}>
                                            <Button variant="contained" sx={{ width: '100%', bgcolor: '#7c66eb' }}>Next</Button>
                                        </Link>
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

export default Last;