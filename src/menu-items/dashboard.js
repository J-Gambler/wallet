// assets
import Dashboard from 'assets/images/icons/Dashboard.svg';
import Storage from 'assets/images/icons/Storage.svg';
import Cloud from 'assets/images/icons/Cloud.svg';
import Wallet from 'assets/images/icons/Wallet.svg';



import DashboardIcon from 'ui-component/icons/DashboardIcon';
import StorageIcon from 'ui-component/icons/StorageIcon';
import CloudIcon from 'ui-component/icons/CloudIcon';
import WalletIcon from 'ui-component/icons/WalletIcon';
// constant
const icons = { Dashboard, Storage, Cloud, Wallet };

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
            icon: icons.Dashboard,
            breadcrumbs: false
        },
        {
            id: 'storage',
            title: 'Storage',
            type: 'item',
            url: '/storage',
            icon: icons.Storage,
            breadcrumbs: false
        },
        {
            id: 'cloud',
            title: 'Cloud',
            type: 'item',
            url: '/cloud',
            icon: icons.Cloud,
            breadcrumbs: false
        },
        {
            id: 'wallet',
            title: 'My Wallet',
            type: 'item',
            url: '/wallet',
            icon: icons.Wallet,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
