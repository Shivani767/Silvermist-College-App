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
              Silvermist College of Engineering and Technology is situated on a sprawling 
              campus of 5.0404 acres, providing a serene and conducive environment for learning 
              and growth. The campus is designed to foster a sense of independence, self-dependence, 
              and self-actualization among its students, faculty, and staff.
              </p>
            </div>
            <div class="flip-card-back">
              <a href="https://www.bing.com/images/search?view=detailV2&ccid=32p7zSE6&id=883C84F1190E5B593C3CABB8BAA0E175ADC12799&thid=OIP.32p7zSE67D6WqouS7f27QwHaD4&mediaurl=https%3a%2f%2fdaytriptips.com%2fwp-content%2fuploads%2f2022%2f04%2fOxford-christ-church-university.jpg&exph=628&expw=1200&q=harry+potter+CIg+Campus&simid=608053123860211586&FORM=IRPRST&ck=8CD11BB77D7D262B51BE43F1C1A12BDF&selectedIndex=32&itb=0" target="_blank" rel="noopener noreferrer">Link</a>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>Hostel</h2>
              <p>
              Gryffindor Girls' Hostel and Slytherin Boys' Hostel offer spacious, 
              well-furnished rooms with amenities like common rooms, dining halls, 
              and gyms, ensuring a comfortable living experience.
              </p>
            </div>
            <div class="flip-card-back">
              <a href="https://www.bing.com/images/search?view=detailV2&ccid=uwdZpVa%2b&id=E40F7FE03FFDA96AFC6E31DE3CB0F7E5C116A6C1&thid=OIP.uwdZpVa-r2unAzS241m01QHaEe&mediaurl=https%3a%2f%2ferikstore.com%2fblog%2fwp-content%2fuploads%2f2022%2f09%2fLocalizaciones-harry-potter.jpg&exph=1160&expw=1920&q=Hostel+harry+potter&simid=608036446526833669&FORM=IRPRST&ck=DDDE8670CA81462403073D360CC3025F&selectedIndex=20&itb=0" target="_blank" rel="noopener noreferrer">Link</a>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>Canteen</h2>
              <p>
              Our canteen, inspired by the Great Hall of Hogwarts, is a spacious 
              and welcoming space where students and staff can enjoy delicious and 
              hygienic meals. The canteen is well-furnished, neat, and clean, providing 
              a comfortable dining experience.
              </p>
            </div>
            <div class="flip-card-back">
              <a href="https://www.bing.com/images/search?view=detailV2&ccid=qv2xGHeR&id=BB9E8089D72492677277C85696963CA0F115381E&thid=OIP.qv2xGHeRWKPf0HFss2Z5LQHaE8&mediaurl=https%3a%2f%2fen.idei.club%2fuploads%2fposts%2f2023-06%2f1687547852_en-idei-club-p-harry-potter-canteen-dizain-pinterest-2.jpg&exph=2048&expw=3072&q=canteen++harry+potter&simid=608012686745948603&FORM=IRPRST&ck=1685AD0BB740FBA23E10FD621F7A6C8D&selectedIndex=0&itb=0" target="_blank" rel="noopener noreferrer">Link</a>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>Audotorium</h2>
              <p>
              Inspired by the grandeur of Hogwarts, the Silvermist College Auditorium 
              is a state-of-the-art facility designed to host a wide range of events, from 
              cultural performances to academic seminars. With a seating capacity of over 200, 
              this air-conditioned auditorium is the perfect venue for conferences, workshops, and other events.
              </p>
            </div>
            <div class="flip-card-back">
              <a href="https://www.bing.com/images/search?view=detailV2&ccid=CwVtVRce&id=AC15A3B0005F7256B7A5D97E77BB60CCB0A5022E&thid=OIP.CwVtVRceN2V3aCoeMNSt_gAAAA&mediaurl=https%3a%2f%2flive-core-api.travalour.com%2fcommon%2fv1%2fthumbnail%2fabb2df2f-c896-41da-a3b1-ace40985e5fb%3fformat%3dwebp%26width%3d360&exph=276&expw=360&q=miller+auditorium+harry+potter&simid=607989811752284553&FORM=IRPRST&ck=303864B99096ECBA22590309551822E7&selectedIndex=6&itb=0" target="_blank" rel="noopener noreferrer">Link</a>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>Seminar Hall</h2>
              <p>
              The Silvermist College Seminar Hall is a vibrant and dynamic space that 
              fosters learning, collaboration, and innovation. With its state-of-the-art 
              facilities and comfortable seating, this hall is the perfect venue for seminars, 
              conferences, workshops, and guest lectures.
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
              At Silvermist College, we believe that sports and physical activity 
              are essential for maintaining good health and overall well-being. That's 
              why we've built a state-of-the-art Sports Complex, designed to cater to the 
              needs of our students and staff members.
              </p>
            </div>
            <div class="flip-card-back">
              <a href="https://www.bing.com/images/search?view=detailV2&ccid=uC%2f0xQHG&id=F662D519127D9E21485545F65D479C12E3C41491&thid=OIP.uC_0xQHG-Jnc6HQZunw2XgHaEK&mediaurl=https%3a%2f%2fn4g.com%2farticles%2fwp-content%2fuploads%2f2023%2f04%2fHarry-Potter-Quidditch-Champions-field.jpg&exph=675&expw=1200&q=harry+potter+Sports+Complex&simid=608015628810280800&FORM=IRPRST&ck=E4AF390DDFF780E879D42650FB41A46D&selectedIndex=7&itb=0" target="_blank" rel="noopener noreferrer">Link</a>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>Conference Hall</h2>
              <p>
              A spacious hall with a seating capacity of over 70, perfect for meetings, 
              seminars, group discussions, and socio-cultural functions, fostering 
              collaboration and community engagement.
              </p>
            </div>
            <div class="flip-card-back">
              <a href="https://www.bing.com/images/search?view=detailV2&ccid=sh6Qfy%2bR&id=234480BF489F1B1AA97291D38DD9355E85488375&thid=OIP.sh6Qfy-RkIPPiU_92-cxdgHaDJ&mediaurl=https%3a%2f%2fsoranews24.com%2fwp-content%2fuploads%2fsites%2f3%2f2016%2f06%2fmr-1.png&exph=476&expw=1120&q=harry+potter+Conference+Hall&simid=607988299955644902&FORM=IRPRST&ck=362218D6BD599F1D8F883674A8C1DB5A&selectedIndex=44&itb=0" target="_blank" rel="noopener noreferrer">Link</a>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <h2>Library</h2>
              <p>
              The Silvermist College Library is a state-of-the-art facility that 
              serves as a powerhouse of knowledge and information for our students. 
              Equipped with a library automation software, our library provides a vast 
              collection of books, journals, and online resources that cater to the diverse 
              needs of our students.
              </p>
            </div>
            <div class="flip-card-back">
              <a href="https://www.bing.com/images/search?view=detailV2&ccid=VGhQBq%2fZ&id=D39A0319557BF7D17564A6F2AABA08FD4C4DA932&thid=OIP.VGhQBq_ZYt-As7lIB5dniwHaFC&mediaurl=https%3a%2f%2fwallpaperaccess.com%2ffull%2f3346755.jpg&exph=4016&expw=5904&q=harry+potter+Ibrary&simid=608041630529424248&FORM=IRPRST&ck=422A5BA1425DF40D092B826C551CAE36&selectedIndex=0&itb=0" target="_blank" rel="noopener noreferrer">Link</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
