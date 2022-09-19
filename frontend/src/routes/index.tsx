import { RouteObject } from 'react-router-dom';
import { GameLayout } from '../pages/game/Layout';
import { Results } from '../pages/game/Results';
import { Instructions } from '../pages/instructions';
import { Layout } from '../pages/Layout';
import { Questionaire } from '../pages/reflections/Questionaire';

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
      {
        path: '/reflections',
        element: <Questionaire />,
      },
      {
        path: 'results',
        element: <Results />,
      },
    ],
  },
];
