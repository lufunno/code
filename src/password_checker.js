const { errorMessages } = require("./errorMassagesObject");
const { regex } = require("./regexObject");
const { strength } = require("./strengthObject");
const { logger } = require("./wistonObject");

function passwordIsValid(password) {
  if (!regex.existence.test(password)) {
    handleLogs(
      errorMessages.doesNotExist,
      errorMessages.debugNotValid,
      errorMessages.doesNotExist
    );
  }
  if (!regex.length.test(password)) {
    handleLogs(
      errorMessages.passwordLength,
      errorMessages.debugNotValid,
      errorMessages.passwordLength
    );
  }
  if (!regex.lowercase.test(password)) {
    handleLogs(
      errorMessages.lowercase,
      errorMessages.debugNotValid,
      errorMessages.lowercase
    );
  }
  if (!regex.uppercase.test(password)) {
    handleLogs(
      errorMessages.uppercase,
      errorMessages.debugNotValid,
      errorMessages.uppercase
    );
  }
  if (!regex.digit.test(password)) {
    handleLogs(
      errorMessages.digit,
      errorMessages.debugNotValid,
      errorMessages.digit
    );
  }
  if (!regex.specialChar.test(password)) {
    handleLogs(
      errorMessages.specialChar,
      errorMessages.debugNotValid,
      errorMessages.specialChar
    );
  }
  if (!regex.whitespace.test(password)) {
    handleLogs(
      errorMessages.whitespace,
      errorMessages.debugNotValid,
      errorMessages.whitespace
    );
  } else {
    logger.debug("User password is valid");
    return;
  }
}

function handleLogs(logError_message, debugError_message, throwError_message) {
  logger.error(logError_message);
  logger.debug(debugError_message);
  throw new Error(throwError_message);
}

function logs(password) {
  if (!regex.length.test(password)) {
    handleLogs(
      errorMessages.lowercase,
      errorMessages.debugNotValid,
      errorMessages.lowercase
    );
  }
}

function passwordStrength(password) {
  let num = 0;
  if (password.length > 8) {
    if (regex.lowercase.test(password)) {
      num += 1;
    }
    if (regex.uppercase.test(password)) {
      num += 1;
    }
    if (regex.digit.test(password)) {
      num += 1;
    }
    if (regex.specialChar.test(password)) {
      num += 1;
    }
    if (regex.existence.test(password)) {
      num += 1;
    }
    if (regex.whitespace.test(password)) {
      num += 1;
    }
    if (num >= 6) {
      return strength.strong;
    } else if (num >= 4) {
      return strength.medium;
    } else if (num === 3) {
      return strength.weak;
    }
  } else {
    return strength.invalid;
  }
}

module.exports = {
  passwordIsValid,
  passwordStrength,
};

return console.log(passwordIsValid("operatorffdT1, "));
