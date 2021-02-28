import React from 'react';
import './article-item.styles.scss';

//functional component

const ArticleItem = ({subtitle,title,imageUrl}) => (
    <div className="article-item">
        <div className="image"
        style={{
            backgroundImage:`url(${imageUrl})`
        }}>
            <div className="article-footer">
                <span className='name'>{title}</span>
               
                
                </div>
          </div>
          <span className='name'>{subtitle}</span>
    </div>
)

export default ArticleItem;