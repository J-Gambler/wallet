import { useState, useEffect, forwardRef } from 'react';
import { styled } from '@mui/system';
import { CardContent, CardHeader, CardMedia, Dialog, Card, Typography, Stack, Box, Button, Link } from '@mui/material';


import CollectionImage from 'assets/images/collection.png';
import ForestImage from 'assets/images/forest.png';

const blue = {
    200: '#80BFFF',
    400: '#3399FF',
};

const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
};

const StyledInputElement = styled('input')(
    ({ theme }) => `
        width: 100%;
        padding: 16px 16px;
        background: #FFFFFF;
        border: 1px solid #E1E1FF;

        ::placeholder {
            font-size: 16px;
            line-height: 23px;
            color: #98A1AA;
        }

        &:hover {
            background: white;
            border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[400]};
        }

        &:focus {
            outline: 2px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
        }
    `,
);

const CustomInput = forwardRef(function CustomInput(props, ref) {
    return (
        <div style={{ 
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                fontSize: '16px',
                background: 'white',
                border: '1px solid #E1E1FF',
                borderRadius: '4px',
                transition: 'all 150ms ease',
            }}>
            <StyledInputElement {...props} ref={ref}/>
        </div>
    );
});


const Mint = ({open, onClose}) => {

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
                    {
                        step == 1 
                        ?    <CardContent 
                                sx={{
                                    py: 2, 
                                    px: 3.5
                                }}
                            >
                                <Typography>
                                    We collect information from you when you communicate via e-mail, or complete a web inquiry form. 
                                    We may ask you for your name, e-mail address, phone number or other information. 
                                    You may, however, visit our site anonymously.
                                </Typography>
                                <Box pt={5} pb={3}>
                                    <Button 
                                        onClick={next}
                                        sx={{ bgcolor: 'rgba(124, 102, 235, 0.1)', color: '#7C66EB', fontSize: '1rem', width: '100%', py: '.875rem' }}>Send</Button>
                                    </Box>
                            </CardContent>
                        :   step == 2 
                            ?   <CardContent
                                    sx={{
                                        py: 3, 
                                        px: 3.5
                                    }}
                                >
                                    <CustomInput aria-label="Demo input" placeholder="Recipient’s SOL address" />

                                    <Box pt={2} pb={3}>
                                        <Button 
                                            onClick={next}
                                            sx={{ bgcolor: 'rgba(124, 102, 235, 0.1)', color: '#7C66EB', fontSize: '1rem', width: '100%', py: '.875rem' }}>Next</Button>
                                    </Box>
                                </CardContent>
                            :   <CardContent
                                    sx={{
                                        py: 3, 
                                        px: 3.5
                                    }}
                                >
                                    <Stack spacing={2}>
                                        <Stack
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            sx={{
                                                background: '#FFFFFF',
                                                border: '2px solid #F2F6FA',
                                                boxSizing: 'border-box',
                                                borderRadius: '12px',
                                                p: .75
                                            }}
                                        >
                                            <Box pl={1}>
                                                <Typography
                                                    sx={{
                                                        fontWeight: 600,
                                                        fontSize: '12px',
                                                        lineHeight: '15px',
                                                        letterSpacing: '0.01em',
                                                        textTransform: 'uppercase',
                                                        color: 'rgba(22, 37, 52, 0.5)',
                                                    }}
                                                >NFT</Typography>
                                                <Typography
                                                    sx={{
                                                        fontWeight: 500,
                                                        fontSize: '18px',
                                                        lineHeight: '22px',
                                                        color: '#000000'
                                                    }}
                                                >NFT Name</Typography>
                                            </Box>
                                            <Box>
                                                <Box component="img" src={ForestImage} 
                                                    sx={{
                                                        verticalAlign: 'middle',
                                                        background: 'linear-gradient(0deg, rgba(22, 37, 52, 0.1), rgba(22, 37, 52, 0.1)), #FFFFFF',
                                                        borderRadius: '8px'
                                                    }}
                                                />
                                            </Box>
                                        </Stack>
                                        <Stack
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            sx={{
                                                background: '#FFFFFF',
                                                border: '2px solid #F2F6FA',
                                                boxSizing: 'border-box',
                                                borderRadius: '12px',
                                                p: .75
                                            }}
                                        >
                                            <Box pl={1} py={1}>
                                                <Typography
                                                    sx={{
                                                        fontWeight: 600,
                                                        fontSize: '12px',
                                                        lineHeight: '15px',
                                                        letterSpacing: '0.01em',
                                                        textTransform: 'uppercase',
                                                        color: 'rgba(22, 37, 52, 0.5)',
                                                    }}
                                                >Hash address</Typography>
                                                <Typography
                                                    sx={{
                                                        fontWeight: 500,
                                                        fontSize: '18px',
                                                        lineHeight: '22px',
                                                        color: '#000000'
                                                    }}
                                                >2sdfjh3buyfg3u7f3i4f8</Typography>
                                            </Box>
                                        </Stack>
                                        <Stack
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                            sx={{
                                                background: '#FFFFFF',
                                                border: '2px solid #F2F6FA',
                                                boxSizing: 'border-box',
                                                borderRadius: '12px',
                                                p: .75,
                                                py: 3
                                            }}
                                        >
                                            <Box pl={1}>
                                                <Typography
                                                    sx={{
                                                        fontWeight: 500,
                                                        fontSize: '14px',
                                                        lineHeight: '17px',
                                                        color: '#485068',
                                                    }}
                                                >Network Fee</Typography>
                                            </Box>
                                            <Box>
                                                <Typography
                                                    sx={{
                                                        fontWeight: 500,
                                                        fontSize: '18px',
                                                        lineHeight: '22px',
                                                        color: '#162534',
                                                    }}
                                                >$0.02224</Typography>
                                            </Box>
                                        </Stack>
                                    </Stack>
                                    <Box pt={4} pb={3}>
                                        { step > 3 
                                        ?   <Button 
                                                sx={{ bgcolor: '#60BA62', color: '#FFFFFF', fontSize: '1rem', width: '100%', py: '.875rem' }}>Sent!</Button>
                                        : 
                                            <Button 
                                                onClick={next}
                                                sx={{ bgcolor: 'rgba(124, 102, 235, 0.1)', color: '#7C66EB', fontSize: '1rem', width: '100%', py: '.875rem' }}>Confirm & Send</Button>
                                        }
                                    </Box>
                                </CardContent>
                    }
                </Card>
            </Dialog>
        </>
    );
}

export default Mint;
