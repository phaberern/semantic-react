import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class Nav extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return(
            <Menu fluid vertical tabular>
                <Menu.Item as={ Link } to={'/'} name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item as={ Link } to={'/rules'} name='rules' active={activeItem === 'rules'} onClick={this.handleItemClick} />
                <Menu.Item as={ Link } to={'/queues'} name='queues' active={activeItem === 'queues'} onClick={this.handleItemClick} />
            </Menu>            
        )
    }
}

export default Nav