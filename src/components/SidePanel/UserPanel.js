import React from "react";
import { Grid, Icon, Header } from "semantic-ui-react";

export default class UserPanel extends React.Component {
  render() {
    return (
      <Grid style={{ background: "#4c3c4c" }}>
        <Grid.Column>
          <Grid.Row style={{ padding: "1.2rem", margin: 0 }}>
            <Header inverted floated="left" as="h2">
              <Icon name="code"></Icon>
              <Header.Content>DevChat</Header.Content>
            </Header>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}
