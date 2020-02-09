import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { add_product_to_db } from "../Actions_art_wear/ProdcutAction";
const AdminAddProduct = ({ add_product_to_db }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    gender: "",
    color: "",
    saison: ""
  });
  const { name, category, price, gender, color, saison } = formData;
  const onchange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    add_product_to_db({ name, category, price, gender, color, saison });
  };
  return (
    <Fragment>
      <div className="site-wrap">
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <Link to="index">Home</Link>
                <span className="mx-2 mb-0">/</span>{" "}
                <Link to="cart">Admin</Link>
                <span className="mx-2 mb-0">/</span>
                <strong className="text-black">Add product</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row">
              {/* --------------- start Product Info ---------------------------------  */}
              <div className="col-md-6 mb-5 mb-md-0">
                <h2 className="h3 mb-3 text-black">Add images</h2>
                <div className="p-3 p-lg-5 border">
                  {/* ----------  autre parametre ------  */}

                  <button className="btn btn-sm  btn-primary">
                    Import Photo
                  </button>
                </div>
              </div>

              {/* --------------- End  Product Info ---------------------------------  */}

              {/* --------------- startForm Product  ---------------------------------  */}

              <div className="col-md-6">
                <form onSubmit={onSubmit}>
                  <div className="col-md-12 mb-5 mb-md-0">
                    <h2 className="h3 mb-3 text-black">Save Product</h2>
                    <div className="p-3 p-lg-5 border">
                      <div className="form-group row">
                        {/* ----------  name ------  */}

                        <div className="col-md-6">
                          <label htmlFor="c_fname" className="text-black">
                            name <span className="text-danger">*</span>
                          </label>
                          <input
                            value={name}
                            onChange={onchange}
                            type="text"
                            className="form-control"
                            id="c_fname"
                            name="name"
                            placeholder="---------"
                          />
                        </div>

                        {/* ----------  category ------  */}

                        <div className="col-md-6">
                          <label htmlFor="c_lname" className="text-black">
                            category <span className="text-danger">*</span>
                          </label>
                          <select class="custom-select">
                            <option value="1">Casquette</option>
                            <option value="2">Jean</option>
                            <option value="3">Pull</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group row">
                        {/* ----------  price ------  */}

                        <div className="col-md-6">
                          <label htmlFor="c_fname" className="text-black">
                            price <span className="text-danger">*</span>
                          </label>
                          <input
                            onChange={onchange}
                            type="text"
                            className="form-control"
                            id="c_fname"
                            name="price"
                            placeholder="---------"
                          />
                        </div>

                        {/* ----------  gender ------  */}

                        <div className="col-md-6">
                          <label htmlFor="c_lname" className="text-black">
                            gendre <span className="text-danger">*</span>
                          </label>
                          <select class="custom-select ">
                            <option value="1">Men</option>
                            <option value="2">Woman</option>
                            <option value="3">Children</option>
                          </select>
                        </div>
                      </div>

                      {/* ---------- color ------  */}

                      <div className="form-group row">
                        <div className="col-md-6">
                          <label
                            htmlFor="c_state_country"
                            className="text-black"
                          >
                            color
                          </label>
                          <input
                            onChange={onchange}
                            value={color}
                            type="text"
                            className="form-control"
                            id="c_state_country"
                            name="color"
                            placeholder="---------"
                          />
                        </div>

                        {/* ----------  saison ------  */}

                        <div className="col-md-6">
                          <label htmlFor="c_postal_zip" className="text-black">
                            saison
                          </label>
                          <select class="custom-select ">
                            <option value="1">Summer</option>
                            <option value="2">Winter</option>
                          </select>
                        </div>
                      </div>

                      {/* ----------  other prop  ------  */}
                      {/*    <div className="form-group row">

                        <div className="col-md-6">
                          <label htmlFor="c_fname" className="text-black">
                            other prop  <span className="text-danger">*</span>
                          </label>
                          <input
                            value={name}
                            onChange={onchange}
                            type="text"
                            className="form-control"
                            id="c_fname"
                            name="other prop "
                            placeholder="other prop "
                          />
                        </div>

                       //   ----------  other prop ------  

                        <div className="col-md-6">
                          <label htmlFor="c_lname" className="text-black">
                            other prop <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="c_lname"
                            name="other prop"
                            placeholder="other prop other prop"
                          />
                        </div>
                      </div>*/}

                      <div className=" row  justify-content-around ">
                        <input
                          type="submit"
                          className="btn btn-warning btn-sm "
                          value="Create Product"
                        />
                      </div>
                    </div>
                  </div>
                </form>
                {/* --------------- End Form Product  ---------------------------------  */}
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
    user: state.sign_Reducer.user
  };
};
export default connect(mapstatetoprops, { add_product_to_db })(AdminAddProduct);
