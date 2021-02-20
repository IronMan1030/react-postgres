const router = require("express").Router();
const { pool } = require("../db");

router.get("/get", async (req, res) => {
  try {
    let result = await pool.query("SELECT * FROM orders");
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

router.post("/create", async (req, res) => {
  const { user_name, seller_email } = req.body;
  try {
    let result = await pool.query(`INSERT INTO users (user_name) VALUES ('${user_name}')`);
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

router.post("/update", (req, res) => {});
module.exports = router;
