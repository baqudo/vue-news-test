# Front-end test task: News application (Vue 3)

This template should help get you started developing with Vue 3 in Vite.

## Goal

Build a small SPA that displays news content. We want to see Vue 3 fundamentals, async data flow, sensible state
management, and a clean structure. Questions welcome.

## Time expectation

- Estimation is around 3-4 hours. We don't want you to spend more than that.
- If you run out of time, prioritize clarity and correctness over extra features.
- Add a short **“Next steps”** section in the README (what you’d improve with more time).

## Scope

### Layout

Create a responsive layout (mobile + desktop) that includes:

- header/user info area
- main content with news
- footer with contacts/links

### News list

A list of news items where each item shows:

- image
- title
- short description
- author
- publication date

### News details (optional page, do if you have time)

A details page accessible from the list. Has same as list items, but without description and has a news text.

## [Design](https://www.figma.com/design/xH85WATOooV8cSb6bkMqlE/Test-task)

Follow the design direction; implementation details are up to you (pixel-perfect not required).

## Data (async)

- Load news **asynchronously** using **mock data** (local JSON or similar).
- No real API integration is required.

## State management (Pinia)

Use Pinia where shared state makes sense.

## Code quality

- Meaningful structure and component split (avoid “everything in one file”)
- Clear naming and readable code
- TypeScript usage preferable as we're using it in our projects
- Avoid overengineering

## UI/UX

- Should work well on mobile and desktop.
- Pay attention to typical app behavior and small details (your judgment).

## Deliverables

- Git repository with the solution
- `README.md` with:
    - brief notes on decisions (structure/state/data approach) if you want
    - “Next steps”, if you didn't have enough time to implement everything you wanted

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run eslint-fix
```
