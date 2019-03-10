import { TOO_MUCH, TOO_LITTLE } from './constants';

export default (num, expected) => {
  if (num > expected) {
    alert(TOO_MUCH);
  } else {
    alert(TOO_LITTLE);
  }
};
