import React, { useState } from 'react';

const Tour = (props) => {
  const [readMore, setReadMore] =useState(false);
  return <article className='single-tour'>
    <img src={props.tourDetails.image} alt={props.tourDetails.name} />
    <footer>
      <div className='tour-info'>
        <h4>{props.tourDetails.name}</h4>
        <h4 className='tour'>${props.tourDetails.price}</h4>
      </div>
      <p>
        {readMore ? (props.tourDetails.info) : `${(props.tourDetails.info).substring(0,200)}...`}
      <button onClick={() => setReadMore(!readMore)}>{readMore ? 'Show Less' : 'Read More'}</button>
      </p>
      <button className='delete-btn' onClick={() => (props.removeTour)(props.tourDetails.id)}>Not Interested</button>
      </footer>
  </article>
};

export default Tour;
