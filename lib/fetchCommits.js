'use strict';

const gitLogParser = require('git-log-parser');
const getStream = require('get-stream');

const fetchCommits = async function(from, to) {
  if (!to) {
    to = 'HEAD';
  }

  Object.assign(gitLogParser.fields, {
    hash: 'H',
    message: 'B',
    gitTags: 'd',
    committerDate: {
      key: 'ci',
      type: Date
    }
  });

  // eslint-disable-next-line no-console, prefer-template
  console.error(`Fetch commits in range ${from ? from + '^..' : ''}${to}`);
  const commits = (await getStream.array(
    /* eslint-disable prefer-template */
    // Use '^' to fetch one more commit, otherwise the commit of the last
    // release is not included
    gitLogParser.parse({ _: `${from ? from + '^..' : ''}${to}` })
  )).map((commit) => {
    commit.message = commit.message.trim();
    commit.gitTags = commit.gitTags.trim();

    return commit;
  });

  return commits;
};

module.exports = fetchCommits;
