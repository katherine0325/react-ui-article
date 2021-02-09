import React, { Component } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';
import { getArticle } from '../../api/article';
import { setTitle, setHtml } from '../../store/article/action';
import { convertParams } from '../../lib';
import { message } from 'antd';
import './index.css';

class Article extends Component {
  componentDidMount() {
    const params = convertParams(this.props.history.location.search);
    this.init(params.article_number);
  }

  async init(article_number) {
      const loading = message.loading('加载中...');
      const result = await getArticle(article_number);
      this.props.setTitle(result.title);
      this.props.setHtml(marked(result.body));
      setTimeout(loading, 0);
  }

  render() {
    return (
        <div className='article'>
            <h2 className="title">{this.props.title}</h2>
            <div className="html" dangerouslySetInnerHTML={{__html: this.props.html}}></div>
        </div>
    )
  }
}

export default connect(
  state => ({ ...state.article }),
  {
    setTitle,
    setHtml,
  }
)(Article);
