# release-notes-generator

Generate release notes from commit messages

## Getting started

Run this app from inside a git repository. You must provide the last and current released version as parameters. It parses all commit messages between these versions and prints the release notes to standard out.

Sample:

```shell
npx release-notes-generator <previous version> <current version>
```
