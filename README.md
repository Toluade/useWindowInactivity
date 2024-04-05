# useWindowInactivity

A React hook that returns the inactivity state of a window.

### Props

- `delay: number`
  - This is the amount of time (in seconds) it takes to return a positive inactive state.
  - Default value is `5` seconds.

## inactive

```ts
const inactive = useWindowInactivity(5);
```

- `inactive: boolean`
  - Returns `true` when the window is inactive after the number of seconds passed to the `useWindowInactivity` hook.
  - Returns `false` when window is active.

## Install

npm

```sh npm
npm i @toluade/use-window-inactivity --save
```

yarn

```sh yarn
yarn add @toluade/use-window-inactivity
```

## Example Usage

```ts
import useWindowInactivity from "use-window-inactivity";

function App() {
  const inactive = useWindowInactivity(5);

  return (
    <div>{inactive ? <p>Window is inactive</p> : <p>Window is active</p>}</div>
  );
}
```
