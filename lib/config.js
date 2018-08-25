'use strict';

module.exports = {
  preset: 'angular',
  parserOpts: {
    issuePrefixes: ['gh-', 'jira-'],
    noteKeywords: ['BREAKING CHANGES'],
    referenceActions: null
  },
  writerOpts: {
    mainTemplate: `
---

{{> header}}

---

{{> footer}}
---

{{#each commitGroups}}
{{#if title}}
### {{title}}
{{/if}}

{{~#each commits}}
{{> commit root=@root}}
{{/each}}
---
{{/each}}
`,

    headerPartial: `## {{version}} {{#if date}}({{date}}){{/if}}
`,

    commitPartial: `
#### {{subject}}

{{#if body}}
{{body}}
{{/if}}

{{!-- commit references --}}
{{#if references~}}
  <small>{{#each references}}{{this.raw}} {{/each}}</small>
{{/if}}
`,

    footerPartial: `{{#if noteGroups}}
{{#each noteGroups}}
### {{title}}

{{#each notes}}
#### {{text}}

{{/each}}
{{/each}}
{{/if}}`
  }
};
