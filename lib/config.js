'use strict';

module.exports = {
  preset: 'angular',
  parserOpts: {
    issuePrefixes: ['https://github.com/plossys/', 'https://jira.sealsystems.de/jira/browse/'],
    noteKeywords: ['BREAKING CHANGES'],
    referenceActions: null
  },
  writerOpts: {
    mainTemplate: `
{{> header}}

{{#if noteGroups}}

---

{{> footer}}
{{/if}}

{{#each commitGroups}}

---

{{#if title}}
### {{title}}

{{/if}}
{{~#each commits}}
{{> commit root=@root}}
{{/each}}
{{/each}}
---`,

    headerPartial: `## {{version}} {{#if date}}({{date}}){{/if}}
`,

    commitPartial: `
#### {{subject}}

{{#if body}}
{{body}}
{{/if}}

{{!-- commit references --}}
{{#if references~}}
<small>{{#each references}}[{{this.issue}}]({{this.raw}})  \n{{/each}}</small>
{{/if}}
`,

    footerPartial: `
{{#each noteGroups}}
### {{title}}

{{#each notes}}
#### {{text}}

{{/each}}
{{/each}}
`
  }
};
