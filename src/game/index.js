import Swal from 'sweetalert2';
import TO_FIND from './random';
import getNum from './input';
import success from './success';
import info from './userInfo';
import { increaseAttempts, getAttemptsCount } from './attempts';

export default () => {
  {
    Swal.fire({
      title: 'Thank you!',
      text: 'You did very well',
      type: 'success',
      confirmButtonText: 'Cool'
    });
  }
  let num = getNum();
  while (num !== TO_FIND) {
    increaseAttempts();
    info(num, TO_FIND);
    num = getNum();
  }
  // if success
  success(getAttemptsCount());
};

// const obj = {
//   foo: 'abc',
//   bar: 'def',
//   baz: 'ghi'
// };
// const { foo, bar, baz } = obj;

// alert(foo);
// alert(bar);
// alert(baz);
