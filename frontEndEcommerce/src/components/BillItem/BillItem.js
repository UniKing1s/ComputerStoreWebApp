import React, { Component } from "react";
// import "./UserItem.scss";
import { NavLink } from "react-router-dom";
class BillItem extends Component {
  onDelete = (mahoadon, username) => {
    if (window.confirm("Bạn chắc chắc muốn xóa không ?")) {
      console.log("mhd: " + mahoadon + "and user: " + username);
      this.props.onDelete(mahoadon, username);
    }
  };

  render() {
    var { bill, index } = this.props;
    var tinhtrang = bill.tinhtrang ? "Đã thanh toán" : "Chưa thanh toán";
    var statusClass = bill.tinhtrang ? "success" : "danger";
    return (
      <tr className="">
        <td>{index + 1}</td>
        <td>{bill.maHoaDon}</td>
        <td>{bill.username}</td>
        <td>
          <strong>
            {new Intl.NumberFormat("vi", {
              currency: "VND",
              style: "currency",
            }).format(bill.tongTien)}
          </strong>
        </td>
        <td>
          {bill.ngayHoaDon ? bill.ngayHoaDon.toLocaleString() : bill.ngayHoaDon}
        </td>
        <td>
          <span className={"badge text-bg-" + statusClass}>{tinhtrang}</span>
        </td>
        <td>
          <NavLink
            type="button"
            className="btn btn-success mr-10"
            to={
              "ChiTietBill?mahoadon=" + bill.maHoaDon + "&user=" + bill.username
            }
          >
            Xem chi tiết
          </NavLink>
          <button
            type="button"
            className="btn btn-danger mr-10"
            onClick={() => this.onDelete(bill.maHoaDon, bill.username)}
          >
            Hoàn trả
          </button>
        </td>
      </tr>
    );
  }
}

export default BillItem;
