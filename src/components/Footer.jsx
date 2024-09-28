import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <svg xmlns=" http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#03709f"
            fill-opacity="1"
            d="M0,96L34.3,101.3C68.6,107,137,117,206,144C274.3,171,343,213,411,218.7C480,224,549,192,617,170.7C685.7,149,754,139,823,160C891.4,181,960,235,1029,261.3C1097.1,288,1166,288,1234,272C1302.9,256,1371,224,1406,208L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
        <div class="footer">
          <div class="flex-container">
            <div class="flex-box">
              <h3>Profile</h3>
              Campus
              <br />
              Ambassadors
              <br />
              Facilities
            </div>
            <div class="flex-box">
              <h3>Facilities</h3>
              Labs
              <br />
              ML Computers
              <br />
              Hostels
              <br />
              GYM
            </div>
            <div class="flex-box">
              <h3>Legal</h3>
              Privacy Policies
              <br />
              Terms and Conditions
            </div>
          </div>
          Social Media:
          <a
            href="https://github.com/abhishekGoyal274"
            target="_blank"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <i class="fab fa-github">&nbsp;</i>
          </a>
          |
          <a
            href="https://www.instagram.com/abhishekgoyal274"
            target="_blank"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <i class="fab fa-instagram">&nbsp;</i>
          </a>
          |
          <a
            href="https://twitter.com/Abhishe30755904"
            target="_blank"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <i class="fab fa-twitter"></i>
          </a>
          <br />
          <p>
            Copyrights © 2023, All rights reserved with UIET, Panjab University,
            Chandigarh.
          </p>
        </div>
      </footer>
    </>
  );
}
