const lockfile = require('../package-lock.json');

function collectLockedVersions(dependencies, packageName, versions = []) {
  Object.entries(dependencies || {}).forEach(([name, entry]) => {
    if (name === packageName && entry && entry.version) {
      versions.push(entry.version);
    }
    if (entry && entry.dependencies) {
      collectLockedVersions(entry.dependencies, packageName, versions);
    }
  });

  return versions;
}

function isFixedNthCheck(version) {
  const [major, minor, patch] = version.split('.').map(Number);

  return (
    major > 2 ||
    (major === 2 && (minor > 0 || (minor === 0 && patch >= 1)))
  );
}

test('every locked nth-check is at or above the CVE-2021-3803 fix (2.0.1)', () => {
  const versions = collectLockedVersions(lockfile.dependencies, 'nth-check');

  expect(versions.length).toBeGreaterThan(0);
  expect(versions.filter((version) => !isFixedNthCheck(version))).toEqual([]);
});
