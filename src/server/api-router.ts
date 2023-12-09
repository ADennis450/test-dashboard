import express from "express";
import cors from "cors";
const router = express.Router();
router.use(cors());
router.get("/test-results", (req, res) => {
  res.send([]);
});

export default router;
