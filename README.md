# Codecamp Exercise: tRPC & Server Actions

## Learning Objectives

- Create a tRPC router with query and mutation procedures
- Write domain functions that encapsulate business logic
- Validate input using Zod schemas
- Call domain functions from thin tRPC router wrappers
- Understand the separation between routers (transport) and domain (logic)

## Exercise Instructions

### Setup

1. **Fork** this repository and **clone** your fork
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server

### Step 1: Write Domain Functions (`src/domain/todos.ts`)

Implement the following business logic functions:

- `listTodos({ db })` — return all todos from the store
- `createTodo({ db, input })` — validate input, add a todo, return it
- `toggleTodo({ db, input })` — toggle a todo's `completed` status
- `deleteTodo({ db, input })` — remove a todo by ID

Each function receives `{ db }` (the data store) and `{ input }` (validated data).

### Step 2: Define Zod Input Schemas (`src/routers/schemas.ts`)

- `createTodoSchema` — `{ title: string }` (non-empty, max 100 chars)
- `toggleTodoSchema` — `{ id: string }`
- `deleteTodoSchema` — `{ id: string }`

### Step 3: Wire tRPC Router (`src/routers/todo.ts`)

Create a tRPC router with:

- `list` — a `query` that calls `listTodos`
- `create` — a `mutation` with `createTodoSchema` input that calls `createTodo`
- `toggle` — a `mutation` with `toggleTodoSchema` input that calls `toggleTodo`
- `delete` — a `mutation` with `deleteTodoSchema` input that calls `deleteTodo`

### Step 4: Run Tests

- Run `npm test` to verify your implementations

## Acceptance Criteria

- [ ] Domain functions are pure — no tRPC imports in `domain/todos.ts`
- [ ] Zod schemas validate input correctly (reject empty titles, etc.)
- [ ] tRPC router procedures are thin wrappers that call domain functions
- [ ] `list` query returns all todos
- [ ] `create` mutation adds a todo and returns it
- [ ] `toggle` mutation flips the `completed` boolean
- [ ] `delete` mutation removes the todo
- [ ] `npm test` passes with all tests green

## File Structure

```
codecamp-exercise-trpc-server-actions/
├── README.md
├── LICENSE
├── .gitignore
├── package.json
├── tsconfig.json
├── src/
│   ├── trpc.ts                  # tRPC initialization (provided)
│   ├── store.ts                 # In-memory todo store (provided)
│   ├── domain/
│   │   └── todos.ts             # TODO: Implement domain functions
│   ├── routers/
│   │   ├── schemas.ts           # TODO: Define Zod input schemas
│   │   └── todo.ts              # TODO: Wire tRPC router
│   └── __tests__/
│       ├── domain.test.ts       # Tests for domain functions
│       └── router.test.ts       # Tests for tRPC router
```

## Commands

```bash
npm install     # Install dependencies
npm run dev     # Start dev server
npm test        # Run all tests
```

## Tips

- Domain functions should never import from `@trpc/server` — keep them pure
- Use `z.string().min(1).max(100)` for title validation
- tRPC router procedures: `.input(schema).query(...)` or `.mutation(...)`
- Check the tRPC docs at https://trpc.io/docs/quickstart
