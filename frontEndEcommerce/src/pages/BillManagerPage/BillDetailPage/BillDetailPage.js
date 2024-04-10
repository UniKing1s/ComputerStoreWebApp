import React, { useEffect, useState } from "react";
// import "./LoginPage.scss";
import { NavLink, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { billCallApi } from "../../../utils/apiCaller";

const BillDetailPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const mahoadon = searchParams.get("mahoadon");
  const user = searchParams.get("user");
  const navi = useHistory();
  const [bill, setBill] = useState({});
  const account = useSelector((state) => state.account);
  //   const dispatch = useDispatch();
  useEffect(() => {
    return async () => {
      await billCallApi(
        `geyBillByUserAndMaHD?username=${user}&maHoaDon=${mahoadon}`,
        "GET",
        null
      ).then((res) => {
        if (res.status === 200) {
          setBill(res.data);
        }
      });
    };
  }, []);
  if (
    (user === account.username && account.role !== 0 && account.logged) ||
    (account.role === 0 && account.logged)
  ) {
    return (
      <div>
        <ToastContainer />
        <div className="container" style={{ marginTop: "50px" }}>
          <div className="panel panel-primary">
            <div className="box f-c">
              <div
                className="panel-heading w-100 border-rounded"
                style={{ display: "inline-block", height: "auto" }}
              >
                <div
                  className="f-c "
                  style={{ display: "inline-block", height: "auto" }}
                >
                  <div className="form-floating mb-3 pt-50">
                    <h3
                      className="panel-tittle"
                      style={{ textAlign: "center" }}
                    >
                      Chi Tiết Hóa Đơn Mã {mahoadon}
                    </h3>
                  </div>
                  <div className="form-floating pt-50">
                    <label className="form-check-label f-l">
                      Người Dùng: {bill.username}
                    </label>
                  </div>
                  <div className="form-floating pt-50">
                    <label className="form-check-label f-l">
                      Người Nhận: {bill.tenNguoiNhan}
                    </label>
                  </div>
                  <div className="form-floating pt-50">
                    <label className="form-check-label f-l">
                      Số Điện Thoại: {bill.phoneNumber}
                    </label>
                  </div>
                  <div className="form-floating pt-50">
                    <label className="form-check-label f-l">
                      Số Điện Thoại: {bill.phoneNumber}
                    </label>
                  </div>
                  <div className="form-floating pt-50">
                    <label className="form-check-label f-l">
                      Địa chỉ: {bill.diaChi}
                    </label>
                  </div>
                  <div className="form-floating pt-50">
                    <label className="form-check-label f-l">
                      Loại thanh toán: {bill.loaiThanhToan}
                    </label>
                  </div>
                  <div className="form-floating pt-50">
                    <label className="form-check-label f-l">
                      Ngày tạo hóa đơn:
                    </label>
                  </div>
                  <div className="form-floating pt-50">
                    <label className="form-check-label f-l">
                      {bill.ngayHoaDon.toLocaleString()}
                    </label>
                  </div>
                  <div className="form-floating pt-50">
                    <label className="form-check-label f-l">
                      Tình trạng:{" "}
                      {bill.tinhtrang ? "Đã thanh toán" : "Chưa thanh toán"}
                    </label>
                  </div>
                  {/* <div className="form-floating mb-3">
                    
                  </div> */}
                  {/* <label className="t-l mb-3 f-r checkText"></label> */}
                  {/* <div className="form-floating mb-3">
                    <input
                      type={showPass ? "text" : "password"}
                      className="form-control"
                      itemID="floatingInput"
                      placeholder="Mật khẩu"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Mật khẩu</label>
                  </div>
                  <div className="form-floating mb-3">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        checked={showPass}
                        onChange={() => setShowPass(!showPass)}
                        id="showPass"
                      />
                      <label
                        className="form-check-label f-l"
                        htmlFor="showPass"
                      >
                        Hiển thị mật khẩu
                      </label>
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    {inLogin ? (
                      <button
                        type="button"
                        className="btn btn-secondary
                           w-100"
                        id="login"
                      >
                        <div
                          className="spinner-border text-primary"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-primary w-100"
                        id="login"
                        onClick={() => loginSubmit()}
                      >
                        Đăng nhập
                      </button>
                    )}
                  </div>
                  <div className="form-floating mb-3">
                    <NavLink
                      to="/register"
                      // type="button"
                      className="btn btn-primary w-50 f-l"
                      // onClick={() => register()}
                    >
                      Đăng Ký
                    </NavLink>
                  </div> */}
                  {/*<div className="form-floating mb-3 f-r">
                      <a href="/forgetPass">Quên mật khẩu</a>
                    </div>*/}
                </div>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    navi.push("/");
  }
};

export default BillDetailPage;
