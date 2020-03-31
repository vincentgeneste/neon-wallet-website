import React, { Component } from "react";
import rp from "request-promise";
import LandingPage from "./components/landing-page/LandingPage";
import Footer from "./components/footer/Footer";
import { downloadOptions, latestRelease } from "./config";

import "./App.css";

class App extends Component {
  state = {
    downloadOptions: downloadOptions,
    latestReleaseUrl: latestRelease
  };

  componentDidMount() {
    // NOTE: If this request fails the default downloadOptions from config.js will be leveraged.
    rp("https://api.github.com/repos/merl111/PhantomWallet/releases/latest")
      .then(response => {
        const parsed = JSON.parse(response);
        const mostRecentOptions = mapGithubResponseToOptions(
          parsed,
          downloadOptions
        );
        this.setState({
          downloadOptions: mostRecentOptions,
          latestReleaseUrl: parsed.html_url
        });
      })
      .catch(err => {
        console.error(
          "Request to https://api.github.com/repos/merl111/PhantomWallet/releases/latest failed!",
          err
        );
      });
  }

  render() {
    return (
      <div className="App">
        <LandingPage {...this.state} />
        <Footer />
      </div>
    );
  }
}

function mapGithubResponseToOptions(data, downloadOptions) {
  function generateSizeString(bytes) {
    return `${(bytes / 1000000).toFixed(2)} MB`;
  }

  function findAndMapOption(option) {
    const asset = data.assets.find(
      asset => asset.name.includes(option.fileExtension)
    );
    option.href = asset.browser_download_url;
    option.size = generateSizeString(asset.size);
    option.extension = option.fileExtension;
    return option;
  }

  return downloadOptions.map(findAndMapOption);
}

export default App;
