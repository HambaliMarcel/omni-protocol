# TrueCourse git hooks (optional)

Pre-commit hooks run `truecourse analyze --diff` and can add latency on large trees.

| Severity | Block merge? | Notes |
|----------|--------------|-------|
| critical / high | default yes (if installed) | tune in `.truecourse/hooks.yaml` |
| medium | team choice | document bypass policy |

Install (after baseline exists): `npx truecourse hooks install`

Bypass (exceptional): `git commit --no-verify`

CI alternative: run `truecourse analyze --diff` in pipeline without local hook.
