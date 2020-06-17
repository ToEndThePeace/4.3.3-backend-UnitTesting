module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  /**
   * - accepts an item
   * - returns a new item object that has
   *   been modified successfully
   * - on success:
   *    - increase enhancement by 1
   *    - if enhancement is 20, don't change it
   *    - don't change durability
   */
  return item
    ? // Item was passed in
      {
        ...item,
        enhancement:
          item.enhancement < 20 ? item.enhancement + 1 : item.enhancement,
      }
    : // Item was not passed in
      {};
}

function fail(item) {
  /**
   * - accepts an item
   * - returns a new item that failed enhancement
   * - on failure:
   *    - if enhancement < 15, durability -= 5
   *    - if enhancement >= 15, durability -= 10
   *    - if enhancement > 16, enhancement -= 1
   */
  if (!item) return {};
  const newDurability = item.durability - (item.enhancement >= 15 ? 10 : 5);
  return {
    ...item,
    durability: newDurability < 0 ? 0 : newDurability,
    enhancement: item.enhancement - (item.enhancement > 16 ? 1 : 0),
  };
}

function repair(item) {
  /**
   * - accepts an item
   * - returns a new item with durability 100
   */
  return item ? { ...item, durability: 100 } : {};
  // return item;
}

function get(item) {
  return item
    ? {
        ...item,
        name: `${item.enhancement > 0 ? `[+${item.enhancement}] ` : ""}${
          item.name
        }`,
      }
    : {};
}
