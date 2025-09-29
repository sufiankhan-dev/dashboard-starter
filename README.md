# Dashboard Starter Kit

A modern dashboard starter kit built with Next.js 15, Better Auth, and shadcn/ui components.

## Features

- ✅ **Next.js 15** with App Router
- ✅ **Better Auth** for authentication (email/password + Google OAuth)
- ✅ **Dark/Light Mode** with system preference detection
- ✅ **shadcn/ui** components with Tailwind CSS
- ✅ **Drizzle ORM** with PostgreSQL
- ✅ **Responsive Design** with mobile-first approach
- ✅ **TypeScript** for type safety

## Getting Started

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   # or
   bun install
   ```

3. Set up environment variables:

   ```bash
   cp .env.example .env.local
   ```

4. Configure your database and auth providers in `.env.local`

5. Run database migrations:

   ```bash
   npm run db:push
   ```

6. Start the development server:
   ```bash
   npm run dev
   # or
   bun dev
   ```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   └── marketing-page/   # Landing page components
├── features/             # Feature-specific code
│   └── auth/            # Authentication features
├── lib/                 # Utility functions and configurations
└── db/                  # Database schema and configuration
```

## Authentication

The starter kit includes:

- Email/password authentication
- Google OAuth integration
- Session management
- Protected routes

## Database

Uses Drizzle ORM with PostgreSQL. The schema includes:

- User management
- Session handling
- Account linking

## Customization

This is a clean starter kit ready for your customizations:

- Add your own dashboard pages
- Extend the database schema
- Customize the UI components
- Add new features and functionality

## License

MIT

