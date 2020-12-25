import React, { Component } from "react";
import generateLayout from '../lib/generate-layout';
import './default.css';

class Default extends Component {
    render() {
        return (
            <div className='layout-default'>
              <div className="header">
                <div className="dark">
                  <h1>Katherine的技术博客</h1>
                </div>
              </div>
              <div className="section">
                <div className="main">
                  {this.props.children}
                </div>
                {/* <p className="github-site">本项目为React前端项目，代码地址：<a href="https://github.com/katherine0325/react-tec-blog" target="_blank">https://github.com/katherine0325/tec-blog</a></p> */}
              </div>
            </div>
        )
    }
}

export default generateLayout(Default);
