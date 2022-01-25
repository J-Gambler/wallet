import { useState, useEffect } from 'react';
import { 
    Box, 
    Stack, 
    Button, 
    Typography, 
    Breadcrumbs, 
    Divider, 
    CardMedia,
    Card,
    CardContent,
    Link
} from '@mui/material';
// import { Link } from 'react-router-dom';

import Info from './Info';
import Mint from './Mint';
import MintInfo from './MintInfo';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CoinIcon from 'assets/images/icons/Coin.png';
import InfoIcon from 'assets/images/icons/Info.png';

const imageCount = 16;
const images = require.context('assets/images/nft', true);
const slideImages = [];

for( let i = 1; i <= imageCount ; i ++ ) {
    const image = images(`./${i}.png`);
    slideImages.push(image);
}

const cards = [1, 1, 1, 1, 1, 1, 1, 1];

const Collection = () => {

    let index = 0;

    const [openInfo, setOpenInfo] = useState(false);
    const [openMint, setOpenMint] = useState(false);
    const [openMintInfo, setOpenMintInfo] = useState(false);
    
    const handleCloseInfo = () => {
        setOpenInfo(false);
    };
      
    const handleClickInfo = () => {
        setOpenInfo(true);
    }

    const handleCloseMint = () => {
        setOpenMint(false);
    };
      
    const handleClickMint = () => {
        setOpenMint(true);
    }

    const handleCloseMintInfo = () => {
        setOpenMintInfo(false);
    };
      
    const handleClickMintInfo = () => {
        setOpenMintInfo(true);
    }

    return (
            <>
                <Box
                    sx={{
                        background: '#F8FAFC',
                        borderRadius: '20px',
                        zIndex: 1
                    }}
                >
                    <Stack 
                        alignItems="center" 
                        direction="row" 
                        justifyContent="space-between"
                        p={1.5}
                        pl="30px"
                    >
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" to="/">
                                NFT
                            </Link>
                            <Typography color="text.primary">Collection 1</Typography>
                        </Breadcrumbs>
                        <Box>
                            <Button 
                                onClick={handleClickMint}
                                sx={{
                                    background: '#7C66EB',
                                    borderRadius: '4px',
                                    fontWeight: 500,
                                    fontSize: '12px',
                                    lineHeight: '150%',
                                    textAlign: 'center',
                                    color: '#FFFFFF',
                                    py: 1,
                                    px: 2
                                }}
                                startIcon={
                                    <img src={ CoinIcon } />
                                }
                            >Mint NFT</Button>
                            <Button
                                onClick={handleClickInfo}
                                sx={{
                                    background: '#7C66EB',
                                    borderRadius: '4px',
                                    fontWeight: 500,
                                    fontSize: '12px',
                                    lineHeight: '150%',
                                    textAlign: 'center',
                                    color: '#FFFFFF',
                                    py: 1,
                                    px: 2,
                                    ml: 1.5
                                }}
                                startIcon={
                                    <img src={ InfoIcon } />
                                }
                            >Collection Information</Button>
                        </Box>
                    </Stack>
                    <Divider />
                    <Box>
                        <Stack direction="row" p="30px" pt="35px" pb="20px">
                            <Button 
                                endIcon={<ExpandMoreIcon sx={{ color: "#485068" }} />}
                                sx={{
                                    p: 1,
                                    px: 1.5,
                                    background: 'rgba(68, 189, 255, 0.1)',
                                    borderRadius: '4px'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                        lineHeight: '150%',
                                        color: '#8F91A5',
                                        fontWeight: 500
                                    }}
                                >Type:&nbsp;</Typography>
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                        lineHeight: '150%',
                                        color: '#485068',
                                        fontWeight: 600
                                    }}
                                >All</Typography>
                            </Button>
                            <Button 
                                endIcon={<ExpandMoreIcon sx={{ color: "#485068" }} />}
                                sx={{
                                    p: 1,
                                    px: 1.5,
                                    ml: 1, 
                                    background: 'rgba(68, 189, 255, 0.1)',
                                    borderRadius: '4px'
                                }}
                            >
                                <Typography 
                                    sx={{
                                        fontSize: '12px',
                                        lineHeight: '150%',
                                        color: '#8F91A5',
                                        fontWeight: 500
                                    }}
                                >Sort by:&nbsp;</Typography>
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                        lineHeight: '150%',
                                        color: '#485068',
                                        fontWeight: 600
                                    }}
                                >Newest</Typography>
                            </Button>
                        </Stack>
                        <Stack direction="row" 
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(8, auto)',
                                gap: '12px',
                                px: '30px',
                                pb: '50px'
                            }}
                        >
                            { slideImages.map ( e => 
                            <Card key={ index++ } sx={{ cursor: 'pointer' }} onClick={handleClickMintInfo}>
                                <CardMedia
                                    component="img"
                                    height="120px"
                                    image={e.default}
                                    alt="Card Image"
                                    sx={{
                                        p: .5,
                                        borderRadius: 3
                                    }}
                                >
                                </CardMedia>
                                <CardContent sx={{ p: 1.5, pb: "16px !important" }}>
                                    <Typography component="div" 
                                        sx={{ 
                                            fontWeight: 500,
                                            fontSize: '12px',
                                            lineHeight: '150%',
                                            textAlign: 'center',
                                            color: '#162534'
                                        }}
                                    >Image 1.png</Typography>
                                </CardContent>
                            </Card>
                            )}
                        </Stack>
                    </Box>
                </Box>
                <Info
                    open={openInfo}
                    onClose={handleCloseInfo}
                />
                <Mint
                    open={openMint}
                    onClose={handleCloseMint}
                />
                <MintInfo
                    open={openMintInfo}
                    onClose={handleCloseMintInfo}
                />
            </>
    );
}

export default Collection;