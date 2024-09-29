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
            Silvermist College of Engineering and Technology
          </div>
          <div class="hero-banner-text">
            “A Place of Endless Possibilities”
          </div>
        </div>
      </div>
    </>
  );
}
