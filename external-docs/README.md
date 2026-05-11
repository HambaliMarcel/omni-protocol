# Local external knowledge (no Context7 SaaS)

**Policy:** outbound paid / proprietary doc APIs are **not** used for Omni in this workspace. Framework truth comes from artifacts you **mirror here**.

## Layout

Place vendored refs under `./<library-slug>/` (upstream docs export, submodule, or scraped markdown).

Suggested sources:

1. Official docs static export / git mirror
2. Release tarball `docs/` subtree
3. Package `README` + `docs/*.md` from tagged release

## Agent rule

When answering API surface or version-specific behavior: **open files under this directory** before guessing.

## Maintenance

Add a `SOURCE.md` beside each library folder with: upstream URL, commit/tag, license, refresh date.
