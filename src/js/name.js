import * as _ from 'lodash';

const minLen = 2;

export const isValid = (name) => {
  return _.trim(name).length >= minLen;
}
