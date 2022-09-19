/**
 * Defines the different variables the user can control.
 */
export enum Variable {
  // Navbar UI
  navbarItemSize = 'navbarItemSize',
  // Message UI
  messagePosition = 'messagePosition',
  messageSize = 'messageSize',
  // React UI
  reactPosition = 'reactPosition',
  reactSpacing = 'reactSpacing',
  reactSize = 'reactSize',
}

export interface VariableInfo {
  label: string;
  min: number;
  max: number;
  default: number;
}

/**
 * Defines how a user can interact with each variable
 */
export const VariableData: { [k in Variable]: VariableInfo } = {
  messagePosition: {
    label: 'Message Position',
    min: 0,
    max: 10,
    default: 5,
  },
  messageSize: {
    label: 'Message Size',
    min: 0,
    max: 10,
    default: 5,
  },

  navbarItemSize: {
    label: 'Navbar Item Size',
    min: 0,
    max: 10,
    default: 5,
  },
  reactPosition: {
    label: 'React Position',
    min: 0,
    max: 10,
    default: 5,
  },
  reactSpacing: {
    label: 'React Spacing',
    min: 0,
    max: 10,
    default: 5,
  },
  reactSize: {
    label: 'React Size',
    min: 0,
    max: 10,
    default: 5,
  },
};
