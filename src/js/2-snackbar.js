// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value; // "fulfilled" або "rejected"

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(value => {
      iziToast.show({
        title: '✅',
        color: 'green',
        message: ` Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.show({
        title: '❌',
        color: 'red',
        message: ` Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .finally(() => {
      form.reset(); // 🔹 очистка після відправки
    });
});
