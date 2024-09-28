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
          New Admission Query for session 2023-2024 The University Institute of
          Engineering and Technology was established in 2002 and is an in-campus
          Department of Panjab University, Chandigarh. The institute has
          maintained high quality in technical education. The well qualified
          facility is the backbone of the institute. Well equipped laboratories
          provide the exposure to the students towards practical aspects of
          engineering. State-of-art computing facilities and internet
          connectivity through 1Gbps National Knowledge Network (NKN) provide
          ample scope for students to learn round the clock. The whole campus is
          Wi-Fi enabled and students having laptops avail this facility in the
          institute as well as in the hostels. With the regular revision of
          syllabi, more industry oriented programme and open Electives have been
          introduced in the curriculum. UIET is spread over 10.5 acres of land
          with lush greenery. It has two academic blocks which include labs,
          office, library, and lecture halls. There are blocks for mechanical
          labs and workshops. There is a branch of State Bank of India and an
          ATM of State Bank of India on the campus. Students take admission from
          all parts of the country and few of them from Abroad too. Admitted
          students includes day scholars as well as large number of out station
          ones who avail hostel facility which completely facilitates needs of
          the residential. University Institute of Engineering & Technology
          (UIET) is a institute of Panjab University which has prospered by
          leaps & bounds over the years achieving great academic heights besides
          foraying into the top 50 Engineering Colleges of the Country. UIET
          offers 06 Undergraduate (B.E.) courses, 09 Postgraduate (M.E./M.Tech.
          degree) courses and Doctoral courses in all constituent fields being
          pursued. Many Post Graduate candidates with nation scholarship join
          this Institute. UIET has unique distinction of having been awarded
          TEQIP-II and TEQIP-III, DIC, DBT-Builder Grant, Feast Grant by
          Government of India, besides funding of large number of Research
          Projects and consultancy projects. The facility of UIET have many
          patents to the credit beside many other already applied in the
          pipeline.
        </p>
        <h3>Vision</h3>
        To be the Front runner in Engineering Education and Research.
        <h3>Mission</h3>
        <ul>
          <li>
            produce professionally competent students for a career in
            engineering and technology by providing value-based quality
            education.
          </li>
          <li>
            To provide the readily acceptable quality trained manpower to meet
            the requirements of the National and International industry in the
            emerging areas of engineering and technology as well as for research
            and design.
          </li>
          <li>
            To develop strong collaboration with academic and research
            institutes as well as the industry in the country and abroad.
          </li>
          <li>
            To provide world level consultancy to generate wealth through
            services and new product design.
          </li>
        </ul>
      </div>

      <div class="table">
        <h1>Placement Stats</h1>

        <h2>
          <strong>Highlights of Placement Session 2022-23</strong>
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
              <td>Amazon</td>
              <td>5</td>
            </tr>
            <tr>
              <td>American Express</td>
              <td>14</td>
            </tr>
            <tr>
              <td>Deloitte</td>
              <td>14</td>
            </tr>
            <tr>
              <td>KPMG</td>
              <td>21</td>
            </tr>
            <tr>
              <td>ZS Associates</td>
              <td>18</td>
            </tr>
            <tr>
              <td>Incedo</td>
              <td>38</td>
            </tr>
            <tr>
              <td>Cognizant</td>
              <td>37</td>
            </tr>
            <tr>
              <td>Optum</td>
              <td>23</td>
            </tr>
            <tr>
              <td>JSW</td>
              <td>11</td>
            </tr>
            <tr>
              <td>Mahindra and Mahindra</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Mylo</td>
              <td>9</td>
            </tr>
            <tr>
              <td>Policy Bazaar</td>
              <td>8</td>
            </tr>
            <tr>
              <td>Incture</td>
              <td>8</td>
            </tr>
            <tr>
              <td>HPCL-Mittal Energy Limited (HMEL)</td>
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
              <td>2022-2023</td>
              <td>382</td>
            </tr>
            <tr>
              <td>2021-2022</td>
              <td>423</td>
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
              <td>2022-2023</td>
              <td>8.72 LPA</td>
            </tr>
            <tr>
              <td>2021-2022</td>
              <td>8.85 LPA</td>
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
              <td>2022-2023</td>
              <td>50+</td>
            </tr>
            <tr>
              <td>2021-2022</td>
              <td>50+</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
