// assets
// import SettingIcon from 'ui-component/icons/SettingIcon';
import Setting from 'assets/images/icons/Setting.svg';

// constant
const icons = { Setting };

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
            icon: icons.Setting,
            breadcrumbs: false
        }
    ]
};

export default other;
