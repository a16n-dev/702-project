import { RouteObject } from 'react-router-dom';
import { GameLayout } from '../pages/game/Layout';
import { Instructions } from '../pages/instructions';
import { Layout } from '../pages/Layout';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Instructions />,
      },
      {
        path: '/game',
        element: <GameLayout />,
      },
    ],
  },
];
