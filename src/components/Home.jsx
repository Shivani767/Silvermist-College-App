import React from "react";
import "./css/home.css";
import HeroBanner from "./HeroBanner";
import $ from "jquery";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <div class="content">
        <h1>Home</h1>
        <br />
        <p>
        Established in 1995, Silvermist College of Engineering and Technology is a premier 
        institution of higher learning, nestled in the heart of Ashwood. As a constituent 
        college of the prestigious Ashwood University, we have consistently maintained high 
        standards in technical education. Our faculty comprises highly qualified and experienced 
        professionals who are dedicated to providing students with a comprehensive learning experience.
        Our campus is spread over 12 acres of lush greenery, with two academic blocks that house cutting-edge laboratories,
        offices, libraries, and lecture halls. We also have dedicated blocks for mechanical labs and workshops. To facilitate 
        the needs of our students, we have a branch of the Ashwood Bank and an ATM on campus.
        We offer a range of undergraduate and postgraduate programs in various fields of engineering and technology, including:

        Undergraduate Programs: 7 B.E. courses in Computer Science, Electrical Engineering, Mechanical Engineering, Civil Engineering, Aerospace Engineering, Biotechnology, and Chemical Engineering.
        Postgraduate Programs: 11 M.E./M.Tech. courses in Computer Science, Electrical Engineering, Mechanical Engineering, Civil Engineering, Aerospace Engineering, Biotechnology, Chemical Engineering, and Data Science.
        Doctoral Programs: Ph.D. programs in all constituent fields of engineering and technology.
        </p>
        <h3>Vision</h3>
        Empowering minds to shape a brighter, sustainable future together.
        <h3>Mission</h3>
        <ul>
          <li>
            Fostering a culture of innovation, inclusivity, and excellence, 
            Silvermist College of Engineering and Technology prepares students to 
            become responsible, adaptable, and visionary leaders, driving positive change 
            in a rapidly evolving world.
          </li>
          <li>
            Nurturing creative entrepreneurs and responsible global citizens
          </li>
          <li>
            We believe that collaboration is the spark that ignites innovation. 
            We are committed to fostering strong, meaningful relationships with esteemed 
            academic and research institutions, as well as industry leaders, both domestically 
            and internationally.
          </li>
          <li>
            Catalyzing Innovation, Amplifying Impact: Igniting creativity, accelerating growth, 
            and unlocking new revenue streams through world-class consultancy services.
          </li>
        </ul>
      </div>

      <div class="table">
        <h1>Career Launchpad: Soaring Success Rates</h1>

        <h2>
          <strong>Highlights of Placement Session 2023-24</strong>
          &nbsp;&nbsp;&nbsp;
        </h2>
        <table class="table-1-content">
          <tbody>
            <tr>
              <td>
                <strong>Company</strong>
              </td>
              <td>
                <strong>Offers</strong>
              </td>
            </tr>
            <tr>
              <td>Aerius Technologies</td>
              <td>7</td>
            </tr>
            <tr>
              <td>EcoCycle Inc.</td>
              <td>28</td>
            </tr>
            <tr>
              <td>Vantage Robotics</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Skybound Ventures</td>
              <td>9</td>
            </tr>
            <tr>
              <td>Five9</td>
              <td>18</td>
            </tr>
            <tr>
              <td>Oculus Systems</td>
              <td>38</td>
            </tr>
            <tr>
              <td>Lululemon</td>
              <td>48</td>
            </tr>
            <tr>
              <td>Optum</td>
              <td>13</td>
            </tr>
            <tr>
              <td>TechForge Solutions</td>
              <td>32</td>
            </tr>
            <tr>
              <td>CerebroX</td>
              <td>15</td>
            </tr>
            <tr>
              <td>Futura Materials</td>
              <td>9</td>
            </tr>
            <tr>
              <td>Kairos Analytics</td>
              <td>8</td>
            </tr>
            <tr>
              <td>Incture</td>
              <td>8</td>
            </tr>
            <tr>
              <td>InfiniTech</td>
              <td>7</td>
            </tr>
          </tbody>
        </table>
        <h2>
          <strong>Total No. of Offers </strong>
          &nbsp;&nbsp;&nbsp;
        </h2>
        <table class="table-2-content">
          <tbody>
            <tr>
              <td>
                <strong>Session</strong>
              </td>
              <td>
                <strong>Total Offers</strong>
              </td>
            </tr>
            <tr>
              <td>2023-2024</td>
              <td>645</td>
            </tr>
            <tr>
              <td>2022-2023</td>
              <td>564</td>
            </tr>
          </tbody>
        </table>

        <h2>
          <strong>Average Package</strong>
          &nbsp;&nbsp;&nbsp;
        </h2>
        <table class="table-3-content">
          <tbody>
            <tr>
              <td>
                <strong>Session</strong>
              </td>
              <td>
                <strong>Average CTC</strong>
              </td>
            </tr>
            <tr>
              <td>2023-2024</td>
              <td>$80,000 per year</td>
            </tr>
            <tr>
              <td>2022-2023</td>
              <td>$60,000 per year</td>
            </tr>
          </tbody>
        </table>

        <h2>
          <strong>No. of Companies</strong>
          &nbsp;&nbsp;&nbsp;
        </h2>
        <table class="table-4-content">
          <tbody>
            <tr>
              <td>
                <strong>Session</strong>
              </td>
              <td>
                <strong>Companies</strong>
              </td>
            </tr>
            <tr>
              <td>2023-2024</td>
              <td>350+</td>
            </tr>
            <tr>
              <td>2022-2023</td>
              <td>300+</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
