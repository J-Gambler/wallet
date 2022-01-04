import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, Grid, Menu, MenuItem, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';

// assets
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: '#7C66EB',
    color: '#fff',
    overflow: 'hidden',
    position: 'relative',
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const RecoverWallet = ({ isLoading }) => {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {isLoading ? (
                <SkeletonEarningCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Link to="/wallet/recover" style={{ textDecoration: 'none' }}>
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
                                                <ArrowRightAltIcon sx={{ color: '#fff', fontSize: 53 }}/>
                                            </Avatar>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container justifyContent="center">
                                        <Grid item>
                                            <Typography sx={{ fontSize: '1.25rem', color: '#fff', fontWeight: 600, mr: 1, mt: 1.75, mb: 0.75 }}>
                                                Recover Wallet
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item sx={{ mb: 1.25 }}>
                                    <Typography
                                        sx={{
                                            fontSize: '1rem',
                                            fontWeight: 500,
                                            textAlign: 'center',
                                            color: theme.palette.secondary[200]
                                        }}
                                    >
                                        I already have a wallet
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Link>
                </CardWrapper>
            )}
        </>
    );
};

RecoverWallet.propTypes = {
    isLoading: PropTypes.bool
};

export default RecoverWallet;
