const getMonth = require('./index.js');

describe ('getMonthNumber', () => {
  it('recivedIsNumber', () => {
    expect(getMonth('test')).toBe('Введите номер месяца');
  });
  it('recived1to12', () => {
    expect(getMonth(13)).toBe('Номер месяца должен быть числом от 1 до 12');
  });
  it('correctMonth', () => {
    expect(getMonth(1)).toBe('Январь');
  })
})