import { cloneDeep } from 'lodash';

export function filterNested({
  array, search, searchAttribute, childrenPath,
}) {
  const arrayValues = cloneDeep(array);

  function filterValues(value, index, valuesReference) {
    if (value[childrenPath]) {
      value[childrenPath] = value[childrenPath].filter(filterValues);

      if (valuesReference) {
        valuesReference[index] = cloneDeep(value);
      }
    }

    return !!value[childrenPath] || new RegExp(search, 'gmiu').test(value[searchAttribute]);
  }

  function nonEmptyParents(value) {
    if (value[childrenPath]) {
      value[childrenPath] = value[childrenPath].filter(nonEmptyParents);

      return value[childrenPath].length > 0;
    }

    return true;
  }

  const filteredvalues = [];
  arrayValues.forEach((value, index) => filterValues(value, index, filteredvalues));

  return filteredvalues.filter(nonEmptyParents);
}

export default filterNested;
