# AGENTS.md

Guidelines for AI agents working in this Astro TypeScript codebase.

## Project Overview

- **Framework**: Astro v5.x (static site generator)
- **Language**: TypeScript (strict mode)
- **Package Manager**: npm
- **Module System**: ES Modules (`"type": "module"`)

## Directory Structure

```
src/
├── pages/          # File-based routing (.astro, .md, .mdx)
├── components/     # Reusable components
├── layouts/        # Page layout components
├── content/        # Content collections
└── lib/            # Utility functions
public/             # Static assets (served as-is)
dist/               # Build output (gitignored)
```

## Build Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Build production site to ./dist/ |
| `npm run preview` | Preview production build locally |
| `npx astro check` | Run TypeScript diagnostics |

## Testing (when configured)

```bash
npm test                              # Run all tests
npx vitest run src/lib/utils.test.ts  # Run single test file
npx vitest run -t "pattern"           # Run tests matching pattern
npx vitest                            # Watch mode
```

## Code Style Guidelines

### File Naming

- **Pages**: `kebab-case.astro` (e.g., `about-us.astro`)
- **Components**: `PascalCase.astro` (e.g., `NavBar.astro`)
- **Utilities**: `camelCase.ts` (e.g., `formatDate.ts`)
- **Tests**: `*.test.ts` or `*.spec.ts`

### Astro Component Structure

```astro
---
// 1. Imports (external first, then local)
import { getCollection } from 'astro:content';
import BaseLayout from '../layouts/BaseLayout.astro';

// 2. Props interface
interface Props { title: string; description?: string; }

// 3. Props destructuring with defaults
const { title, description = 'Default' } = Astro.props;

// 4. Data fetching and logic
const posts = await getCollection('blog');
---
<!-- 5. Template -->
<BaseLayout {title}><h1>{title}</h1></BaseLayout>

<style>/* 6. Scoped styles */</style>
```

### TypeScript Conventions

```typescript
// Explicit types for parameters and returns
function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US');
}

// Interfaces for object shapes
interface BlogPost {
  title: string;
  slug: string;
  publishedAt: Date;
}

// Type for unions; const assertions for literals
type Status = 'draft' | 'published' | 'archived';
const ROUTES = { home: '/', about: '/about' } as const;
```

### Import Order

1. External packages (`astro`, `react`, etc.)
2. Astro virtual modules (`astro:content`, `astro:assets`)
3. Internal aliases (`@/components`)
4. Relative imports (`../`, `./`)

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Variables/Functions | camelCase | `userName`, `formatDate` |
| Constants | UPPER_SNAKE_CASE | `MAX_ITEMS`, `API_URL` |
| Types/Interfaces | PascalCase | `UserProfile`, `BlogPost` |
| Components | PascalCase | `NavBar.astro` |
| CSS classes | kebab-case | `nav-bar` |
| Pages | kebab-case | `about-us.astro` |

### Error Handling

```typescript
// Try-catch for async operations
try {
  const data = await fetchData();
} catch (error) {
  console.error('Failed to fetch:', error);
}

// Validate external data with Zod
import { z } from 'zod';

const PostSchema = z.object({
  title: z.string().min(1),
  date: z.coerce.date(),
});
const result = PostSchema.safeParse(rawData);
if (!result.success) {
  console.error('Validation failed:', result.error);
}
```

### Comments

- Use JSDoc for exported functions
- Use `TODO(username):` and `FIXME:` with context

## Astro-Specific Guidelines

### Content Collections

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishedAt: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
```

### Environment Variables

- Public variables: prefix with `PUBLIC_`
- Access via `import.meta.env.PUBLIC_*`
- Define types in `src/env.d.ts`

## Git Workflow

- Write clear, descriptive commit messages
- Keep commits focused and atomic
- Run `npm run build` before committing to catch errors