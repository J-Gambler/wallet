import { useState, useEffect, forwardRef } from 'react';
import { CardContent, CardHeader, CardMedia, Dialog, Card, Typography, Stack, Box, Button, Link } from '@mui/material';


import CollectionImage from 'assets/images/collection.png';

const properties = [
    { header: 'Background', title: 'Blur', subTitle: '7% have this trait' },
    { header: 'Color', title: 'Light', subTitle: '10% have this trait' },
    { header: 'Object', title: 'Tablet', subTitle: '5% have this trait' },
    { header: 'Color', title: 'Light', subTitle: '10% have this trait' },
]

const MintInfo = ({open, onClose}) => {

    const [step, setStep] = useState (1);
    
    const handleClose = () => {
        onClose(true);
        setStep(1)
    }

    const next = () => {
        let newStep = step + 1
        setStep(newStep);
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="md"
                sx={{
                    bgcolor: 'rgba(13, 15, 29, 0.7)',
                    '& .MuiPaper-root': {
                        // bgcolor: 'transparent !important',
                        boxShadow: 'none',
                    }
                }}
            >
                <Card 
                    sx={{
                        background: '#FFFFFF !important',
                        borderRadius: '12px',
                        width: '550px',
                        overflow: 'auto',
                        p: 1
                    }}
                >
                    <CardMedia 
                        // component="img"
                        image={ CollectionImage }
                        sx={{
                            width: '100%',
                            height: '288px',
                            background: 'linear-gradient(0deg, rgba(22, 37, 52, 0.1), rgba(22, 37, 52, 0.1)), #FFFFFF',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '100% 100%',
                            borderRadius: '8px',
                            position: 'relative',
                        }}
                    >
                        <Stack direction="row" justifyContent="space-between" alignItems="center" p="20px" sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
                            <Typography
                                sx={{
                                    fontWeight: 600,
                                    fontSize: '26px',
                                    lineHeight: '33px',
                                    color: '#FFFFFF',
                                }}
                            >NFT Game</Typography>
                        </Stack>
                    </CardMedia>
                    <CardContent 
                        sx={{
                            py: 2, 
                            px: 3.5
                        }}
                    >
                        <Stack pt={1}
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, auto)',
                                gap: '12px',
                            }}
                        >
                        { properties.map( e => 
                            <Box 
                                sx={{
                                    background: 'rgba(124, 102, 235, 0.1)',
                                    borderRadius: '8px',
                                }}
                            >
                                <CardHeader
                                    sx={{
                                        py: 1,
                                        px: 2,
                                        pl: e.avatar ? 0 : 2,
                                        alignItems: 'flex-start',
                                        '& .css-1ssile9-MuiCardHeader-avatar': {
                                            marginRight: '0px'
                                        }
                                    }}
                                    title={
                                        <>
                                            <Typography
                                                sx={{
                                                    fontSize: '14px',
                                                    lineHeight: '124.52%',
                                                    color: '#232323',
                                                }}
                                            >{e.header}</Typography>
                                            <Typography sx={{
                                                fontWeight: 600,
                                                fontSize: '22px',
                                                lineHeight: '27.4px',
                                                color: '#7C66EB',
                                            }}>{e.title}</Typography>
                                        </>
                                    }
                                    subheader={
                                        <Typography
                                            sx={{
                                                pt: 1,
                                                fontSize: '14px',
                                                lineHeight: '20px',
                                                color: '#485068'
                                            }}
                                        >{e.subTitle}</Typography>
                                    }
                                />
                            </Box>
                        )}
                        </Stack>
                    </CardContent>
                </Card>
            </Dialog>
        </>
    );
}

export default MintInfo;
