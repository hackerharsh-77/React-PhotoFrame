import React from 'react'
import Photo from './Photo'

function  Photoframe(props)
{
    return(
    <div>
        <button className="addIcon">+</button>
        <div className="photo-grid">
        {props.PhotoBlock.map((singlePhoto, index)=> <Photo key={index} finalPhoto={singlePhoto} onRemovePhoto={props.onRemovePhoto}/> )}
        </div>
    </div>
    );
}
 
export default Photoframe
