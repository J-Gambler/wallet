import { useState, useEffect } from 'react';

import { Typography, Button, Box } from '@mui/material';
import BackButton from '../BackButton';

const BackUp = () => {
    return (
        <>
            <BackButton url="/wallet/create" />
            <Box>
                <Typography>Back up your wallet now</Typography>
                <Typography>In the next step you will see 12 words that allow you to recover a wallet</Typography>
            </Box>
        </>
    );
}

export default BackUp;