const regex = {
  existence: /\w|\W/,
  length: /.{9,}/,
  lowercase: /[a-z]/,
  uppercase: /[A-Z]/,
  digit: /[0-9]/,
  specialChar: /\W|_/,
  whitespace: /\s/g,
};

module.exports = { regex };
