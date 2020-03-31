import React from "react";
import DownloadOptions from "./DownloadOptions";
import logo from "../../images/phantom-wallet.png";

const LandingPage = props => (
  <div className="landing-page-container">
    <div id="details-container">
      <div id="details">
        <div className="main-container">
          <div className="main-image"><img id="phantom-logo" src={logo} alt="phantom-logo" /></div>
          <div className="main-title">
              <span className="wallet-title">PHANTOM WALLET</span>
          </div>
        </div>
        <div id="description">
          An extended wallet for the <span className="name">Phantasma blockchain</span><br/>Available on Windows, Mac OS, and Linux
        </div>
        <DownloadOptions options={props.downloadOptions} />
        <a href={props.latestReleaseUrl} target="blank">
          Check the latest release on GitHub
        </a>
      </div>
    </div>
    <div id="screen-shot">
      <div id="screen-shot-container" />
    </div>
  </div>
);

export default LandingPage;
