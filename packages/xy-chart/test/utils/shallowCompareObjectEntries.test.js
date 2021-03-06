import shallowCompareObjectEntries from '../../src/utils/shallowCompareObjectEntries';

describe('shallowCompareObjectEntries', () => {
  test('it should be defined', () => {
    expect(shallowCompareObjectEntries).toBeDefined();
  });

  test('it should return false if objects have different key counts', () => {
    expect(shallowCompareObjectEntries({ a: 'a' }, {})).toBe(false);
  });

  test('it should return false if objects have different keys', () => {
    expect(shallowCompareObjectEntries({ a: 'a' }, { b: 'a' })).toBe(false);
    expect(shallowCompareObjectEntries({ b: 'a' }, { a: 'a' })).toBe(false);
  });

  test('it should return false if objects have different values', () => {
    expect(shallowCompareObjectEntries({ a: 'a' }, { a: 'b' })).toBe(false);
    expect(shallowCompareObjectEntries({ b: 'a' }, { b: 'b' })).toBe(false);
  });

  test('it should return true if objects have the same entries', () => {
    expect(shallowCompareObjectEntries({ a: 'a', b: 1 }, { a: 'a', b: 1 })).toBe(true);
  });
});
