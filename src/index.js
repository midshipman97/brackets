module.exports = function check(str, bracketsConfig) {
  let output = str.split(''); // разбиваем строку на массив из символов

  for (let i = 0; i < output.length; i++) {
    bracketsConfig.forEach((element) => {
      if (output[i] === element[0] && output[i + 1] === element[1]) { // сравниваем и удаляем по два элемента из массива, начиная с индекса i, после чего корректируем i
        output.splice(i, 2);
        i -= 2;
      }
    });
  }

  if (output.length === 0) { // если ничего лишнего не осталось, то выводим true
    return true
  } else {
    return false
  }
}
