// Кнопка increment повинна кожну секунду збільшувати значення на 1
// Кнопка decrement має кожну секунду зменшувати значення на 1

import { onBtnClick } from './handlers';
import { refs } from './refs';

refs.buttons.forEach(button => {
  button.addEventListener('click', onBtnClick);
});
