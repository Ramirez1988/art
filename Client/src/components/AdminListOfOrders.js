import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import OrderCard from "./layout/OrderCard";
import { get_All_Orders } from "../Actions_art_wear/Cart_And_Order_Action";

const AdminListOfUsers = ({
  orders,
  Articles,
  userinformation,
  get_All_Orders
}) => {
  useEffect(() => {
    get_All_Orders();
  }, []);
  


  return (
    <Fragment>
      <div className="site-wrap">
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <Link to="index.html">Home</Link>
                <span className="mx-2 mb-0">/</span>
                <strong className="text-black">Orders</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <form className="col-md-12" method="post">
                <div className="site-blocks-table">
                  <table className="table table-bordered table-hover">
                    <thead style={{backgroundColor:'rgba(136, 75, 216, 0.24)'}}>
                      <tr>
                        <th className="product-thumbnail">Name</th>
                        <th className="product-name">Status</th>
                        <th className="product-price">Email</th>
                        <th className="product-quantity">Details Orders</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/************************************************************************************** */}
                      {orders.map((el, i) => (
                        <OrderCard order={el} key={i} />
                      ))}

                      {/* ****************** */}
                    </tbody>
                  </table>
                </div>
              </form>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="row mb-5">
                  <Link
                    to="/shopping"
                    className="btn btn-outline-primary btn-sm btn-block"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const mapstatetoprops = state => {
  return {
    orders: state.order_Reducer,
  };
};
export default connect(mapstatetoprops, { get_All_Orders })(AdminListOfUsers);
