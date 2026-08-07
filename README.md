# artisan.eplus.dev

**Laravel Artisan cheatsheet maintained by [hoangsvit](https://github.com/hoangsvit) / [ePlus.DEV](https://eplus.dev).**

[![Sponsor ePlus.DEV](https://img.shields.io/github/sponsors/ePlus-DEV)](https://github.com/sponsors/ePlus-DEV)
[![License](https://img.shields.io/github/license/hoangsvit/artisan.page)](LICENSE.md)

A bookmarkable, searchable cheatsheet for [Laravel's](https://laravel.com) Artisan commands.

## Deployment

The canonical site is **https://artisan.eplus.dev** and this repository uses the `netlify` branch as its primary deployment branch.

## Generation

The site is a static Nuxt app fed by one JSON file per Laravel major version under `assets/<version>.x.json`. `.github/workflows/process-artisan-commands.yml` discovers supported Laravel versions, generates Artisan command metadata, and commits updated JSON back to the active branch.

### Running locally

```bash
npm install
npm run dev
```

Production checks:

```bash
npm test
npm run build
```

## Maintainer

- [hoangsvit](https://github.com/hoangsvit)
- [ePlus.DEV](https://eplus.dev)
- Donations: [GitHub Sponsors — ePlus.DEV](https://github.com/sponsors/ePlus-DEV)

## Upstream attribution

This repository is a fork/derived version of **artisan.page**, originally created by James Brooks: https://github.com/jbrooksuk/artisan.page.

This attribution is intentionally retained because the repository license requires forks and hosted derivatives to identify the original project and source. Product branding, source links, analytics, and donation links in this fork otherwise point to hoangsvit / ePlus.DEV.

## License

See [LICENSE.md](LICENSE.md). The original copyright and license terms are retained as required.
