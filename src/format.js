const { createHTMLTableFromArray } = require('./utils');

function formatFilesCoverageDataToHTMLTable(changedFilesCoverageData, options = {}) {
  const { statements = false, branches = false, functions = false, lines = true } = options;

  const headers = [
    'File',
    statements && 'Statements',
    branches && 'Branches',
    functions && 'Functions',
    lines && 'Lines',
  ].filter(Boolean);

  const rows = changedFilesCoverageData.map(([file, data]) => {
    return [
      file,
      statements && data.statements.pct,
      branches && data.branches.pct,
      functions && data.functions.pct,
      lines && data.lines.pct,
    ].filter(v => v || v === 0);
  });

  return createHTMLTableFromArray([headers, ...rows]);
}

module.exports = {
  formatFilesCoverageDataToHTMLTable,
};
