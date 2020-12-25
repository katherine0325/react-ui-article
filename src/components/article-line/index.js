import React from 'react';
import './index.css';

export default function ArticleLine({number, title, date}) {
  return (
    <div class="article-line">
      <div class="number">{number}</div>
      <div class="title">{title}</div>
      <div class="date">{date}</div>
    </div>
  )
}
