// assets
import SettingIcon from 'ui-component/icons/SettingIcon';

// constant
const icons = { SettingIcon };

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
            icon: icons.SettingIcon,
            breadcrumbs: false
        }
    ]
};

export default other;
