# Mobile Development Workflow

## Source of truth

Keep the repository in native Termux storage:

```text
/data/data/com.termux/files/home/projects/bdt-booking
```

Do not move active Node repositories to Android shared storage.

## Editor

Roxum connects to Termux through SSH and edits the same files.

Roxum is replaceable. Termux remains the runtime and Git environment.

## Standard workflow

```bash
cd ~/projects/bdt-booking
pnpm install
pnpm verify
pnpm dev
```

Open `http://localhost:3000` in the phone browser.

## Long-running commands

Android may suspend background applications. Exclude Termux from aggressive battery optimization and use `termux-wake-lock` for longer local builds when needed.

## Clean-room verification

GitHub Actions installs dependencies from scratch and executes `pnpm verify`. Local success alone is not sufficient for merge approval.
