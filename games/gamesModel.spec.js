const Games = require("./gamesModel.js");
const db = require("../data/dbConfig.js");

describe("The Games Model", () => {
  beforeEach(async () => {
    await db("games").truncate();
  });

  describe("insert() helper", () => {
    it("should insert provided game", async () => {
      const newGame = await Games.insert({
        // change to check by ID
        title: "Fortnight",
        genre: "Lame",
        releaseYear: 1969
      });

      const gameList = await db("games");

      expect(gameList[0]).toEqual(newGame);
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
