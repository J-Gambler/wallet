import { Typography, Button, Grid } from "@mui/material";
import { useState, useEffect } from "react";

import Balance from "./Balance";
import Tokens from './Tokens';
import History from './History';
import Search from './Search';
import Market from "./Market";

import EastIcon from '@mui/icons-material/East';
import TuneIcon from '@mui/icons-material/Tune';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Main = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [openMarket, setOpenMarket] = useState(false);

    const handleClickSearch = () => {
        setOpenSearch(true)
    }

    const handleCloseSearch = () => {
        setOpenSearch(false);
    }

    const handleClickMarket = () => {
        setOpenMarket(true);
    }

    const handleCloseMarket = () => {
        setOpenMarket(false);
    }

    return (
        <>
            <Typography component="div" sx={{ marginLeft: 'auto', textAlign: 'right' }}>
                <Button variant="outlined" startIcon={<TuneIcon />} onClick={handleClickSearch}>Token List</Button>
                <Button variant="outlined" startIcon={<SettingsOutlinedIcon />} onClick={handleClickMarket} sx={{ ml: '.5rem' }}>Wallet Settings</Button>
            </Typography>
            <Grid container>
                <Grid lg={12} md={12} item>
                    <Balance />
                </Grid>
                <Grid lg={6} md={12} item>
                    <Tokens />
                </Grid>
                <Grid lg={6} md={12} item>
                    <History />
                </Grid>
            </Grid>
            <Search 
                open={openSearch}
                onClose={handleCloseSearch}
            />
            <Market 
                open={openMarket}
                onClose={handleCloseMarket}
            />
        </>
    );
}

export default Main;