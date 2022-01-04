import React from 'react'


function Photo(props)
{
    const frame = props.finalPhoto;
    return(
        <figure className="figure">
        <img className="photo" src = {frame.imageLink} alt={frame.description}/>
        <figcaption><p>{frame.description}</p></figcaption>
        <div className="button-container">
        <button className="button-remove" onClick={
            () => {
                props.onRemovePhoto(frame)
            }
        }>Remove</button>
        </div>
     </figure>
    );
}

export default Photo
