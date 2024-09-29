import React, { useEffect, useState } from "react";
import "./css/studentCard.css";
import axios from "axios";
import Lottie from "lottie-react";
import animationData from "./lotttie/loading.json";

export default function Students() {
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState(false);
  const getData = async () => {
    await axios
      .get("https://dic-backend.onrender.com/student/")
      .then((res) => {
        setInfo(res.data);
        setLoaded(true);
      })
      .catch((error) => {
        console.log(error);
        alert("Error : ", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  function search(e) {
    let input = document.getElementById("searchbar1").value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName("ag-courses_item");
    console.log(x);
    for (let index = 0; index < x.length; index++) {
      let heading = x[index].children[0].children[1].children[0].innerHTML;
      heading = heading.toLowerCase();
      let text = x[index].children[0].children[1].children[1].innerHTML;
      text = text.toLowerCase();
      let text1 = x[index].children[0].children[1].children[2].innerHTML;
      text1 = text1.toLowerCase();
      if (
        !text.includes(input) &&
        !text1.includes(input) &&
        !heading.includes(input)
      ) {
        x[index].style.display = "none";
      } else {
        x[index].style.display = "inline";
      }
    }
  }

  return (
    <>
      <div style={{ textAlign: "center" }} data-aos="fade-up">
        <img
          src="https://img.freepik.com/free-vector/happy-diverse-students-celebrating-graduation-from-school_74855-5853.jpg?w=900&t=st=1687760418~exp=1687761018~hmac=d2cbc2fd3a1d51307724b55a8231208aafd5582e893a7d12a673d46ddc2d60e3"
          width={"80%"}
          alt="stu"
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <label for="searchbar1">Search for facilities:</label>{" "}
        &nbsp;&nbsp;&nbsp;
        <input
          id="searchbar1"
          onChange={search}
          type="text"
          name="search"
          placeholder="Ex: Luna Lovegood"
        />
      </div>
      {!loaded ? (
        <Lottie
          style={{ height: "200px", marginTop: "40px" }}
          animationData={animationData}
        />
      ) : (
        <div class="ag-format-container">
          <div class="ag-courses_box">
            {info.map((user) => (
              <div class="ag-courses_item">
                <a class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>
                  <div class="ag-courses-item_title">
                    <img
                      style={{
                        margin: "10px 0",
                        borderRadius: "100%",
                        height: "100px",
                        width: "100px",
                      }}
                      src={`https://dic-backend.onrender.com/uploads/${user.profile}`}
                      alt="profile"
                    />
                    <p style={{ fontSize: "2.1rem" }}>{user.name || " "}</p>
                    <p className="grey">{user.roll_no || " "}</p>
                    <p className="grey">{user.branch || " "}</p>
                  </div>
                  <div class="ag-courses-item_date-box">
                    <h4>
                      About: <br />
                      <p className="grey">{user.about || " "}</p>
                    </h4>
                    <h4>
                      Address:
                      <br />
                      <p className="grey">{user.address || " "}</p>
                    </h4>
                    <br />
                    <h4>Personal Info:</h4>
                    <p className="grey"> {user.email || " "}</p>
                    <p className="grey"> {user.phone_no || " "}</p>
                    <p className="grey"> {user.city || " "}</p>
                    <br />
                    <h4>Personal Links:</h4>
                    <p className="grey">
                      {" "}
                      <a
                        style={{ textDecoration: "none", color: "white" }}
                        href={user.links[0]}
                        target="_blank"
                      >
                        Link 1
                      </a>
                    </p>
                    <p className="grey">
                      {" "}
                      <a
                        style={{ textDecoration: "none", color: "white" }}
                        href={user.links[1]}
                        target="_blank"
                      >
                        Link 2
                      </a>
                    </p>
                    <p className="grey">
                      {" "}
                      <a
                        style={{ textDecoration: "none", color: "white" }}
                        href={user.links[2]}
                        target="_blank"
                      >
                        Link 3
                      </a>
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
