import { billModel } from "../models/billModel.js";

export const createBill = async (req, res) => {
  try {
    const newBill = req.body;
    console.log(req.body);
    const maxBill = await billModel.find().sort({ maHoaDon: -1 }).limit(1);
    if (maxBill.length < 1) {
      newBill["maHoaDon"] = 1;
    } else {
      console.log("có max mã");
      console.log(maxBill[0]);
      newBill["maHoaDon"] = Number(maxBill[0].maHoaDon) + 1;
    }
    console.log(newBill);
    const bill = new billModel(newBill);
    await bill.save();
    res.status(200).json(bill);
    console.log("bill", bill);
  } catch (err) {
    res.status(500).json({ error: "Tạo hóa đơn thất bại" });
    // console.log("err");
    // console.log(res.status);
  }
};
