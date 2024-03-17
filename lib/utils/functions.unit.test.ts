import { enumToOptions } from '.';

describe('enumToOptions', () => {
  it('should convert an enum to an array of options', () => {
    enum input {
      ARRAY = 'ARRAY',
      SORTING = 'SORTING',
      PATH_FINDING = 'PATH_FINDING',
    }

    const expectedOutput = [
      { label: 'Array', value: 'array' },
      { label: 'Sorting', value: 'sorting' },
      { label: 'Path finding', value: 'path_finding' },
    ];

    expect(enumToOptions(input)).toEqual(expectedOutput);
  });
});
