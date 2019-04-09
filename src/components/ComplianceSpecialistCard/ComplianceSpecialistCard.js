import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

const ComplianceSpecialistCard = () => (
    <Card>
        <Image src='https://picsum.photos/200/150' />
        <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
            <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
        </Card.Content>
        <Card.Content extra>
        <a>
            <Icon name='user' />
            22 Friends
        </a>
        </Card.Content>
    </Card>
)

export default ComplianceSpecialistCard