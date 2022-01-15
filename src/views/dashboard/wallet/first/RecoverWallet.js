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
import RecoverIcon from 'assets/images/icons/recover.svg';

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
                <CardWrapper border={false} content={false} sx={{ position: 'relatvie' }}>
                    <Link to="/wallet/recover" style={{ textDecoration: 'none' }}>
                        <Box sx={{ p: 2.25 }}>
                            <Grid container direction="column">
                                <Grid item>
                                    <Grid container justifyContent="center">
                                        <Grid item>
                                            <img src={RecoverIcon} style={{ paddingTop: '2.5rem' }}/>
                                                {/* <RecoverIcon sx={{ color: '#fff', fontSize: 53 }}/> */}
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
                                            color: '#d8d1f9'
                                        }}
                                    >
                                        I already have a wallet
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Link>
                    <Typography 
                        sx={{
                            position: 'absolute',
                            width: '158.6px',
                            height: '158.6px',
                            left: '269.6px',
                            top: '-79px',

                            background: '#AC9BFF',
                            filter: 'blur(41.4663px)',
                            transform: 'rotate(90deg)'
                        }}
                    ></Typography>
                    <Typography
                        sx={{
                            position: 'absolute',
                            width: '128.07px',
                            height: '128.07px',
                            left: '-51.93px',
                            top: '36px',
                            background: '#AC9BFF',
                            filter: 'blur(48.421px)',
                            transform: 'rotate(90deg)',
                        }}
                    >

                    </Typography>
                </CardWrapper>
            )}
        </>
    );
};

RecoverWallet.propTypes = {
    isLoading: PropTypes.bool
};

export default RecoverWallet;
