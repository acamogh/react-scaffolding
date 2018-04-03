import React, { Component } from 'react';
import { map } from 'lodash';
import { Navbar, Nav, NavItem, MenuItem, FormControl } from 'react-bootstrap';


export default class Terms extends Component {
    constructor() {
        super()
        this.state = {
            activeNav: ""
        }
    }
    componentDidMount() {
        this.props.actions.userActions()
    }


    render() {
        return (
            <div >
                hello
            </div>
        );
    }
}

