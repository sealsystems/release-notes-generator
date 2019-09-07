# release-notes-generator

Generate release notes from commit messages

## Getting started

Run this app from inside a git repository. You must provide the last and current released version as parameters. It parses all commit messages between these versions and prints the release notes to standard out.

Sample:

```shell
npx @sealsystems/release-notes-generator <previous version> <current version>
```

## Implementation details

**Please note:** This module is part of the build and release infrastructure. In [package.json](package.json), all other related modules are referenced not by version numbers but by the repository name. This prevents a loop when automatically updating dependencies via Dependabot.
