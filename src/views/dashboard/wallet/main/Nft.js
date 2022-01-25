import { useState } from 'react';

// material-ui
import { useSelector } from 'react-redux';
import { useTheme, styled } from '@mui/material/styles';
import { 
    Grid, 
    Typography, 
    Stack, 
    Button, 
    Card, 
    CardMedia, 
    CardContent,
    Box
} from '@mui/material';
import { Link } from 'react-router-dom';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import CreateNFT from './CreateNFT';
import CardImage from 'assets/images/img stack.png';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';

// assets
import Subtract from 'assets/images/icons/Subtract.svg';

const cards = [1, 1, 1, 1]
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

const Nft = () => {
    const customization = useSelector((state) => state.customization);

    const [openNFT, setOpenNFT] = useState(false);
    const [step, setStep] = useState(false);
    let index = 0;
    
    const handleCloseNFT = () => {
        setOpenNFT(false);
    };
      
    const handleClickNFT = () => {
        setOpenNFT(true);
    }


    return (
        <>
        {step == false 
        ?
            <Grid lg={12} md={12} item sx={{
                bgcolor: '#f8fafc',
                mr: 1,
                p: 3,
                borderRadius: `${customization.borderRadius}px`,  
            }}>
                <Typography sx={{
                    fontWeight: 600,
                    fontSize: '18px',
                    lineHeight: '120.5%',
                    color: '#485068',
                    pb: 3
                }}>NFT</Typography>
                <Grid lg={6} md={6} sm={12} item sx={{ pr: 3 }}>
                    <CardWrapper border={false} content={false}>
                        <Stack onClick={handleClickNFT} sx={{ cursor: 'pointer' }}>
                            <Box sx={{ p: 2.25 }}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Grid container justifyContent="center">
                                            <Grid item>
                                                <img style={{ paddingTop: '1.5625rem'}} src={Subtract} />
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
                        </Stack>
                    </CardWrapper>
                </Grid>
            </Grid>
        :   
            <Grid lg={12} md={12} item sx={{
                bgcolor: '#f8fafc',
                mr: 1,
                p: 3,
                pt: '15px',
                pb: 4,
                borderRadius: `${customization.borderRadius}px`,  
            }}>
                <Stack flexDirection="row" alignItems={'center'} justifyContent="space-between" pb={2.5}>
                    <Typography sx={{
                        fontWeight: 600,
                        fontSize: '18px',
                        lineHeight: '120.5%',
                        color: '#485068'
                    }}>NFT</Typography>
                    <Button sx={{
                        background: 'rgba(124, 102, 235, 0.1)',
                        borderRadius: '4px',
                        p: 1,
                        px: 3.5,
                        fontSize: '14px',
                        lineHeight: '132.5%',
                        color: '#7C66EB'
                    }}>+ Add NFT</Button>
                </Stack>
                <Stack>
                    <Grid container sx={{ gap: '12px', flexWrap: 'nowrap' }}>
                        { cards.map( () => 
                        <Grid lg={3} md={3} item sx={{ flex: '1 1 auto' }} key={index ++}>
                            <Link to="/wallet/collection" style={{ textDecoration: 'none' }}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="180px"
                                        image={CardImage}
                                        alt="Card Image"
                                        sx={{
                                            p: .5,
                                            borderRadius: 3
                                        }}
                                    >

                                    </CardMedia>
                                    <CardContent sx={{ p: 2, pt: 1 }}>
                                        <Typography
                                            sx={{
                                                fontWeight: 500,
                                                fontSize: '14px',
                                                lineHeight: '132.5%',
                                                color: '#162534',
                                            }}
                                        >Collection 1</Typography>
                                        <Typography
                                            sx={{
                                                fontWeight: 500,
                                                fontSize: '12px',
                                                lineHeight: '150%',
                                                color: '#98A1AA',
                                            }}
                                        >131</Typography>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                        )}
                    </Grid>
                </Stack>
            </Grid>
        }
            <CreateNFT 
                open={openNFT}
                onClose={handleCloseNFT}
                onStep={setStep}
            />
        </>
    );
};

export default Nft;
