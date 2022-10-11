# 702 Fitts Law App Frontend

## Setup

In the frontend directoy:

```sh
# Install dependencies
yarn
# Run the app in development
yarn start
```

If running the backend server from the different port, make sure to update the url in the `.env` file

## Levels

The user plays through multiple levels, and can control different UI elements in each level. The levels are defined in `src/common/levels.tsx`.

The variables the user can control are defined in `src/common/variables.ts`.

Each level has a corresponding tutorial and info screen that is defined in the `src/components/game/instructions` folder
