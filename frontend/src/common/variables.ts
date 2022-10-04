/**
 * Defines the different variables the user can control.
 */
export enum Variable {
  // Navbar UI
  navbarItemSize = 'navbarItemSize',
  // Message UI
  messageSize = 'messageSize',
  // React UI
  reactButtonSize = 'reactButtonSize',
  reactSpacing = 'reactSpacing',
  reactBarSize = 'reactBarSize',
}

export interface VariableInfo {
  label: string;
  min: number;
  max: number;
  default: number;
  unit?: string;
}

/**
 * Defines how a user can interact with each variable
 */
export const VariableData: { [k in Variable]: VariableInfo } = {
  messageSize: {
    label: 'Message Size',
    min: 5,
    max: 14,
    default: 6,
  },
  navbarItemSize: {
    label: 'Navbar Item Height',
    min: 42,
    max: 99,
    default: 50,
  },
  reactButtonSize: {
    label: 'React Button Size',
    min: 2,
    max: 6,
    default: 2,
  },
  reactSpacing: {
    label: 'React Spacing',
    min: 0,
    max: 10,
    default: 7,
  },
  reactBarSize: {
    label: 'React Bar Size',
    min: 2,
    max: 6,
    default: 3,
  },
};
