const { passwordIsValid } = require("../src/password_checker");
const { errorMessages } = require("../src/errorMassagesObject");

describe("password is valid", function () {
  it("should exist if not it should return an exception", function () {
    expect(function () {
      passwordIsValid("");
    }).toThrow(new Error(errorMessages.doesNotExist));
  });

  it("should be longer than 8 characters if n", function () {
    expect(function () {
      passwordIsValid("Lufuno");
    }).toThrow(new Error(errorMessages.passwordLength));
  });

  it("should have atleast one lowercase letter ", function () {
    expect(function () {
      passwordIsValid("LUFUNOMBEDZI30!");
    }).toThrow(new Error(errorMessages.lowercase));
  });

  it("should have atleast one uppercase letter ", function () {
    expect(function () {
      passwordIsValid("lufunombedzi30! ");
    }).toThrow(new Error(errorMessages.uppercase));
  });

  it("should have atleast one digit", function () {
    expect(function () {
      passwordIsValid("Lufunombedzi, ");
    }).toThrow(new Error(errorMessages.digit));
  });

  it("should have atleast one special character", function () {
    expect(function () {
      passwordIsValid("Lufunobedzi30");
    }).toThrow(new Error(errorMessages.specialChar));
  });

  it("should have atleast one whitespace", function () {
    expect(function () {
      passwordIsValid("Lufunobedzi30,");
    }).toThrow(new Error(errorMessages.whitespace));
  });
});
