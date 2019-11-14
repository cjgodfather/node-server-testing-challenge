const knex = require("../data/dbConfig.js");

module.exports = {
  add
};

function add(user) {
  return knex("users").insert(user);
}
