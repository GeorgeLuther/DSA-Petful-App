import React from 'react'

export default function PetDisplay(props) {
        console.log(props.animal)
    return props.animal 
            ? (<div className="petDisplay">
                <img 
                    className='picture' 
                    src={props.animal.imageURL}
                    alt={props.animal.description}
                ></img>
                <p className='name'><b>Name: </b>{props.animal.name}</p>
                <p className='gender'><b>Gender: </b>{props.animal.gender}</p>
                <p className='age'><b>Age: </b>{props.animal.age}</p>
                <p className='breed'><b>Breed: </b>{props.animal.breed}</p>
                <p className='story'><b>{props.animal.name}'s story: </b>{props.animal.story}</p>
                {props.canAdopt && <button className='adopt' type={'button'} onClick={props.handleClickAdopt} id={props.type}>Adopt Now!</button>}
            </div>
            )
            : (<div>
                <p>No pets are here right now.</p>
            </div>
            )
  
}
