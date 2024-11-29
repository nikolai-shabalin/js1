function debounce (callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}

// Пример использования
const input = document.querySelector('.input');
const output = document.querySelector('.output');

const log = (event) => {
  const value = event.target.value
  output.textContent = value;
}

input.addEventListener('input', debounce(log, 500));
// После того, как пользователь перестал вводить текст в input,
// через 500 мс будет вызвана функция log, которая выведет в output
