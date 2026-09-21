# Look up Laravel Artisan commands

artisan.eplus.dev is a complete reference for every `php artisan` command shipped with Laravel, covering versions 5.x through 13.x. The site is maintained by hoangsvit and ePlus.DEV. Use this skill when you need to confirm a command exists, discover its arguments and options, or compare behaviour between Laravel versions.

## When to use this skill

- The user asks about a `php artisan` command (its arguments, options, aliases, or availability).
- You are writing or reviewing Laravel code that invokes Artisan and need to verify the exact CLI signature.
- You need to know which commands were introduced, removed, or changed between Laravel versions.

## URL structure

- Home: `https://artisan.eplus.dev`
- Version listing: `https://artisan.eplus.dev/{version}` (e.g. `https://artisan.eplus.dev/13.x`)
- Command detail: `https://artisan.eplus.dev/{version}/{command}` (e.g. `https://artisan.eplus.dev/13.x/makemigration`)
- Markdown version index: `https://artisan.eplus.dev/{version}.md` (e.g. `https://artisan.eplus.dev/13.x.md`)
- Markdown command detail: `https://artisan.eplus.dev/{version}/{command}.md` (e.g. `https://artisan.eplus.dev/13.x/makemigration.md`)

Colons in command names are stripped from the URL path: `make:migration` becomes `makemigration`, `cache:clear` becomes `cacheclear`.

## Fetching content as an agent

Use a `.md` URL for a Markdown response without content negotiation. Canonical HTML pages also support `Accept: text/markdown`; those responses include `Content-Type: text/markdown; charset=utf-8` and an `x-markdown-tokens` header estimating the Markdown token count. Without the extension or header, the default response is HTML.

```bash
curl https://artisan.eplus.dev/13.x/makemigration.md
```

## JSON API

For structured data, use the JSON API instead of scraping pages:

- `GET https://artisan.eplus.dev/api/versions` — array of supported Laravel versions, newest first.
- `GET https://artisan.eplus.dev/api/{version}` — array of every command for that Laravel version. `latest` is accepted as an alias for the newest version.
- `GET https://artisan.eplus.dev/api/packages` — first-party Laravel packages referenced by the site.

Each command object contains `name`, `description`, `synopsis`, `aliases`, `arguments`, and `options`. Arguments expose `name`, `description`, `required`, `default`. Options expose `name`, `description`, `default`, `value_required`, `value_optional`.

## Recommended agent workflow

1. If the Laravel version is known, `GET /api/{version}` and filter the array by `name` locally. This is cheaper than one HTTP request per command.
2. If the version is unknown, start with `GET /api/latest` and mention the resolved version in your answer.
3. When responding to a human, link to the canonical command page (`https://artisan.eplus.dev/{version}/{command-without-colon}`) so they can verify.

## Source

Maintained source: https://github.com/hoangsvit/artisan.page\n\nThis project is a fork of artisan.page. Required upstream attribution is preserved in the repository README and LICENSE.
