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
import BackButton from '../BackButton';
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
                <HighlightOffIcon sx={{ fontSize: '5rem', color: theme.palette.common.white }} />
            </Typography>
            <Typography sx={{ color: 'white', fontSize: '1.25rem', textAlign: 'center' }}>Sorry, the entered word is incorrect</Typography>
            <Typography sx={{ color: 'white', fontSize: '.875rem', textAlign: 'center', pt: '1rem', pb: '3rem' }}>Try to create a wallet again</Typography>
            <Button sx={{ px: '5rem', textAlign: 'center', py: '12px', bgcolor: '#7c66eb' }} variant="contained">Create a wallet</Button>
            <Typography sx={{ pt: '1rem', fontSize: '.875rem', textAlign: 'center', color: '#aaabb0' }}>Cancel</Typography>
        </Dialog>
    );
}
  
SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

const Last = () => {

    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);
    const progress = [1,0,0,0,0,0]

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
                                        <Button variant="contained" sx={{ width: '100%', bgcolor: '#7c66eb' }} onClick={handleClickOpen}>Next</Button>
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

export default Last;