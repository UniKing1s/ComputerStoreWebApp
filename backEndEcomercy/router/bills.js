import express from "express";
import {
  createBill,
  deleteBill,
  getAllBill,
  getBillByUserAndMaHoaDon,
} from "../controllers/bills.js";

const router = express.Router();

// router.get("/", getAccount);
//create Bill
// các giá trị khác ngoại trừ mã hóa đơn

router.post("/", createBill);
router.get("/", getAllBill);
router.get("/geyBillByUserAndMaHD", getBillByUserAndMaHoaDon);
router.delete("/", deleteBill);
export default router;
