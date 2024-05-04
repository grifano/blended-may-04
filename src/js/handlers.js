import { refs } from './refs';

export const onBtnClick = event => {
  if (event.target.dataset.action === 'increment') {
    setInterval(() => {
      refs.counterValue.textContent = refs.number++;
    }, 1000);
  }
  if (event.target.dataset.action === 'decrement') {
    setInterval(() => {
      refs.counterValue.textContent = refs.number--;
    }, 1000);
  }
};
