const express = require("express");

const router = express.Router();
const apiRouter = require("./api");

router.use("/api", apiRouter);

router.get("/hello/world", (req, res) => {
  res.cookie("XSRF-TOKEN", req.csrfToken());
  res.json({ message: "Hello World!" });
});

module.exports = router;
