# Wisenosh Backend

Small backend for image-based food analysis.

Quick start

1. Copy `.env.example` (or create `.env`) and set `GEMINI_API_KEY`.
2. Install dependencies:

```bash
pnpm install
```

3. Run in development:

```bash
pnpm run dev
```

4. Build:

```bash
pnpm run build
pnpm start
```

Linting

```bash
pnpm run lint
```

Notes

- The project expects `GEMINI_API_KEY` in the environment. The key is validated at startup; if missing the app will fail fast.
- Services are located in `src/services` and controllers in `src/controllers`.
