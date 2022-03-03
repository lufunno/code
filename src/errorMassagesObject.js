const errorMessages = {
  doesNotExist: "password should exist",
  passwordLength: "password should be longer than 8 characters",
  lowercase: "password should have atleast one lowercase letter",
  uppercase: "password should have atleast one uppercase letter",
  digit: "password should have atleast one digit",
  specialChar: "password should have atleast one special character",
  whitespace: "password should have at least one whitespace character",
  debugNotValid: "User password is not valid",
};
module.exports = { errorMessages };
