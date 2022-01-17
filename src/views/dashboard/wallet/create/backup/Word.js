import { useState, useEffect } from 'react';
import { useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';

import { 
    Typography, 
    Button, 
    Box, 
    Grid,
    Checkbox,
} from '@mui/material';
import { Link } from 'react-router-dom';
import BackButton from '../BackButton';

const Word = () => {
    const [check, setCheck] = useState(false);
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);
    const progress = [1,0,0,0,0,0]
    let index = 1;

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
                                        borderRadius: `${customization.borderRadius}px`,
                                        px: '4rem',
                                        py: '3rem'
                                    }}
                                >
                                    <Typography component="div">
                                        {
                                            progress.map(e => 
                                                <Grid container key={index ++ } sx={{ gap: '1rem', flexWrap: 'nowrap', pb: '1rem' }}>
                                                    <Grid 
                                                        item lg={6} md={6} sm={6} xs={6}
                                                        sx={{ 
                                                            bgcolor: '#f2effd',
                                                            borderRadius: '8px',
                                                            height: '75px',
                                                            p: '1rem',
                                                            pt: '.5rem'
                                                        }}>{index}
                                                    </Grid>
                                                    <Grid 
                                                        item lg={6} md={6} sm={6} xs={6}
                                                        sx={{ 
                                                            bgcolor: '#f2effd',
                                                            borderRadius: '8px',
                                                            height: '75px',
                                                            p: '1rem',
                                                            pt: '.5rem'
                                                        }}>{ ++ index }
                                                    </Grid>
                                                </Grid>
                                            )
                                        }
                                    </Typography>
                                    {/* <Typography component="div" sx={{ pb: '1rem', display: 'flex', px: '2rem' }}>
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
                                    </Typography> */}
                                    {/* <Typography component="div" sx={{ height: '28rem', position: 'relative' }}>
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
                                    </Typography> */}
                                    <Typography component="div" sx={{ pt: '1rem' }}>
                                        <Link 
                                            to="/wallet/create/backup/last" 
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
                                                textAlign: 'center'
                                            }}
                                        >
                                            Next
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

export default Word;