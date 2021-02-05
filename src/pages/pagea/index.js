import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCount, subCount } from '../../store/pagea/action';

class PageA extends Component {
    render() {
        return <div>
            <h1>aaaaa</h1>
            <div>
                <button onClick={this.props.addCount.bind(this, 2)}>加</button>
                <button onClick={this.props.subCount.bind(this, 1)}>减</button>
            </div>
            <div>
                <Link to="/b">跳转到B</Link>
            </div>
        </div>
    }
}

export default connect(
    null,
    {
        addCount,
        subCount,
    }
)(PageA);
