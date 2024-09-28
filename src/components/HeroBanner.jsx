import React from "react";

export default function HeroBanner() {
  return (
    <>
      <div class="hero-banner"  data-aos="fade-up">
        <div
          style={{
            backgroundColor: "rgb(151, 151, 151)",
            padding: "20px",
            opacity: "0.8",
          }}
        >
          <div class="hero-banner-heading">
            University Institute of Engineering and Technology
          </div>
          <div class="hero-banner-text">
            “A Place with No Limits and No Boundaries.”
          </div>
        </div>
      </div>
    </>
  );
}
