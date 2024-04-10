// import "./ListUser.scss";
import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { billCallApi } from "../../../utils/apiCaller";
import BillListComponent from "../../../components/BillList/BillList";

class BillListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: [],
    };
  }

  loading = true;
  componentDidMount() {
    billCallApi("", "GET", null)
      .then((res) => {
        this.setState({
          bills: res.data,
        });
      })
      .catch((err) => {
        toast.error("Không có hóa đơn nào tồn tại");
      });
    this.loading = false;
  }
  onDelete = (mahoadon, username) => {
    this.onAcceptDelete(mahoadon, username);
  };
  onAcceptDelete = (mahoadon, username) => {
    var { bills } = this.state;
    billCallApi("", "DELETE", { maHoaDon: mahoadon, username: username })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Xóa thông hóa đơn thành công");
          var index = bills.findIndex(
            (obj) => obj.username === username && obj.maHoaDon === mahoadon
          );
          if (index !== -1) {
            bills.splice(index, 1);
            this.setState({
              bills: bills,
            });
          }
        } else {
          toast.error("Xóa hóa đơn thất bại");
        }
      })
      .catch((err) => {
        toast.error("Xóa người dùng thất bại");
      });
  };
  findIndex = (users, username) => {
    var result = -1;
    users.forEach((user, index) => {
      if (user.username === username) {
        result = index;
      }
    });
    return result;
  };
  render() {
    return (
      <div>
        <ToastContainer />
        {this.loading ? (
          <div className="container mt-10">
            <div className="spinner-border text-primary m-a" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="row justify-content-center align-items-center g-2">
              <div className="col">
                <div className="panel panel-primary li-box mt-10">
                  <div className="panel-heading">
                    <h3 className="panel-tittle">Danh sách các hóa đơn</h3>
                  </div>
                  <div className="panel-body">
                    <BillListComponent
                      bills={this.state.bills}
                      onDelete={this.onDelete}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default BillListPage;
