import React from 'react';

import ArticleItem from '../article-item/article-item.component';

import './article-preview.styles.scss';

const ArticlePreview = ({ title,items }) => (
  <div className='Article-preview'>
    <h1 className='title'>{title}</h1>
    <div className='preview'>
      {items.filter((item,idx) =>idx<2 )
      .map(({id, ...otherItemProps}) => (
          <ArticleItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default ArticlePreview;
