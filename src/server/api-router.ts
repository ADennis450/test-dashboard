import express from "express";
import cors from "cors";

const router = express.Router();
router.use(cors());

import testData from "../test-data.json";

router.get("/test-results", (req, res) => {
  res.send({ testResults: testData });
});

export default router;
