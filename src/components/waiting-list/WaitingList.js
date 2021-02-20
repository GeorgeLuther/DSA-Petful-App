import React from 'react'

export default function WaitingList(props) {
    let listNames = ['List Empty']

    if (props.nameList) {
        listNames = props.nameList.map((name, idx) => {
            return <li key={name+'_'+idx}>{name}</li>
        })
    }

    return (
        <section className="waitingList">
            <h2>Waiting List</h2>
            <ul>
                {listNames}
            </ul>
            <form>
                <label>
                    <label>Enter your name to join the waiting list:
                        <input
                            placeholder='Your Name'
                            onChange={props.setName}
                        >
                        </input>    
                    </label>
                    <button onClick={props.signUp}>
                        Join the List
                    </button>
                </label>
            </form>
        </section>
    )
}
