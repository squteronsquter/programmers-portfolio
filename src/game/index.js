import TO_FIND from './random';
import getNum from './input';
import success from './success';
import info from './userInfo';
import { increaseAttempts, getAttemptsCount } from './attempts';

export default () => {
  let num = getNum();
  while (num !== TO_FIND) {
    increaseAttempts();
    info(num, TO_FIND);
    num = getNum();
  }
  // if success
  // success();
  success(getAttemptsCount());
};
