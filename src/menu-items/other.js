// assets
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

// constant
const icons = { SettingsOutlinedIcon };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'other',
    type: 'group',
    children: [
        {
            id: 'settings',
            title: 'Settings',
            type: 'item',
            url: '/settings',
            icon: icons.SettingsOutlinedIcon,
            breadcrumbs: false
        }
    ]
};

export default other;
