import { formatJobList, formatParams } from './';

// test('Ma fonction formatJobList', () => {
//   const expectedstate = 'backend';
//   expect(formatJobList('backend', 3, 2)).toEqual(expectedstate);
// });

// version plus verbeuse
describe('The formatJobList function', () => {
  it('should add a comma to a word', () => {
    const expectedState = 'item2,';
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState);
  });

  it('should not add a comma to the last element of the list', () => {
    const expectedState = 'item3';
    expect(formatJobList('item3', 3, 2)).toEqual(expectedState);
  });
});

describe('The formatParams function', () => {
  it('should use the right format for param', () => {
    const expectedState = 'a1=answer1';
    expect(formatParams({ 1: 'answer1' })).toEqual(expectedState);
  });
  it('should concatenate params with an &', () => {
    const expectedState = 'a1=answer1&a2=answer2';
    const results = { 1: 'answer1', 2: 'answer2' };
    expect(formatParams(results)).toEqual(expectedState);
  });
});
