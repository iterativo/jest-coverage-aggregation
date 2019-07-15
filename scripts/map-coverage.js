const createReporter = require('istanbul-api').createReporter;
const istanbulCoverage = require('istanbul-lib-coverage');

const map = istanbulCoverage.createCoverageMap();
const reporter = createReporter();

const groups = ['group1', 'group2'];

groups.forEach(group => {
  const coverage = require(`../coverage/coverage-${group}-final.json`);
  Object.keys(coverage).forEach(
    filename => map.addFileCoverage(coverage[filename])
  );
});

reporter.addAll(['json', 'lcov', 'text']);
reporter.write(map);
