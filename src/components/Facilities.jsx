import React from "react";
import "./css/facility.css";
import HeroBanner from "./HeroBanner";
import $ from "jquery";

export default function Facilities() {
  // Search Bar
  function search(e) {
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName("flip-card");
    for (let index = 0; index < x.length; index++) {
      let heading = x[index].children[0].children[0].children[0].innerHTML;
      heading = heading.toLowerCase();
      let text = x[index].children[0].children[0].children[1].innerHTML;
      text = text.toLowerCase();
      if (!text.includes(input) && !heading.includes(input)) {
        x[index].style.display = "none";
      } else {
        x[index].style.display = "inherit";
      }
    }
  }
  return (
    <>
      <HeroBanner />
      <h1 class="head">Facilities</h1>
      <div style={{ textAlign: "center" }}>
        <label for="searchbar">Search for facilities:</label> &nbsp;&nbsp;&nbsp;
        <input
          id="searchbar"
          onChange={search}
          type="text"
          name="search"
          placeholder="Ex : Library"
        />
      </div>

      <div class="flex-container">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>Campus</h2>
              <p>
                UIET has been established in an area of Ac 5.0404 decimals. The
                campus accomplishes with the laboratories, workshop to satisfy
                the practical needs of the students. An inmate of UIET team has
                the prosperity of the feelings of independence, self dependence,
                self actualization with in the Campus.
              </p>
            </div>
            <div class="flip-card-back">
              <img src="https://www.campusoption.com/images/colleges/gallery/02_01_17_070213_College.jpg" />
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>Hostel</h2>
              <p>
                There is a separate hostel for girls, situated within the campus
                and the boys hostel located near the college campus. The rooms
                are spacious, well furnished, self contained and duly
                maintained.
              </p>
            </div>
            <div class="flip-card-back">
              <img src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/04/24/Pictures/_761782ec-09e9-11e6-b721-c78c25b321e6.jpg" />
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>Canteen</h2>
              <p>
                UIET has well furnished neat and clean canteen with two times
                breakfirst, Lunch & Dinner facilities for the students and Staff
                members. The Institute provides hyginic food for the students
                and staffs.
              </p>
            </div>
            <div class="flip-card-back">
              <img src="https://10619-2.s.cdn12.com/rests/original/110_505325726.jpg" />
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>Audotorium</h2>
              <p>
                The Institute has a more then 200 seated air-conditioned
                auditorium is built up on about 10000 sq. feet area. UIET plans
                to host various conferences , seminars and workshops in the
                auditorium.
              </p>
            </div>
            <div class="flip-card-back">
              <img src="https://uiet.co.in/images/aud.jpg" />
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>Seminar Hall</h2>
              <p>
                The Institute has seminar hall with adequate capacity to
                accommodate more than 100 people. The hall is equipped with the
                latest facilities & Spacious. The seminar hall provide for the
                right ambience for big gatherings and also for interactions with
                the guest lecturers and also used for conferences and workshops.
              </p>
            </div>
            <div class="flip-card-back">
              <img src="https://img.collegedekhocdn.com/media/img/institute/crawled_images/None/TW4TQWEYQ3E5Y.jpg" />
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>Sports</h2>
              <p>
                Sports is the best way to provide good health and physically fit
                for everyone. For this purpose UIET built up a Sports Complex,
                functioning to ensure the needs of sports activities for the
                students and staff members.
              </p>
            </div>
            <div class="flip-card-back">
              <img src="https://playo.gumlet.io/BASKETBALLCOURTSECTOR14/1.PNG?auto=compress,format&h=300" />
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>Conference Hall</h2>
              <p>
                UIET built up a big Conference Hall which accommodates meetings
                & seminars with capacity of more then 70 seats capacity. Apart
                from this the hall is also used for group discussion and Socio
                Cultural functions.
              </p>
            </div>
            <div class="flip-card-back">
              <img src="https://uiet.co.in/images/conf.jpg" />
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>Library</h2>
              <p>
                The Library is equiped with a Library automation Software. A
                source of unlimited knowledge and information for students ever
                enthusiastic about learning is inside the UIET library, with
                space to accommodate many students at the same time. A
                powerhouse in itself, it is the place most frequented by
                students.
              </p>
            </div>
            <div class="flip-card-back">
              <img src="https://images.shiksha.com/mediadata/images/1604055138phpsi01eR.jpeg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
