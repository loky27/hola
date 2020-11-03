import React from "react";
import Icon from "./icon";
export function Sidebar(props) {
  const Icons = props.icons;
  return (
    <div className="sidebar">
      <Icon title={Icons[0].title} iconUrl={Icons[0].icon} />
      <Icon title={Icons[1].title} iconUrl={Icons[1].icon} />
      <Icon title={Icons[2].title} iconUrl={Icons[2].icon} />
      <Icon title={Icons[3].title} iconUrl={Icons[3].icon} />
    </div>
  );
}
