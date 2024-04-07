import express from "express";
import { createBill } from "../controllers/bills.js";

const router = express.Router();

// router.get("/", getAccount);
//create Bill
// các giá trị khác ngoại trừ mã hóa đơn
router.post("/", createBill);
export default router;
