import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCake,
  faEnvelope,
  faLocation,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./App.css";

export default function App() {
  return (
    <div className="container-fluid">
      <div className="hero-section">
        <div className="profile-container">
          <div className="profile-picture">
            <img src="/images/logo.jpg" alt="Cake Day Logo" />
          </div>
        </div>
        <h1 className="title">GIB Research Lab</h1>
        <h4 className="subtitle">
          GIB - powering innovation, connecting technology
        </h4>
        <div className="icon-group">
          <a
            href="mailto:gibmnr@gmail.com"
            target="_blank"
            className="icon-box"
          >
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=9864832233&text=Hi"
            target="_blank"
            className="icon-box"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="icon" />
          </a>
          <a
            href="https://www.google.com/maps/place/GIB+-+Beginning+of+Innovative+Generation/@28.9658363,80.1800013,762m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39a1ab5dfbac735b:0x3c638d0894f05a65!8m2!3d28.9658363!4d80.1800013!16s%2Fg%2F11fks3tbp0?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="icon-box"
          >
            <FontAwesomeIcon icon={faLocation} className="icon" />
          </a>
        </div>
      </div>

      <div className="info-section">
        {/* <p className="description">
          GIB - powering innovation, connecting technology
        </p> */}

        <div className="contact-info">
          <div className="contact-container">
            <div className="contact-item">
              <div className="contact-details">
                <FontAwesomeIcon icon={faUser} />
                <p>
                  <strong>Umesh Raj Pant</strong>
                </p>
                <p>(Managing Director)</p>
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faPhone} /> 9861151077
                </p>
                <a href="mailto:pantumesh11@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} /> pantumesh11@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-details">
                <FontAwesomeIcon icon={faUser} />
                <p>
                  <strong>Bhuwan Bista</strong>
                </p>
                <p>(Execution Head)</p>
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faPhone} /> 9868775155
                </p>
                <a href="mailto:bhuwanbist990@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} /> bhuwanbist990@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="email-info">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:gibmnr@gmail.com">gibmnr@gmail.com</a>
        </div>

        <div className="location-info">
          <p>
            📍 Street Number 5, Bhimdatta 10400, Sudurpashchim Province, Nepal
            <br />
            <a
              href="https://www.google.com/maps/place/GIB+-+Beginning+of+Innovative+Generation/@28.9658363,80.1800013,762m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39a1ab5dfbac735b:0x3c638d0894f05a65!8m2!3d28.9658363!4d80.1800013!16s%2Fg%2F11fks3tbp0?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
              className="map-link"
            >
              Show on map
            </a>
          </p>
        </div>

        <div className="birthday-info">
          <p>Established : April 13, 2024</p>
        </div>

        <div className="social-media">
          <p>Find us on:</p>
          <div className="social-links">
            <a href="https://www.facebook.com/gibmnr" className="social-link">
              <FontAwesomeIcon icon={faFacebook} />
              Facebook
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=9779864832233&text=Hi"
              target="_blank"
              className="social-link"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              Whatsapp
            </a>
            <a
              href="https://www.instagram.com/gibresearchlab/"
              target="_blank"
              className="social-link"
            >
              <FontAwesomeIcon icon={faInstagram} />
              Instagram
            </a>
            <a href="https://www.tiktok.com/@gibnepal" className="social-link">
              <FontAwesomeIcon icon={faTiktok} />
              Tiktok
            </a>
          </div>
        </div>
        <div className="button-container"></div>
        <div className="contact-btn">
          <FontAwesomeIcon icon={faUser} color="white" />
          <a href="/UmeshRajPant.vcf" download="UmeshRajPant.vcf">
            Add Contact
          </a>
        </div>
      </div>
    </div>
  );
}
