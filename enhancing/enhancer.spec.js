const { repair, succeed, fail, get } = require("./enhancer.js");
// test away!
const {
  items,
  expectedSuccess,
  expectedFailure,
  expectedGet,
} = require("../data");

describe("enhancer", () => {
  describe("repair", () => {
    it("should return something", () => {
      expect(repair()).not.toBeNull;
    });
    it("should return a new object", () => {
      items.forEach((item) => {
        expect(repair(item)).not.toBe(item);
      });
    });
    it("should return an item with durability 100", () => {
      items.forEach((item) => {
        expect(repair(item).durability).toBe(100);
      });
    });
  });
  describe("succeed", () => {
    it("should return something", () => {
      expect(succeed()).not.toBeNull;
    });
    it("should return a new object", () => {
      items.forEach((item) => {
        expect(succeed(item)).not.toBe(item);
      });
    });
    it("should alter values for a success case correctly", () => {
      items.forEach((item, i) => {
        // Enhancement modified correctly
        expect(succeed(item)).toEqual(expectedSuccess[i]);
        // Maintains original durability
        expect(succeed(item).durability).toBe(item.durability);
      });
    });
  });
  describe("fail", () => {
    it("should return something", () => {
      expect(fail()).not.toBeNull;
    });
    it("should return a new object", () => {
      items.forEach((item) => {
        expect(fail(item)).not.toBe(item);
      });
    });
    it("should alter values for failure cases correctly", () => {
      items.forEach((item, i) => {
        expect(fail(item)).toEqual(expectedFailure[i]);
      });
    });
  });
  describe("get", () => {
    it("should return something", () => {
      expect(get()).not.toBeNull;
    });
    it("should return a new object", () => {
      items.forEach((item) => {
        expect(get(item)).not.toBe(item);
      });
    });
    it("should update the item name as expected", () => {
      items.forEach((item, i) => {
        expect(get(item)).toEqual(expectedGet[i]);
      });
    });
  });
});
