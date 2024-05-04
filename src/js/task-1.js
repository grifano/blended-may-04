// Перероби функцію на проміс таким чином, щоб проміс повертав значення
// через 2 секунди після виклику функції

function greet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 2000);
  });
}

greet().then(value => console.log(value));
