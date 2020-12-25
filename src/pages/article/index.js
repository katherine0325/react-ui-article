import React, { useState, useEffect } from 'react';
import marked from 'marked';
import { getArticle } from './service';
import { convertParams } from '../../lib';
import { message } from 'antd';
import './index.css';

export default function Article(props) {
    const [ title, setTitle ] = useState('');
    const [ html, setHtml ] = useState('<div></div>');

    useEffect(() => {
        const params = convertParams(props.history.location.search);
        init(params.article_number);
    }, []);

    async function init(article_number) {
        const loading = message.loading('加载中...');
        const result = await getArticle(article_number);
        setTitle(result.title);
        setHtml(marked(result.body));
        setTimeout(loading, 0);
    }

    return (
        <div className='article'>
            <h2 className="title">{title}</h2>
            <div className="html" dangerouslySetInnerHTML={{__html: html}}></div>
        </div>
    )
}