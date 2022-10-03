import { Level1Instructions } from '../components/game/instructions/Level1Instructions';
import { Level1Tutorial } from '../components/game/instructions/Level1Tutorial';
import { Level2Instructions } from '../components/game/instructions/Level2Instructions';
import { Level2Tutorial } from '../components/game/instructions/Level2Tutorial';
import { Level3Instructions } from '../components/game/instructions/Level3Instructions';
import { Level3Tutorial } from '../components/game/instructions/Level3Tutorial';
import { Level4Instructions } from '../components/game/instructions/Level4Instructions';
import { Level4Tutorial } from '../components/game/instructions/Level4Tutorial';
import { Variable } from './variables';

export interface Level {
  description: React.ReactElement;
  tutorial?: React.ReactElement;
  variables: Variable[];
}

export const LEVELS: Level[] = [
  // The first level the user has no control over the UI
  {
    tutorial: <Level1Tutorial />,
    description: <Level1Instructions />,
    variables: [],
  },
  //   The user can adjust the navbar
  {
    tutorial: <Level2Tutorial />,
    description: <Level2Instructions />,
    variables: [Variable.navbarItemSize],
  },
  // The user can adjust the message
  {
    tutorial: <Level3Tutorial />,
    description: <Level3Instructions />,
    variables: [Variable.messageSize, Variable.messagePosition],
  },
  // The user can adjust the react bar
  {
    tutorial: <Level4Tutorial />,
    description: <Level4Instructions />,
    variables: [
      Variable.reactButtonSize,
      Variable.reactBarSize,
      Variable.reactSpacing,
    ],
  },
];
