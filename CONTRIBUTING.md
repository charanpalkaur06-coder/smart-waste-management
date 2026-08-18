# Contributing — Smart Waste Canberra

**Team:** Krishna Trivedi, Charanpal Kaur, Ayush Ale  
**Repo:** https://github.com/charanpalkaur06-coder/smart-waste-management

## Team areas

| Member | Primary modules |
|--------|-----------------|
| Krishna Trivedi | Dashboard, routes, bin map, technical report |
| Charanpal Kaur | Public reporting, maintenance, database schema, Jira |
| Ayush Ale | Driver UI, role config, GitHub, presentation, Figma kit |

## Git workflow

1. Pull latest: `git pull origin main`
2. Create branch: `git checkout -b feature/your-feature`
3. Commit with clear messages: `feat:`, `fix:`, `docs:`
4. Push branch and merge to `main` (or push directly for small team)

## Commit message examples

```
feat: add technician and officer role navigation
feat: add maintenance ticket status filters
docs: add ICT308 technical report and submission checklist
feat: add MySQL schema and seed data for Iteration 2
```

## Before pushing

```bash
npm run build
```

Build must pass before merging to `main`.
