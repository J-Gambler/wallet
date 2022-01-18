import { useTheme } from '@emotion/react';
import { 
    Typography, 
    Button, 
    Box, 
    Grid,
    Dialog,
} from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const WalletSuccess = (props) => {
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
  
// WalletSuccess.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     open: PropTypes.bool.isRequired,
// };

export default WalletSuccess;