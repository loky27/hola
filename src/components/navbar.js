import React from "react";
import Logo from "./logo";
import SearchBar from "./search-bar";
import Ic from "./ic";
import cam from "../icons/iconfinder_ic_videocam_48px_3669181.png";
import icon2 from "../icons/iconfinder_ic_view_module_48px_3669149.png";
import icon3 from "../icons/iconfinder_icon-ios7-bell_211694.png";
import Login from "./login";
export default function Navbar(props) {
  return (
    <div className="navbar">
      <Logo logo={props.logo} />
      <SearchBar />
      <Ic iconUrl={cam} />
      <Ic iconUrl={icon2} />
      <Ic iconUrl={icon3} />
      <Login />
    </div>
  );
}
