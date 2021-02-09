import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ArticleLine from '../../components/article-line';
import { getArticleList } from '../../api/home';
import { setList } from '../../store/home/action';
import { message } from 'antd';
import './index.css';

class Home extends Component {
  componentDidMount() {
    this.init();
  }

  async init() {
    const loading = message.loading('加载中...');
    const result = await getArticleList();
    this.props.setList(result);
    setTimeout(loading, 0);
  }

  render() {
    return (
      <div className='home'>
        {this.props.list && this.props.list.map((item, index) => 
          <Link to={'/article?article_number=' + item.number} key={item.id}>
            <ArticleLine number={index + 1} title={item.title} date={item.created_at.slice(0, 10)}></ArticleLine>
          </Link>
        )}
      </div>
    )
  }
}

export default connect(
  state => ({ ...state.home }),
  {
    setList,
  }
)(Home);
