# Job Tracker

Job Tracker is a Next.js app for managing job applications on a Kanban board.
It supports email/password authentication, automatic board creation for new
users, and drag-and-drop movement of cards between columns.

## Features

- User authentication with Better Auth (sign up, sign in, sign out)
- Automatic default board setup for each new user
- Kanban dashboard with drag and drop (`@dnd-kit`)
- Create, update, move, and delete job applications
- MongoDB persistence via Mongoose

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4 + shadcn/ui + Radix UI
- Better Auth
- MongoDB + Mongoose
- dnd-kit

## Requirements

- Node.js 20+
- npm
- MongoDB instance (local or remote)

## Environment Variables

Create a `.env` file in the project root:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/job-tracker
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

- `npm run dev` - run development server
- `npm run build` - build production app
- `npm run start` - start production server
- `npm run lint` - run ESLint

## Project Structure

```text
app/
  api/auth/[...all]/route.ts   # Better Auth API handlers
  dashboard/page.tsx           # Main Kanban dashboard
  sign-in/page.tsx             # Sign-in page
  sign-up/page.tsx             # Sign-up page
components/
  kanban-board.tsx             # Board UI and drag/drop logic
  create-job-dialog.tsx        # Create application dialog
  job-application-card.tsx     # Card UI
lib/
  actions/job-applications.ts  # Server actions for CRUD/move
  auth/                        # Auth server/client setup
  db.ts                        # MongoDB connection helper
  models/                      # Mongoose models
  hooks/useBoards.ts           # Client board state hook
  init-user-boart.ts           # Default board initialization for new users
proxy.ts                       # Redirect logged-in users from auth pages
```

## Data Model (High Level)

- `Board`: board metadata + ordered column ids
- `Column`: column metadata + ordered job application ids
- `JobApplication`: company, position, status, notes, salary, links, tags,
  description, order, and ownership fields

## Notes

- New users get a default board (`Job Hunt`) with starter columns.
- Drag-and-drop order is persisted with server actions and dashboard
  revalidation.
