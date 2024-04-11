import React, { Component } from "react";
import { connect } from "react-redux";
// import "./UserItem.scss";
import { NavLink } from "react-router-dom";
class BillItem extends Component {
  // account = null;
  onDelete = (mahoadon, username) => {
    if (window.confirm("Bạn chắc chắc muốn hoàn lại hóa đơn không ?")) {
      // console.log("mhd: " + mahoadon + "and user: " + username);
      this.props.onDelete(mahoadon, username);
    }
  };

  render() {
    const { account } = this.props;
    // this.account = account;
    var { bill, index } = this.props;
    var tinhtrang = bill.tinhtrang ? "Đã thanh toán" : "Chưa thanh toán";
    var statusClass = bill.tinhtrang ? "success" : "danger";
    //date from bill
    const date = new Date(bill.ngayHoaDon);
    const oneDayLater = new Date(date.setDate(date.getDate() + 1));
    const today = new Date();
    // console.log("Mabill: " + bill.maHoaDon);
    // console.log("onedaylater: " + oneDayLater);
    // console.log("today: " + today);
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
          {(today.getTime() >= oneDayLater.getTime() && !bill.tinhtrang) ||
          (account.role === 0 && account.logged) ? (
            <>
              <button
                type="button"
                className="btn btn-danger mr-10"
                onClick={() => this.onDelete(bill.maHoaDon, bill.username)}
              >
                Hoàn trả
              </button>
            </>
          ) : (
            <>
              <button type="button" className="btn btn-danger mr-10" disabled>
                Hoàn trả
              </button>
            </>
          )}
        </td>
      </tr>
    );
  }
}
const mapStateToProps = (state) => ({
  account: state.account, // Replace with your slice/property
});
export default connect(mapStateToProps)(BillItem);
