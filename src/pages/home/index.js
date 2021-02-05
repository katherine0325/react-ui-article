import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArticleLine from '../../components/article-line';
import { getArticleList } from './service';
import { message } from 'antd';
import './index.css';
import global from '../../global';

export default function Home(props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    init();
  }, [])

  async function init() {
    const loading = message.loading('加载中...');
    const result = await getArticleList();
    setList(result);
    setTimeout(loading, 0);
  }

  function handleBtnClick() {
    // props.refreshLayout({title: 'this is very difficult'});
    global.setTitle('this is a new title');
    props.refreshLayout();
  }

  return (
    <div className='home'>
      <button onClick={handleBtnClick}>修改标题</button>
      {list.map((item, index) => 
        <Link to={'/article?article_number=' + item.number} key={item.id}>
          <ArticleLine number={index + 1} title={item.title} date={item.created_at.slice(0, 10)}></ArticleLine>
        </Link>
      )}
    </div>
  )
}
