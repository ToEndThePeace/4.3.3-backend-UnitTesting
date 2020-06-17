const { repair, succeed, fail, get } = require("./enhancer.js");
// test away!

const items = [
  {
    name: "Pickaxe",
    durability: 100,
    enhancement: 0,
  },
  {
    name: "Broadsword",
    durability: 50,
    enhancement: 10,
  },
  {
    name: "Longbow",
    durability: 0,
    enhancement: 20,
  },
];

describe("enhancer", () => {
  describe("repair", () => {
    it("should return something", () => {
      expect(repair()).not.toBeNull;
    });
    it("should return a new object", () => {
      expect(repair(items[2])).not.toBe(items[2]);
    });
    it("should return an item with durability 100", () => {
      expect(repair(items[2]).durability).toBe(100);
    })
  });
  describe("succeed", () => {
    it("should return something", () => {
      expect(succeed()).not.toBeNull;
    });
  });
  describe("fail", () => {
    it("should return something", () => {
      expect(fail()).not.toBeNull;
    });
  });
  describe("get", () => {
    it("should return something", () => {
      expect(get()).not.toBeNull;
    });
  });
});
