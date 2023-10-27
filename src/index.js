function getMonth(numb) {
  if (isNaN(numb)) {
    return 'Введите номер месяца';
  }
  else if (numb < 1 || numb > 12) {
    return 'Номер месяца должен быть числом от 1 до 12';
  }
  else if (numb === 1) {
    return 'Январь';
  }
  else if (numb === 2) {
    return 'Февраль';
  }
 else if (n === 3) {
  return 'март';
} else if (n === 4) {
  return 'апрель';
} else if (n === 5) {
  return 'май';
} else if (n === 6) {
  return 'июнь';
} else if (n === 7) {
  return 'июль';
} else if (n === 8) {
  return 'август';
} else if (n === 9) {
  return 'сентябрь';
} else if (n === 10) {
  return 'октябрь';
} else if (n === 11) {
  return 'ноябрь';
} else if (n === 12) {
  return 'декабрь';
} else {
  return 'Недопустимый номер месяца';
}
}
module.exports = getMonth;