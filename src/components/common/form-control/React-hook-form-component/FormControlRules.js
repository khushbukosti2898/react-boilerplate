/* eslint-disable max-len */
const maxLengthRule = (number) => ({
  value: number,
  message: `Maximum ${number} character allowed.`,
});

const textRule = () => ({
  value: /^(?!\s*$)[a-zA-Z0-9\s]+$/,
  message: 'Empty space or special characters are not allowed.',
});

const alphabetRule = () => ({
  value: /^[a-zA-Z]+$/,
  message: 'Only alphabetic value allowed.',
});

const numberRule = () => ({
  value: /^[0-9]*$/,
  message: 'Only numeric value allowed.',
});

const integerNumberRule = (title) => ({
  value: /^[1-9][0-9]*$/,
  message: `${title} must be grater than zero.`,
});

const floatNumberRule = (value, title) => {
  if (!/^[-]*[0-9]*[.]*[0-9]*$/.test(value)) {
    return `${title} value must be number`;
  }
  if (/^[-][0-9]*[.]*[0-9]+$/.test(value)) {
    return `${title} value must be positive number`;
  }
  if (/^[0-9]*[.]$/.test(value)) {
    return `Please enter number after point`;
  }
  if (!/^[0-9]*[.]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?[0-9]?$/.test(value)) {
    return `Only 6 digits are allowed after point`;
  }
  return true;
};

const rangeRule = (min, max, value, title) => {
  const expression = `^.{${min},${max}}$`;
  const regex = new RegExp(expression);
  if (value && !regex.test(value)) {
    return `${title} must be between ${min} to ${max} character.`;
  }
  return true;
};

const phoneRule = () => ({
  // eslint-disable-next-line max-len
  value:
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
  message: 'Enter valid pnone number.',
});

const emailRule = () => ({
  value: /^([a-zA-Z0-9+._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)$/,
  message: 'Invalid email adress',
});

const addressValid = (coordination) => {
  return coordination.lat === 0 || coordination.lng === 0
    ? 'Enter valid address'
    : true;
};

export {
  maxLengthRule,
  textRule,
  alphabetRule,
  numberRule,
  integerNumberRule,
  floatNumberRule,
  rangeRule,
  phoneRule,
  emailRule,
  addressValid,
};
