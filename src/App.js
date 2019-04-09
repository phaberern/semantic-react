import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

// containers
import Nav from './containers/Nav/Nav'
import Content from './containers/Content/Content'
// components 
import Logo from './components/Logo/Logo'

class App extends Component {
  render() {
    return(
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column width={3}>
            <Logo />
          </Grid.Column>
          <Grid.Column width={13}>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column width={3}>
            <Nav /> 
          </Grid.Column>
          <Grid.Column width={13}>
            <Content />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default App