import React, { Component } from 'react'
import { Container, Header, Divider } from 'semantic-ui-react'
import ComplianceSpecialistCard from '../../components/ComplianceSpecialistCard/ComplianceSpecialistCard';

class Home extends Component {
    render() {
        return(
            <Container>
                <Header as='h1'>Home</Header>
                <Divider />
                <ComplianceSpecialistCard />
            </Container>
        )
    }
}

export default Home