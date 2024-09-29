import axios from "axios";
import React, { useState } from "react";

export default function OTP() {
  const [email, setEmail] = useState("");
  const [field, setfield] = useState(false);
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setfield(true);
    if (email === "") {
      alert("Enter a email");
      setfield(false);
      return;
    }
    const data = { email: email };
    await axios
    .post("https://dic-backend.onrender.com/verification/", data)
    .then((res) => {
      alert(res.data);
    })
    .catch((err) => {
      alert(err);
    });
    setfield(false);
  };
  return (
    <>
      <div className="form-container">
        <form
          className="register-form form-style-10"
          onSubmit={handleSubmit}
          method="post"
          enctype="multipart/form-data"
        >
          <fieldset disabled={field}>
            <h1>GET OTP</h1>
            <label>
              Email
              <input
                type="email"
                name="email"
                className="form-field"
                placeholder=" lunalovegood@silvermist.edu"
                value={email || ""}
                onChange={handleChange}
              />
            </label>
            <div className="button-section">
              <button
                className="waves-effect waves-light btn center-align white-text text-darken-2 card-panel indigo darken-4  z-depth-1"
                style={{ backgroundColor: "#036089", color: "white" }}
                onClick={(event) => {
                  handleSubmit(event);
                }}
              >
                Generate OTP
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
