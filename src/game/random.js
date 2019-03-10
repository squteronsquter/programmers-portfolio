import Swal from 'sweetalert2';

Swal.fire({
  title: 'NOOOO!',
  text: 'You did very well',
  type: 'success',
  confirmButtonText: 'Cool'
});

alert(
  'To play this game you need to guess the number which has been generated randomly from the range 1-100'
);

export default Math.floor(Math.random() * 100 + 1);
