import React, { Component } from "react";
import generateLayout from '../lib/generate-layout';
import './default.css';
import global from '../global';

class Default extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    componentDidMount() {
      this.setState(global.globalData);
    }

    refreshLayout() {
      this.setState(global.globalData);
    }

    render() {
        const { component: Component, ...matchProps } = this.props;
        return (
            <div className='layout-default'>
              <div className="header">
                <div className="dark">
                  {/* <h1>Katherine的技术博客</h1> */}
                  <h1>{this.state.title}</h1>
                </div>
              </div>
              <div className="section">
                <div className="main">
                  {/* {this.props.children} */}
                  <Component refreshLayout={this.refreshLayout.bind(this)} {...matchProps} />
                </div>
                {/* <p className="github-site">本项目为React前端项目，代码地址：<a href="https://github.com/katherine0325/react-ui-article" target="_blank">https://github.com/katherine0325/react-ui-article</a></p> */}
              </div>
            </div>
        )
    }
}

export default generateLayout(Default);
