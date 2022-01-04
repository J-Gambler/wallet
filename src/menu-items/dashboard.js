// assets
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

// constant
const icons = { GridViewOutlinedIcon, FolderOpenOutlinedIcon, CloudOutlinedIcon, AccountBalanceWalletOutlinedIcon };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard',
            icon: icons.GridViewOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'storage',
            title: 'Storage',
            type: 'item',
            url: '/storage',
            icon: icons.FolderOpenOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'cloud',
            title: 'Cloud',
            type: 'item',
            url: '/cloud',
            icon: icons.CloudOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'wallet',
            title: 'My Wallet',
            type: 'item',
            url: '/wallet',
            icon: icons.AccountBalanceWalletOutlinedIcon,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
