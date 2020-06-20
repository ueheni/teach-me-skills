/**
 * Проверить строку str на уникальные символы, если все символы в строке встречаются один раз, то
 * функция должна возвращать true, в противном случаи false
 * Например:
 *  "avbhye3" => true
 *  "afsbvra" => false
 *  "Aaret64ip" => true
 */
function task1(str) {

  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
     for (let j = 0 ; j < arr.length; j++){
      if (arr[j] == arr[i] && j != i){
        return false;
      }
     }
    return true;
  }
}

/**
 * Проверить строку str на буквы, если в строке есть буквы, то их нужно вынести в переменную result и вернуть эту
 * переменную
 */
function task2(str) {
  let result = '';

  const arr = str.split('');

  for (let i = 0; i < arr.length; ++i){
    if ( isNaN(arr[i]) ) {
      result += arr[i];
    }
  }

  return result;
}

/**
 * arr массив чисел. Нужно найти в массиве найбольшое число и вернуть его
 */
function task3(arr) {

  for (let i = 0; i < arr.length; ++i) {
     if(arr[i] > arr[0]){
        arr[0] = arr[i];
    }
  }
  return arr[0];
}
/**
 * В функцию приходит объект obj. Нужно скопировать все его свойства в объект result и вернуть его
 */
function task4(obj) {
  const result = {};
  // ваш код должен быть ниже этой строки

  Object.assign(result, obj);

  // ваш код должен быть выше этой строки
  return result;
}

/**
 * Приходит строка str такого вида "Ivan Ivanov", вы должны сохранить первые символы в переменную result. Должен
 * иметь такой вид "I.I."
 * Еще пример: str => "Vitalik Skopets". result => "V.S."
 */
function task5(str) {

  let result = '';
  const arr = str.split('');

  const name = arr[0].split('');
  
  const firstName = arr[1].split('');

  result = name[0] + '.' + firstName[0] + '.'

  return result;

}

/**
 * Написать логику, которая будет возвращать название планеты. По ее номеру начиная от ближайшей к солнцу.
 * Примечание: написать эту логику без if и switch!!!!!!!
 */
function task6(num) {

  const sun_system = ['солнце','меркурий','венера','земля','марс','юпитер','сатурн','уран','нептун'];
  return sun_system[num];

}

/**
 * Функция должна удалять первый и последний символы из строки str и вернуть получившеюся строку.
 */
function task7(str) {

  const arr = str.split('');

  delete arr.pop();

  delete arr.shift();

  str = '';
  for (let i = 0; i < arr.length; ++i){
    str += arr[i];
  }

  return str;
}