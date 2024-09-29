import React from "react";
import "./css/contact us.css";
import axios from "axios";

export default function ContactUs() {
  // Form Validation
  async function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    let firstname = event.target[0].value;
    let lastname = event.target[1].value;
    let email = event.target[2].value;
    let querry = event.target[3].value;

    await axios
      .post("https://dic-backend.onrender.com/querry", {
        firstname,
        lastname,
        email,
        querry,
      })
      .then((res) => {
        console.log(res);
        alert("Success", res);
      })
      .catch((err) => {
        console.log(err);
        alert("Error"+err);
      });
      document.getElementById("querry-form").reset();
  }

  return (
    <>
      <div style={{ textAlign: "center" }} data-aos="fade-up">
        <img
          src="https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899174.jpg?w=900&t=st=1688244260~exp=1688244860~hmac=85062763b103ceedf79de42fcda51e79d87842cdc10414745082e8d013a54939"
          width={"80%"}
          alt="stu"
        />
      </div>
      <form id="querry-form" onSubmit={handleSubmit}>
        <h1>Querry/Contact Form</h1>
        <hr />
        <h3>User Details:</h3>
        <label for="firstname">First name: </label>
        <input type="text" name="firstname" placeholder="Luna" required />
        &nbsp;&nbsp;
        <label for="lastname">Last name: </label>
        <input type="text" name="lastname" placeholder="Lovegood" required />
        <br />
        <br />
        <label for="Email">Email(optional): </label>
        <input type="email" name="Email" placeholder="lunalovegood@silvermist.edu" />
        <br />
        <br />
        <h3>Querry:</h3>
        <textarea
          rows="6"
          name="querry"
          placeholder="Describe your querry here..."
        ></textarea>
        <br />
        <br />
        <input type="reset" value="Reset" class="button" />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="submit" value="Send" class="button" />
        <br />
      </form>

      <div class="con">
        <h1>Contact Us</h1>
        <hr />
        <ul>
          <li>Silvermist College of Engineering and Technology </li>
          <li>Wizarding Way Silvermist,</li>
          <li>CA, United States of America</li>
          <li>P.O. Box: 94101</li>
          <li>+1(555) 123-4568</li>
          <li>info@silvermist.edu</li>
          <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511237.761840447!2d72.1428915875!3d30.74809900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feda45e945a31%3A0xdc967b3a7e0f1e95!2sUniversity%20Institute%20Of%20Engineering%20and%20Technology%2C%20Panjab%20University!5e0!3m2!1sen!2sin!4v1686501691180!5m2!1sen!2sin"
            width="200vh"
            height="200vh"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </ul>
      </div>
    </>
  );
}
