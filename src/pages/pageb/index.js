import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PageB extends Component {
    render() {
        return <div>
            <h1>{this.props.title}</h1>
            <div>{this.props.count}</div>
            <div>
                <Link to="/a">跳转到A</Link>
            </div>
        </div>
    }
}

export default connect(
    state => ({
        ...state.pageb,
        count: state.pagea.count
    })
)(PageB);
