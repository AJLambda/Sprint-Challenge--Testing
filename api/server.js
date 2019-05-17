const express = require("express");

const games = require("../games/gamesModel.js");
const db = require("../data/dbConfig");

const server = express();

server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/games", async (req, res) => {
  const rows = await games.getAll();

  res.status(200).json(rows);
});

server.post("/games", async (req, res) => {
  try {
    if (req.body.genre && req.body.title) {
      const game = await db.insert(req.body);
      res.status(200).json(game);
    } else {
      res.status(422).json({
        message: "missing title and genre to create game"
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "error creating game"
    });
  }
});

module.exports = server;
