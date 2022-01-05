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

const Word = () => {
    const [check, setCheck] = useState(false);
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);
    const progress = [1,0,0,0,0,0,0,0,0,0,0,0]
    let index = 0;

    const onCheck = (e) => {
        setCheck(e.target.checked);
    }

    return (
        <>
            <BackButton url="/wallet/create/backup" />
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
                                        pt: '2rem'
                                    }}
                                >
                                    <Typography component="div" sx={{ pb: '1rem', display: 'flex', px: '2rem' }}>
                                        {
                                            progress.map(e => 
                                                <Typography 
                                                    component="div"
                                                    key={index ++}
                                                    sx={{ 
                                                        height: "3px", 
                                                        width: "8.33%", 
                                                        display: 'inline-block',
                                                        px: '1.5px',
                                                    }}
                                                >
                                                    <Typography component="div" sx={{ bgcolor: e ? '#7c66eb' : '#cbd0d4', width: '100%', height: '100%' }}></Typography>
                                                </Typography>
                                            )
                                        }
                                    </Typography>
                                    <Typography component="div" sx={{ height: '28rem', position: 'relative' }}>
                                        <Typography component="div" sx={{ pt: 'calc(50% - 5rem)', px: '25%' }}>
                                            <Button variant="outlined" disabled size="large" 
                                                sx={{ 
                                                    bgcolor: '#f2effd', 
                                                    color: `${theme.palette.common.black} !important`, 
                                                    fontSize: '1.25rem', 
                                                    fontWeight: 500, 
                                                    width: '100%'                                                    
                                                }}
                                            >Forest</Button>
                                            <Typography sx={{ textAlign: 'left', pt: '.5rem' }}>1 of 12</Typography>
                                        </Typography>
                                    </Typography>
                                    <Typography component="div" sx={{ pt: '2rem', px: '5rem' }}>
                                        <Button variant="contained" sx={{ width: '100%', bgcolor: '#7c66eb' }}>Next</Button>                                        
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

export default Word;