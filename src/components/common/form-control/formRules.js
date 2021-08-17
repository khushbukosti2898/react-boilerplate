/* eslint-disable no-useless-escape */
/* eslint-disable max-len */

const maxLengthRule = (number) => ({
  value: number,
  message: `Maximum ${number} character allowed.`,
});

const minLengthRule = (number) => ({
  value: number,
  message: `Minimum ${number} character allowed.`,
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
  minLengthRule,
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

// get regexp by type
export const getRegExp = (type) => {
  let regx = null;
  switch (type) {
    case 'email':
      regx =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      break;
    case 'password':
      regx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
      break;
    case 'mobile':
      regx = /^[0-9]{10}$/;
      break;
    case 'number':
      regx = /^[0-9]*$/;
      break;
    case 'url':
      regx =
        /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
      break;
    case 'cvv':
      regx = /^[0-9]{3,4}$/;
      break;
    case 'expiryDate':
      regx = /(0[1-9]|10|11|12)\/[0-9]{2}|\./;
      break;
    case 'price':
      regx = /^\d{0,8}(\.\d{1,4})?$/;
      break;
    case 'negativePrice':
      regx = /^-?\d{0,8}(\.\d{1,4})?$/;
      break;
    case 'PHONE':
      regx = /^[0-9]{10}$/;
      break;
    case 'EMAIL':
      regx =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      break;
    case 'TEXT':
      regx = /^[$!_,-@.\/#\w\s]*$/;
      break;
    case 'NUMBER':
      regx = /^[0-9]*$/;
      break;
    case 'DATE':
      regx = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
      break;
    case 'TIME':
      regx = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
      break;
    default:
      break;
  }
  return regx;
};

// get object of state form
export const checkValidation = (errors, data) => {
  const finalErrors = {};
  Object.keys(data).forEach((key) => {
    if (Array.isArray(data[key]) && data[key].length <= 0) {
      finalErrors[key] = `Please enter ${key}.`;
    } else if (typeof data[key] === 'boolean' && data[key] === false) {
      finalErrors[key] = `Please select ${key}.`;
    } else if (data[key] !== false && !data[key]) {
      finalErrors[key] = `Please enter ${key}.`;
    }
  });
  Object.keys(errors).forEach((key) => {
    if (errors[key] !== '') {
      finalErrors[key] = errors[key];
    }
  });
  return finalErrors;
};
