import { useState, useEffect } from 'react';
import { CardContent, CardHeader, CardMedia, Dialog, Card, Typography, Stack, Box, Button, Link } from '@mui/material';

import CollectionImage from 'assets/images/collection.png';
import EtherIcon from 'assets/images/icons/ether-black.png';
import WorldIcon from 'assets/images/icons/world.png';
import DiscordIcon from 'assets/images/icons/discord.png';
import TwitterIcon from 'assets/images/icons/twitter.png';

const properties = [
    { avatar: null, title: '10.0k', subTitle: 'items' },
    { avatar: null, title: '5.7k', subTitle: 'owners' },
    { avatar: EtherIcon, title: '10.47', subTitle: 'floor price' },
    { avatar: EtherIcon, title: '56.9k', subTitle: 'volume traded' },
    { avatar: EtherIcon, title: '1269.4', subTitle: '7 day volume' },
    { avatar: EtherIcon, title: '10.4', subTitle: '7 day Avg Price' },
    { avatar: null, title: '1283', subTitle: '7 day sales' },
    { avatar: EtherIcon, title: '29369', subTitle: 'One month volume' },
    { avatar: EtherIcon, title: '8.28', subTitle: 'One month Avg Price' },
    { avatar: null, title: '3547', subTitle: 'One month sales' },
]

const Info = ({open, onClose}) => {
    const handleClose = () => {
        onClose(true);
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
                        >Collection 1</Typography>
                        <Stack direction="row" alignItems="center" spacing="8px">
                            <Box sx={{ 
                                width: '44px', 
                                height: '44px',
                                background: 'rgba(255, 255, 255, 0.2)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '4px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Box component="img" src={WorldIcon} sx={{ verticalAlign: 'middle' }}></Box>
                            </Box>
                            <Box sx={{ 
                                width: '44px', 
                                height: '44px',
                                background: 'rgba(255, 255, 255, 0.2)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '4px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Box component="img" src={DiscordIcon} sx={{ verticalAlign: 'middle' }}></Box>
                            </Box>
                            <Box sx={{ 
                                width: '44px', 
                                height: '44px',
                                background: 'rgba(255, 255, 255, 0.2)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '4px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Box component="img" src={TwitterIcon} sx={{ verticalAlign: 'middle' }}></Box>
                            </Box>
                        </Stack>
                    </Stack>
                    </CardMedia>
                    <CardContent 
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
                        <Stack pt={1}
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, auto)',
                                gap: '12px',
                                pt: 4
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
                                    avatar={
                                        e.avatar 
                                        ? <img src={e.avatar} />
                                        : <></>
                                    }
                                    title={
                                        <Typography sx={{
                                            fontWeight: 600,
                                            fontSize: '20px',
                                            lineHeight: '100%',
                                            color: '#7C66EB',
                                        }}>{e.title}</Typography>
                                    }
                                    subheader={
                                        <Typography
                                            sx={{
                                                fontSize: '12px',
                                                fontWeight: 400,
                                                color: '#000000'
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

export default Info;