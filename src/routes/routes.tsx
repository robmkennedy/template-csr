import { createBrowserRouter, Navigate } from 'react-router';
import { App } from '~app/components/App/App';
import { SearchPage } from '~features/search/components/SearchPage/SearchPage';
import { ItemsPage } from '~features/items/components/ItemsPage/ItemsPage';
import { ChartsPage } from '~features/charts/components/ChartsPage/ChartsPage';
import { AboutPage } from '~features/about/components/AboutPage/AboutPage';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            Component: App,
            children: [
                { index: true, element: <Navigate to='/search' /> },
                { path: '/search', Component: SearchPage },
                { path: '/items', Component: ItemsPage },
                { path: '/charts', Component: ChartsPage },
                { path: '/about', Component: AboutPage },
                { path: '/*', element: <Navigate to='/search' /> }
            ]
        }
    ],
    { basename: import.meta.env.BASE_URL }
);
