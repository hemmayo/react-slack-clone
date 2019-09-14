import React from "react";
import { Menu } from "semantic-ui-react";
import UserPanel from "./UserPanel";

export default class SidePanel extends React.Component {
  render() {
    return (
      <Menu
        size="large"
        inverted
        vertical
        style={{ backgroundColor: "#4c3c4c", fontSize: "1.2rem" }}
        fixed="left"
      >
        <UserPanel></UserPanel>
      </Menu>
    );
  }
}
