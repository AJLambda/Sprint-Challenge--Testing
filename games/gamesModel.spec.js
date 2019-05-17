const Games = require("./gamesModel.js");
const db = require("../data/dbConfig.js");

describe("The Games Model", () => {
  afterEach(async () => {
    await db("games").truncate();
  });

  describe("insert() helper", () => {
    it("should insert provided game", async () => {
      await Games.insert({
        title: "Pacman",
        genre: "Arcade",
        releaseYear: 1980
      });

      const gameList = await db("games");

      expect(gameList).toHaveLength(1);
    });
  });
  describe("getAll() helper", () => {
    it("should return list of all games", async () => {
      await Games.insert({
        title: "Pacman",
        genre: "Arcade",
        releaseYear: 1980
      });

      await Games.insert({
        title: "Halo",
        genre: "Shooter",
        releaseYear: 1980
      });

      const gameList = await Games.getAll();

      expect(gameList).toHaveLength(2);
    });
  });
});
