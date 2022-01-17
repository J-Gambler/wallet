import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';

import { 
    Typography, 
    Button, 
    Box, 
    Grid,
    Dialog,
} from '@mui/material';
import BackButton from '../create/BackButton';
import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;
    const theme = useTheme();

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open} 
            sx={{
                bgcolor: 'rgba(0, 0, 0, 0.56)',
                backdropFilter: 'blur(23px)',
                    '& .MuiPaper-root': {
                        bgcolor: 'transparent !important',
                        boxShadow: 'none',
                        borderRadius: '0px'
                    }
                }}>
            <Typography component="div" sx={{ textAlign: 'center', pb: '1rem'}}>
                <CheckCircleOutlineIcon sx={{ fontSize: '5rem', color: theme.palette.common.white }} />
            </Typography>
            <Typography sx={{ color: 'white', fontSize: '1.25rem', textAlign: 'center', pb: '2rem' }}>Your wallet was successfully created</Typography>
            <Link to="/wallet/main" style={{ textAlign: 'center', textDecoration: 'none', paddingLeft: '2rem', paddingRight: '2rem' }}>
            <Button sx={{ px: '5rem', width: '100%', textAlign: 'center', py: '12px', bgcolor: '#7c66eb' }} variant="contained">Ok</Button>
            </Link>
        </Dialog>
    );
}
  
SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

const Recover = () => {

    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);
    const progress = [1,0,0]

    let index = 0;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
    };

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
                                    <Typography variant="h2" sx={{ px: '7rem', lineHeight: '2rem'}}>Enter recovery words</Typography>
                                    <Typography component="div" sx={{ pt:'3rem', px: '3rem' }}>
                             
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
                                                        pt: '.5rem',
                                                        textAlign: 'left',
                                                    }}>{index}
                                                </Grid>
                                                <Grid 
                                                    item lg={6} md={6} sm={6} xs={6}
                                                    sx={{ 
                                                        bgcolor: '#f2effd',
                                                        borderRadius: '8px',
                                                        height: '75px',
                                                        p: '1rem',
                                                        pt: '.5rem',
                                                        textAlign: 'left',
                                                    }}>{ ++ index}
                                                </Grid>
                                            </Grid>
                                        )
                                    }
                                    </Typography>
                                    <Typography sx={{ pt: '2rem', px: '3rem' }} component="div">
                                        <Button 
                                            variant="contained" 
                                            sx={{ 
                                                width: '100%', 
                                                bgcolor: '#7C66EB',
                                                borderRadius: '4px',
                                                paddingTop: '12.5px', 
                                                paddingBottom: '12.5px', 
                                                color: '#FFFFFF', 
                                                fontSize: '16px', 
                                            }} 
                                            onClick={handleClickOpen}
                                        >Next</Button>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <SimpleDialog
                open={open}
                onClose={handleClose}
            />
        </>
    );
}

export default Recover;