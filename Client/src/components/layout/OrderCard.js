import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const OrderCard = ({ order }) => {
  const { Userinformation = {}, Articles = [] } = order;
  console.log("order.Articles", Userinformation);
  return (
    <Fragment>
      <tr>
        <td className="user-name">
          <h2 className="h5 text-black">
            <strong> {Userinformation.name}</strong>{" "}
            <p>{Userinformation.lastname}</p>
          </h2>{" "}
        </td>
        <td className="user-phone">{Userinformation.phonenumber}</td>
        <td className="user-emai">{Userinformation.email} </td>

        {Articles.map((article, i) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              borderBottom: "1px solid #dee2e6",
              justifyContent: "space-around"
            }}
          >
            <div key={i}>
              <p> name: {article.name} </p>
              <p> price: {article.price}</p>
              <p>quantity: {article.qte} </p>
            </div>
            <div>
              <Link
                to="/listofusers"
                onClick={() => () => {}}
                className="btn btn-info btn-sm"
              >
                X
              </Link>
            </div>
          </div>
        ))}
        <td>
          <Link
            to="/listofusers"
            onClick={() => () => {}}
            className="btn btn-danger btn-sm"
          >
            X
          </Link>
        </td>
      </tr>
    </Fragment>
  );
};

const mapstatetoprops = state => {
  return { name: "rami" };
};
export default connect(mapstatetoprops, {})(OrderCard);
