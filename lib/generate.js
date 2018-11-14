'use strict';

const generator = require('@semantic-release/release-notes-generator');

const config = require('./config.js');

const generate = async function (commits) {
  if (!commits || commits.length === 0) {
    console.error('No commits found.');

    return;
  }

  const lastVersion = commits[0].gitTags.match(/tag: (\d+\.\d+\.\d+)/)[1];
  const lastRelease = {
    gitHead: commits[0].hash,
    gitTag: lastVersion,
    version: lastVersion
  };

  const nextVersion = commits[commits.length - 1].gitTags.match(/tag: (\d+\.\d+\.\d+)/)[1];
  const nextRelease = {
    type: 'major',
    gitHead: commits[commits.length - 1].hash,
    gitTag: nextVersion,
    version: lastVersion
  };

  // Remove the commit of the last release
  commits.shift();

  const context = {
    commits,
    lastRelease,
    nextRelease,
    options: {
      repositoryUrl: ''
    }
  };

  /* eslint-disable no-console */
  console.log(await generator(config, context));
};

module.exports = generate;
