import React from "react";
import "./css/noPage.css";
import Lottie from "lottie-react";
import animationData from "./lotttie/404.json";
import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <div className="center">
      <Lottie animationData={animationData} height={"400px"} width={"400px"} />
      No page Found!
      <br />
      <button
        style={{
          marginTop: "20px ",
        }}
        class="button"
      >
        <Link
          style={{
            textDecoration: "none",
            borderRadius: "20px",
            color: "black",
          }}
          to="/"
        >
          Home
        </Link>
      </button>
    </div>
  );
}
