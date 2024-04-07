import React, { Component } from "react";
import CardItem from "../../components/cardItem/CardItem";
import Introdution from "../../components/introdution/introdution";
import "./HomePage.scss";
import productCallApi, { imageDeleteCallApi } from "../../utils/apiCaller";
import { ToastContainer, toast } from "react-toastify";
class HomePage extends Component {
  state = {
    products: [],
    // account: null,
  };
  loading = true;

  componentDidMount() {
    // const storedData = localStorage.getItem("_token");
    // this.setState({
    //   account: storedData ? JSON.parse(storedData) : "",
    // });
    productCallApi("", "get", null).then((res) => {
      //console.log(res.data);
      this.setState({
        products: res.data,
      });
      this.loading = false;
    });
  }
  onDelete = (id, img) => {
    // this.setState({
    //   id: id,
    //   hidden: !this.state.hidden,
    // });
    this.onAcceptDelete(id, img);
  };
  onAcceptDelete = (id, img) => {
    var { products } = this.state;
    const masp = { masp: id };
    productCallApi("", "delete", masp).then((res) => {
      console.log(res);
      if (res.status === 200) {
        toast.success("Xóa sản phẩm mã " + id + " thành công");
        var index = products.findIndex((obj) => obj.masp === id);
        imageDeleteCallApi({ fileName: img }, "deleteImg/")
          .then(async (resp) => {
            if (resp.status === 200) {
              toast.success("Xóa file ảnh thành công");
            }
          })
          .catch((er) => {});
        if (index !== -1) {
          products.splice(index, 1);
          this.setState({
            products: products,
          });
        }
      }
    });
  };
  toastMess = (type, mess) => {
    if (type === "err") {
      toast.error(mess);
    } else {
      toast.success(mess);
    }
  };
  showCardItem = () => {
    var result = null;
    console.log(this.state.products.length);

    if (this.state.products.length > 0) {
      result = this.state.products.map((product, index) => {
        return (
          <CardItem
            key={index}
            product={product}
            account={this.state.account}
            onDelete={this.onDelete}
            toastMess={this.toastMess}
          />
        );
      });
    }
    return result;
  };
  render() {
    return (
      <>
        <div>
          <ToastContainer />
          {this.loading ? (
            <div className="container mt-10">
              <div className="spinner-border text-primary m-a" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              <Introdution />
              <div className="container mt-10">
                <div className="text-center">
                  <div className="row" id="itemContent">
                    {this.showCardItem()}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}
export default HomePage;
