'use strict';

const fetchCommits = require('../lib/fetchCommits');
const generate = require('../lib/generate');

(async () => {
  const commits = await fetchCommits(`${process.argv[2]}`, process.argv[3]);

  await generate(commits);
})();
