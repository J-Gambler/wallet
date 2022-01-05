import { Typography, Button, Grid } from "@mui/material";
import { useState, useEffect } from "react";

import Balance from "./Balance";
import Tokens from './Tokens';
import History from './History';

import EastIcon from '@mui/icons-material/East';
import TuneIcon from '@mui/icons-material/Tune';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Main = () => {
    return (
        <>
            <Typography component="div" sx={{ marginLeft: 'auto', textAlign: 'right' }}>
                <Button variant="outlined" startIcon={<TuneIcon />}>Token List</Button>
                <Button variant="outlined" startIcon={<SettingsOutlinedIcon />} sx={{ ml: '.5rem' }}>Wallet Settings</Button>
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
        </>
    );
}

export default Main;