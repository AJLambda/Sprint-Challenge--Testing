const request = require("supertest");
const server = require("./server.js");

const db = require("../data/dbConfig.js");

describe("SERVER", () => {
  describe("GET /", () => {
    it("should return status code 200", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });
    it("should return JSON data", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("application/json");
    });
    it("should be functional", async () => {
      const res = await request(server).get("/");
      expect(res.body).toEqual({ api: "up" });
    });
  });

  describe("GET /games", () => {
    it("should return status code 200", async () => {
      const res = await request(server).get("/games");
      expect(res.status).toBe(200);
    });
    it("should return JSON data", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("application/json");
    });
    it("should return empty array if no games", async () => {
      const res = await request(server).get("/games");
      expect(res.body).toEqual([]);
    });
  });

  describe("POST /games", () => {
    it("should return status code 201 if game data correct", async () => {
      const testGame = {
        title: "Halo",
        genre: "Shooter",
        releaseYear: 2003
      };
      let res = await request(server)
        .post("/games")
        .send(testGame);
      expect(res.status).toBe(201);
    });
    it("should return status code 422 if game data incorrect", async () => {
      const testGame = {
        genre: "Shooter",
        releaseYear: 2003
      };
      let res = await request(server)
        .post("/games")
        .send(testGame);
      expect(res.status).toBe(422);
    });
  });
});
