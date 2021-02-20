const express = require("express");
const cors = require("cors");
require("dotenv").config();

const orderRouter = require("./routes/orders");

const startServer = async () => {
  const app = express();
  //   const port = process.env.PORT || 5000;
  const port = 5000;
  app.use(cors());
  app.use(express.json());

  app.use("/api/v1/orders", orderRouter);

  await app.listen(port, () => {
    console.log(`server is running on port:${port}`);
  });
};
startServer();
