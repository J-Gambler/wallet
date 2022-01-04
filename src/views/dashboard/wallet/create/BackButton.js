import { Link } from 'react-router-dom';

import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const BackButton = ({ url }) => {
    return (
        <>
            <Link to={url} style={{ textDecoration: 'none' }}>
                <Button 
                    sx={{ color: '#616161' }}
                    startIcon={
                        <ArrowBackIosNewIcon sx={{ fontSize: '12px !important' }}/>
                    }
                >Back</Button>
            </Link>
        </>
    );
}

export default BackButton;