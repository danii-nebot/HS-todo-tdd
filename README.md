# HS Unit Test Assignment

Fork this repository, then clone it in your local development environment and work your way through the levels.

You **should not** need to run the application with `npm run dev` (but you can of course if you are curious).

## Level 0

The Counter component test is passing, but it's not following best Unit Testing practices for testing Vue Components. Can you spot what is wrong, and fix it?

Tip: you can run `npm run test:unit Counter` to run the tests for this component in isolation.

## Level 0.5

Use **TDD** (Test Driven Development) to build this simple TODO list component.

Tip: you can run `npm run test:unit Todo` to run the tests for this component in isolation.

## Level 1

Use **TDD** (Test Driven Development) to build this component that loads asynchronous data using fetch using the `onMounted` hook.

Tip: you can run `npm run test:unit OnMounted` to run the tests for this component in isolation.

## Level 2

Finish the Unit Tests for MovieList, MovieCard and Ratings components.

Some tests are not following best practices, some functionalities in the components are not finished so the current tests are not passing, and some test cases are missing. And do not forget to complete the unit tests for the utils library moonScore!

Please read carefully the comments in the tests, as they will give you tips and pointers.

Once you are finished, running `npm run test:coverage MovieList` should pass all the tests, report full green coverage and not output any errors, and same with `npm run test:coverage moonScore`.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
