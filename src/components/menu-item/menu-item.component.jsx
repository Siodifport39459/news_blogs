import React from 'react'
import './menu-item.styles.scss'
import {Link} from 'react-router-dom'


const MenuItem = ({title,subtitle,imageUrl}) => (
    <div style={ {
     backgroundImage: `url(${imageUrl})`}}
    
        className='menu-item'>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <Link  to="/news">Read More</Link>
            <p>{subtitle}</p>
        </div>
    </div>
)

export default MenuItem;