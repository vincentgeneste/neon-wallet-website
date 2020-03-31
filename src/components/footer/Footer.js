import React from "react";

const donationLinks = [
  {
    display: "Want to support us?",
    address: "P2K61GfcUbfWqCur644iLECZ62NAefuKgBkB6FrpMsqYHv6"
  }
];

const Donations = () =>
  donationLinks.map((e, index) => (
    <div key={index} id="donation">
      <div id="description">{e.display}</div>
      <div id="address">{e.address}</div>
      <div id="made">Made with <i className='fa fa-heart'></i>for Phantasma</div>
    </div>
  ));

const Footer = () => (
  <footer>
    <div id="footer-content">
      <Donations />
    </div>
  </footer>
);

export default Footer;
