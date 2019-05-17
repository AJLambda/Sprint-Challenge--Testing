const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  getAll,
  getById
};

async function insert(game) {
  const [id] = await db("games").insert(game, "id"); // [1], 'id' is for heroku
  return db("games")
    .where({ id })
    .first();
}

function getAll() {
  return db("games");
}

function getById(id) {
  return db("games")
    .where({ id })
    .first();
}
