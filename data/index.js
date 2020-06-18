module.exports = {
  items: [
    {
      name: "Pickaxe",
      durability: 100,
      enhancement: 0,
    },
    {
      name: "Broadsword",
      durability: 50,
      enhancement: 15,
    },
    {
      name: "Longbow",
      durability: 50,
      enhancement: 20,
    },
    {
      name: "Heavy Buckler",
      durability: 5,
      enhancement: 15,
    },
  ],
  expectedSuccess: [
    {
      name: "Pickaxe",
      durability: 100,
      enhancement: 1,
    },
    {
      name: "Broadsword",
      durability: 50,
      enhancement: 16,
    },
    {
      name: "Longbow",
      durability: 50,
      enhancement: 20,
    },
    {
      name: "Heavy Buckler",
      durability: 5,
      enhancement: 16,
    },
  ],
  expectedFailure: [
    {
      name: "Pickaxe",
      durability: 95,
      enhancement: 0,
    },
    {
      name: "Broadsword",
      durability: 40,
      enhancement: 15,
    },
    {
      name: "Longbow",
      durability: 40,
      enhancement: 19,
    },
    {
      name: "Heavy Buckler",
      durability: 0,
      enhancement: 15,
    },
  ],
  expectedGet: [
    {
      name: "Pickaxe",
      durability: 100,
      enhancement: 0,
    },
    {
      name: "[+15] Broadsword",
      durability: 50,
      enhancement: 15,
    },
    {
      name: "[+20] Longbow",
      durability: 50,
      enhancement: 20,
    },
    {
      name: "[+15] Heavy Buckler",
      durability: 5,
      enhancement: 15,
    },
  ],
};
