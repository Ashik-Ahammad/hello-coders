const pkg = require('../package.json');
const lock = require('../package-lock.json');

const MINIMUM_MATERIAL = [9, 6, 0];
const MINIMUM_MATERIAL_LABEL = MINIMUM_MATERIAL.join('.');
const BUNDLED_CORE_PACKAGES = [
    '@mui/core-downloads-tracker',
    '@mui/private-theming',
    '@mui/styled-engine',
    '@mui/system',
    '@mui/types',
    '@mui/utils',
];

const parseVersion = (value) => {
    const match = String(value).match(/(\d+)\.(\d+)\.(\d+)/);
    return match === null ? null : match.slice(1).map(Number);
};

const isAtLeast = (actual, minimum) => {
    for (let index = 0; index < minimum.length; index += 1) {
        if (actual[index] > minimum[index]) {
            return true;
        }
        if (actual[index] < minimum[index]) {
            return false;
        }
    }
    return true;
};

const expectAtLeastMinimum = (value) => {
    const parsed = parseVersion(value);
    expect(parsed).not.toBeNull();
    expect(isAtLeast(parsed, MINIMUM_MATERIAL)).toBe(true);
};

// @mui/material 9.6.0 is the release that the code base now targets. The
// declared range and the resolved lock entry must agree, and the lock must
// carry the matching 9.6.x core packages instead of an older MUI tree.
test(`@mui/material resolves to ${MINIMUM_MATERIAL_LABEL} or newer`, () => {
    const declared = pkg.dependencies['@mui/material'];
    expect(declared).toBeDefined();
    expectAtLeastMinimum(declared);

    const locked = lock.dependencies['@mui/material'];
    expect(locked).toBeDefined();
    expectAtLeastMinimum(locked.version);

    BUNDLED_CORE_PACKAGES.forEach((name) => {
        const bundled = locked.dependencies && locked.dependencies[name];
        expect(bundled).toBeDefined();
        if (bundled) {
            expectAtLeastMinimum(bundled.version);
        }
    });

    // When the dependency tree is installed, the runtime copy must match too.
    // Resolving lazily keeps the check working in lock-only environments.
    let installed = null;
    try {
        installed = require('@mui/material/package.json').version;
    } catch (error) {
        installed = null;
    }
    if (installed !== null) {
        expectAtLeastMinimum(installed);
    }
});
