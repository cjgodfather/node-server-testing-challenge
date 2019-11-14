const { add } = require("./userModel.js");

const knex = require("../data/dbConfig.js");

describe("user model", () => {
  describe("add user", () => {
    beforeEach(async () => {
      await knex("users").truncate();
    });
    it("should add a user", async function() {
      await add({ username: "sam", password: "111" });
      const users = await knex("users");
      expect(users).toHaveLength(1);
    });
  });
});
