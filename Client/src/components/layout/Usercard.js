import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Admin_delete_User_Profile } from "../../Actions_art_wear/profilAction";

const Usercard = ({ user, Admin_delete_User_Profile }) => {
  const {
    name = "",
    lastname = "",
    email = "",
    phonenumber = "",
    city = "",
    adress = ""
  } = user;
  return (
    <Fragment>
      <tr>
        <td>
        <select class="custom-select custom-select-lg mb-3">
          <option value="2">Admin</option>
          <option value="3">User</option>
        </select>
        </td>

        <td className="product-name">
          <h2 className="h5 text-black">
            {" "}
            <strong> {name}</strong> {`,${lastname}`}{" "}
          </h2>
        </td>
        <td>{email} </td>
        <td>
          <div className="input-group mb-3" style={{ maxWidth: "120px" }}>
            {phonenumber}
          </div>
        </td>
        <td>{`${city}: ${adress}`} </td>
        <td>
          <Link
            to="/listofusers"
            onClick={() => Admin_delete_User_Profile(user._id)}
            className="btn btn-info btn-sm"
          >
            X
          </Link>
        </td>
      </tr>
    </Fragment>
  );
};

const mapstatetoprops = state => {
  return {
    order: state.panier_Reducer
  };
};
export default connect(mapstatetoprops, {
  Admin_delete_User_Profile
})(Usercard);
