import { Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import MessageIcon from 'assets/images/icons/Message.svg';

const Message = () => {
    const theme = useTheme();
    return (
        <>
            <Typography
                component="div"
                sx={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    bgcolor: '#735DE3',
                    bottom: '34px',
                    right: '28px',
                    position: 'fixed',
                    padding: '15px',
                    zIndex: theme.zIndex.speedDial
                }}
            >
                <img src={MessageIcon} />
                <Typography
                    component="div"
                    sx={{
                        top: 0,
                        right: '4px',
                        position: 'absolute',
                        width: '16px',
                        height: '16px',
                        bgcolor: '#DF156A',
                        borderRadius: '50%'
                    }}
                ></Typography>
            </Typography>
        </>
    )
}

export default Message;