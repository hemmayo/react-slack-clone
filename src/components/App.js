import React, { Component } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import ColorPanel from "./ColorPanel/ColorPanel";
import SidePanel from "./SidePanel/SidePanel";
import Messages from "./Messages/Messages";
import MetaPanel from "./MetaPanel/MetaPanel";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Grid columns="equal" className={"app"} style={{ background: "#eee" }}>
        <GridColumn>
          <ColorPanel></ColorPanel>
          <SidePanel></SidePanel>
        </GridColumn>
        <GridColumn></GridColumn>

        <Grid.Column style={{ marginLeft: 320 }}>
          <Messages></Messages>
        </Grid.Column>
        <Grid.Column width={4}>
          <MetaPanel></MetaPanel>
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;
