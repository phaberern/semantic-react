import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Segment } from 'semantic-ui-react'

//containers
import Home from '../Home/Home'
import Rule from '../Rule/Rule'
import Queue from '../Queue/Queue'

class Content extends Component {
    render() {
        return(
            <Segment>
                <Route path='/' exact component={Home}/>
                <Route path='/rules' exact component={Rule}/>
                <Route path='/queues' exact component={Queue}/>
            </Segment>
        )
    }
}

export default Content