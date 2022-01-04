import LogoPNG from 'assets/images/logo.png';
import { Typography } from '@mui/material';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    return (
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
         *
         * <img src={logo} alt="Berry" width="100" />
         *
         */
        <>
            <img src={LogoPNG} alt="X-PHY" width="100" height="50" />
            <Typography 
                component="span" 
                sx={{     
                    fontSize: 26,
                    position: 'relative',
                    top: -2,
                }}
            >DOG</Typography>
        </>
    );
};

export default Logo;
