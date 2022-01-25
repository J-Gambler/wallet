import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/default')));
const First = Loadable(lazy(() => import('views/dashboard/wallet/first')));
const Create = Loadable(lazy(() => import('views/dashboard/wallet/create')));
const BackUp = Loadable(lazy(() => import('views/dashboard/wallet/create/backup')));
const Word = Loadable(lazy(() => import('views/dashboard/wallet/create/backup/Word')));
const Last = Loadable(lazy(() => import('views/dashboard/wallet/create/backup/Last')));
const Main = Loadable(lazy(() => import('views/dashboard/wallet/main')));
const Collection = Loadable(lazy(() => import('views/dashboard/wallet/collection')));
const Recover = Loadable(lazy(() => import('views/dashboard/wallet/recover')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard',
            element: <DashboardDefault />
        },
        {
            path: '/wallet',
            element: <First />
        },
        {
            path: '/wallet/first',
            element: <First />
        },
        {
            path: '/wallet/create',
            element: <Create />
        },
        {
            path: '/wallet/create/backup',
            element: <BackUp />
        },
        {
            path: '/wallet/create/backup/word',
            element: <Word />
        },
        {
            path: '/wallet/create/backup/last',
            element: <Last />
        },
        {
            path: '/wallet/recover',
            element: <Recover />
        },
        {
            path: '/wallet/main',
            element: <Main />
        },
        {
            path: '/wallet/collection',
            element: <Collection />
        },
        {
            path: '/utils/util-typography',
            element: <UtilsTypography />
        },
        {
            path: '/utils/util-color',
            element: <UtilsColor />
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow />
        },
        {
            path: '/icons/tabler-icons',
            element: <UtilsTablerIcons />
        },
        {
            path: '/icons/material-icons',
            element: <UtilsMaterialIcons />
        },
        {
            path: '/sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
