const { passwordStrength } = require("../src/password_checker");
const { strength } = require("../src/strengthObject");

describe("validateIDNum", () => {
  it("should return invalid if the password meets less than 3 conditions", () => {
    expect(passwordStrength("lufuno")).toBe(strength.invalid);
  });
  it("should return medium if the password meets greater or equal to 4 conditions", () => {
    expect(passwordStrength("lufunoo 1")).toBe(strength.medium);
  });

  it("should return weak if the password meets 3 conditions", () => {
    expect(passwordStrength("lmbedziee1")).toBe(strength.weak);
  });

  it("should return strong if the password meets greater or eqaual to 6 conditions", () => {
    expect(passwordStrength("lufunoMbedzi 1#")).toBe(strength.strong);
  });
});
