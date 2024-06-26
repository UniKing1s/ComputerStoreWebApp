import express from "express";
import {
  createBill,
  deleteBill,
  getAllBill,
  getBillByUser,
  getBillByUserAndMaHoaDon,
  upadteBillPayed,
} from "../controllers/bills.js";

const router = express.Router();

// router.get("/", getAccount);
//create Bill
// các giá trị khác ngoại trừ mã hóa đơn

router.post("/", createBill);
router.get("/", getAllBill);
router.get("/getBillByUserAndMaHD", getBillByUserAndMaHoaDon);
router.get("/:username", getBillByUser);
router.patch("/updateBill", upadteBillPayed);

router.delete("/", deleteBill);
export default router;
