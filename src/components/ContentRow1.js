import React from 'react';
import MainCard from './MainCard';

function ContentRow1(props) {
    console.log(props);
    return (
        <div className="row">
            {props.data.map((data, i) => {
               return <MainCard key={i} title = {data.title} quantity = {data.quantity} icon = {data.icon} color = {data.color}/>
            })}
        </div>
    );
}

export default ContentRow1;