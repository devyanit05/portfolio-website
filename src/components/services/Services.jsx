import React from "react";
import "./services.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What more I learnt</h5>
      <h2>Co-curricular Activities</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Secretary(VIT Socials)</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsPatchCheckFill className="service__list-icons" size="35" />
              <p>
                Working as a Secretary at Social Welfare and Development
                Committee. Leading events such as Blood Donation Camp, Utkarsh,
                Atmabodh, etc. Leading a team of more than 80 coordinators.
              </p>
            </li>
          </ul>
        </article>
      </div>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Technical Secretary(Yuj - The Yoga Club)</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsPatchCheckFill className="service__list-icons" size="35" />
              <p>
                Working as a Secretary at Yuj and responsible for it's official
                website and all technical events. Leading more than 20
                coordinators.
              </p>
            </li>
          </ul>
        </article>
      </div>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Coordinator(VIT Socials)</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsPatchCheckFill className="service__list-icons" size="35" />
              <p>
                Worked as a coordinator in Social Welfare and Development
                Committee. Arranged many events such as Blood Donation Camp,
                Swaccha Pune Abhiyan, Atmabodh, etc.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
