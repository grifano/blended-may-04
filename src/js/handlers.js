import { refs } from './refs';

let currentIntervalID;

export const onBtnClick = event => {
  if (event.target.dataset.action === 'increment') {
    clearInterval(currentIntervalID);
    currentIntervalID = setInterval(() => {
      refs.counterValue.textContent = refs.number++;
    }, 1000);
  }
  if (event.target.dataset.action === 'decrement') {
    clearInterval(currentIntervalID);
    currentIntervalID = setInterval(() => {
      refs.counterValue.textContent = refs.number--;
    }, 1000);
  }
};
