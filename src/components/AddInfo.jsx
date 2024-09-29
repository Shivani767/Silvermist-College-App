import React, { useState } from "react";
import "./css/form.css";
import HeroBanner from "./HeroBanner";
import axios from "axios";
import OTP from "./OTP";

export default function AddInfo() {
  const [inputs, setInputs] = useState({});
  const [image, setImage] = useState("");
  const [link1, setLink1] = useState("");
  const [link2, setLink2] = useState("");
  const [link3, setLink3] = useState("");
  const [disabled, setdisabled] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setdisabled(true);

    const links = [link1, link2, link3];
    const data = { ...inputs, links, image };
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", data.name);
    formData.append("adress", data.address);
    formData.append("city", data.city);
    formData.append("email", data.email);
    formData.append("OTP", data.OTP);
    formData.append("roll_no", data.roll_no);
    formData.append("phone_no", data.phone_no);
    formData.append("about", data.about);
    formData.append("branch", data.branch);
    formData.append("links", data.links);

    await axios
      .post(`https://dic-backend.onrender.com/student/upload`, formData)
      .then((res) => {
        alert(res.data.Message);
        setImage("");
        setLink1("");
        setLink2("");
        setLink3("");
        setInputs({});
      })
      .catch((err) => {
        alert("Error");
      });
    setdisabled(false);
  };
  return (
    <>
      <HeroBanner />
      <OTP />
      <div className="form-container">
        <form
          className="register-form form-style-10"
          onSubmit={handleSubmit}
          method="post"
          enctype="multipart/form-data"
        >
          <fieldset disabled={disabled}>
            <h1>Register</h1>
            <div className="section">
              <span>1</span>Personal Info
            </div>
            <div className="inner-wrap">
              <label>
                Add profile Image:
                <img
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "100%",
                    marginLeft: "30px",
                    marginBottom: "20px",
                  }}
                  src={image === "" ? "" : URL.createObjectURL(image)}
                  alt="preview"
                />
                <input
                  type="file"
                  name="avatar"
                  accept=".jpg"
                  onChange={(event) => {
                    setImage(event.target.files[0]);
                  }}
                />
              </label>
              <label>
                Name *
                <input
                  type="text"
                  name="name"
                  required="true"
                  className="form-field"
                  placeholder="Luna Lovegood"
                  value={inputs.name || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                Address
                <input
                  type="text"
                  name="address"
                  className="form-field"
                  placeholder="Wizarding Way Silvermist"
                  value={inputs.address || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                City
                <input
                  type="text"
                  name="city"
                  className="form-field"
                  placeholder="CA, United States of America"
                  value={inputs.city || ""}
                  onChange={handleChange}
                />
              </label>

              <label>
                Email *
                <input
                  type="email"
                  name="email"
                  className="form-field"
                  required="true"
                  placeholder=" lunalovegood@silvermist.edu"
                  value={inputs.email || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                Phone Number
                <input
                  type="text"
                  name="phone_no"
                  className="form-field"
                  placeholder="+1(555) 678091"
                  value={inputs.phone_no || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                About Yourself
                <input
                  type="text"
                  style={{ height: "80px" }}
                  name="about"
                  className="form-field"
                  placeholder="Hello my name is ...."
                  value={inputs.about || ""}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="section">
              <span>2</span>University Info
            </div>
            <div className="inner-wrap">
              <label>
                Roll No *
                <input
                  type="text"
                  name="roll_no"
                  className="form-field"
                  placeholder="DM004"
                  required="true"
                  value={inputs.roll_no || ""}
                  onChange={handleChange}
                />
              </label>
              <label>
                Branch *
                <input
                  type="text"
                  name="branch"
                  className="form-field"
                  required="true"
                  placeholder="ECE"
                  value={inputs.branch || ""}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="section">
              <span>3</span>Personal/Work Links
            </div>
            <div className="inner-wrap">
              <label>
                Links 1
                <input
                  type="text"
                  name="link1"
                  required="true"
                  className="form-field"
                  value={link1 || ""}
                  onChange={(event) => {
                    setLink1(event.target.value);
                  }}
                />
              </label>
              <label>
                Links 2
                <input
                  type="text"
                  name="link1"
                  required="true"
                  className="form-field"
                  value={link2 || ""}
                  onChange={(event) => {
                    setLink2(event.target.value);
                  }}
                />
              </label>
              <label>
                Links 3
                <input
                  type="text"
                  name="link1"
                  required="true"
                  className="form-field"
                  value={link3 || ""}
                  onChange={(event) => {
                    setLink3(event.target.value);
                  }}
                />
              </label>
            </div>
            <div className="section">
              <span>4</span>OTP
            </div>
            <div className="inner-wrap">
              <label>
                OPT*
                <input
                  type="text"
                  name="OTP"
                  className="form-field"
                  placeholder="77777"
                  value={inputs.OTP || ""}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="button-section">
              <button
                className="waves-effect waves-light btn center-align white-text text-darken-2 card-panel indigo darken-4  z-depth-1"
                style={{ backgroundColor: "#036089", color: "white" }}
                onClick={(event) => {
                  handleSubmit(event);
                }}
              >
                Register
              </button>
              <span className="privacy-policy">
                You agree to our Terms and Policy.
              </span>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}
