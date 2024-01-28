import express from "express";
import cors from "cors";
import { connectClient } from "./db";

const router = express.Router();
router.use(cors());

router.get("/test-results", async (req, res) => {
  const client = await connectClient();

  const testResults = await client
    .collection("test_data")
    .find()
    .project({ id: 1, name: 1, elements: 1, _id: 0 })
    .toArray();
  res.send({ testResults });
});

router.get("/test-results/:testId", async (req, resp) => {
  const client = await connectClient();

  const testResult = await client
    .collection("test_data")
    .findOne({ id: req.params.testId });
  resp.send({ testResult });
});

export default router;
