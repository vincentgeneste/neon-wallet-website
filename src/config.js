import linuxIcon from "./images/linux-logo.png";
import appleIcon from "./images/apple-logo.png";
import windowsIcon from "./images/windows-logo.png";

export const downloadOptions = [
  {
    id: "WINDOWS",
    display: "Windows",
    href:
      "https://github.com/merl111/PhantomWallet/releases/download/v0.9.0/PhantomWallet-0-9-0-windows.zip",
    icon: windowsIcon,
    size: "33.7 MB",
    fileExtension: "PhantomWallet-0-9-0-windows.zip"
  },
  {
    id: "MAC_OS",
    display: "Mac OS",
    href:
      "https://github.com/merl111/PhantomWallet/releases/download/v0.9.0/PhantomWallet-0-9-0-osx.zip",
    icon: appleIcon,
    size: "30.88 MB",
    fileExtension: "PhantomWallet-0-9-0-osx.zip"
  },
  {
    id: "LINUX_DEB",
    display: "Linux",
    href:
      "https://github.com/merl111/PhantomWallet/releases/download/v0.9.0/PhantomWallet-0-9-0-linux.zip",
    icon: linuxIcon,
    size: "31.91 MB",
    fileExtension: "PhantomWallet-0-9-0-linux.zip"
  }
];

export const latestRelease =
  "https://github.com/merl111/PhantomWallet/releases/tag/v0.9.0";
