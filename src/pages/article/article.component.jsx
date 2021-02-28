//import { getByTitle } from '@testing-library/react';
import React from 'react'
//import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import Article_Data from './article.data.js'
import ArticlePreview  from '../../components/article-preview/article-preview.component'





class Article extends React.Component{
    constructor(props){
        super(props);
        this.state={
            collections: Article_Data
        }
    }



    render(){
        const {collections}=this.state
        return(<div className='article-page'>{
            collections.map(({id, ...otherCollectionProps}) => (
                <ArticlePreview key={id} {...otherCollectionProps}/>
            ))
    }
        </div>

        )
        
    }
}
export default Article;