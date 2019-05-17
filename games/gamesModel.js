const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  getAll
};

async function insert(game) {
  //   const [id] = await db("games").insert(game);
  //   return db("games")
  //     .where({ id })
  //     .first();
  // }
  return db("games")
    .insert(game)
    .then(ids => {
      return getById(ids[0]);
    });
}

function getAll() {
  return db("games");
}

// add getByID
function getById(id) {
  return db("games")
    .where({ id })
    .first();
}
