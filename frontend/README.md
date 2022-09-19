# 702 Fitts Law App

## Setup

```sh
# Install dependencies
yarn
# Run the app in development
yarn start
```

## Levels

The user plays through mulitple levels, and can control different UI elements in each level. The levels are defined in `src/common/levels.tsx`.

The variables the user can control are defined in `src/common/variables.ts`.

Each level has a corresponding tutorial and info screen that is defined in the `src/components/game/instructions` folder
