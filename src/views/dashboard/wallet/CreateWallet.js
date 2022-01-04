import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box, Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';

// assets
import AddIcon from '@mui/icons-material/Add';

const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: '#e5edfa',
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
    '&>div': {
        position: 'relative',
        zIndex: 5
    }
}));

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const CreateWallet = ({ isLoading }) => {
    const theme = useTheme();

    const [timeValue, setTimeValue] = useState(false);
    const handleChangeTime = (event, newValue) => {
        setTimeValue(newValue);
    };

    return (
        <>
            {isLoading ? (
                <SkeletonTotalOrderCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 2.25 }}>
                        <Grid container direction="column">
                            <Grid item>
                                <Grid container justifyContent="center">
                                    <Grid item>
                                        <Avatar
                                            variant="rounded"
                                            sx={{
                                                ...theme.typography.commonAvatar,
                                                ...theme.typography.largeAvatar,
                                                // backgroundColor: theme.palette.secondary[800],
                                                backgroundColor: 'transparent',
                                                mt: 1
                                            }}
                                        >
                                            <AddIcon sx={{ color: '#000', fontSize: 60 }}/>
                                        </Avatar>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sx={{ mb: 0.75 }}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Grid container justifyContent="center">
                                            <Grid item>
                                                    <Typography sx={{ textAlign: 'center', fontSize: '1.25rem', color: '#000', fontWeight: 500, mr: 1, mt: 3, mb: 2.75 }}>
                                                        Create Wallet
                                                    </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

CreateWallet.propTypes = {
    isLoading: PropTypes.bool
};

export default CreateWallet;
