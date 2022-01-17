import { Link } from 'react-router-dom';

import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const BackButton = ({ url }) => {
    return (
        <>
            <Link to={url} style={{ textDecoration: 'none' }}>
                <Button 
                    sx={{ color: 'rgba(22, 37, 52, 0.5)' }}
                > &lt; Back</Button>
            </Link>
        </>
    );
}

export default BackButton;