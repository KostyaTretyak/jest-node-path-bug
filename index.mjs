export const jestPackageJson = import.meta.resolve('jest/package.json');
console.log('node with --experimental-vm-modules works correctly:', jestPackageJson);
