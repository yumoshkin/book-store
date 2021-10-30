const numberFormat = new Intl.NumberFormat('en-US');
const currencyFormat = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function getFormatedValue(value, type = 'number') {
  if (type === 'number') {
    return numberFormat.format(value);
  }

  if (type === 'currency') {
    return currencyFormat.format(value);
  }

  return value;
}

export default getFormatedValue;
