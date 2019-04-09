import React, { Component } from 'react'
import { Container, Header, Divider } from 'semantic-ui-react'

class Rule extends Component {
    state = {
        companyID : 1,
        rules: [
            {
                "rule1": "test rule 1"
            }
        ]
    }
    render() {
        return(
            <Container>
                <Header as='h1'>Rules</Header>
                <Divider />
            </Container>
        )
    }
}

export default Rule