const semver = require('semver');
const pkg = require('../package.json');
const lock = require('../package-lock.json');

const MINIMUM_LAB_VERSION = '9.0.0-beta.11';

test('@mui/lab is pinned to 9.0.0-beta.11 or newer', () => {
    const declared = pkg.dependencies['@mui/lab'];
    expect(declared).toBeDefined();

    const minimumDeclared = semver.minVersion(declared);
    expect(minimumDeclared).not.toBeNull();
    expect(semver.gte(minimumDeclared, MINIMUM_LAB_VERSION)).toBe(true);

    const locked = lock.dependencies['@mui/lab'];
    expect(locked).toBeDefined();
    expect(semver.gte(locked.version, MINIMUM_LAB_VERSION)).toBe(true);
});
