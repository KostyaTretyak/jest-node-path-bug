import { jestPackageJson } from './index.mjs';

describe('jest bug', () => {
  it('test1', () => {
    console.log(jestPackageJson);
  })
});