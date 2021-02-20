import React from 'react'
import {Link} from 'react-router-dom'
import cageDog from '../../assets/dog-in-cage.jpg'
import homeCat from '../../assets/cat-at-home.jpg'
import './Landing.css'

export default function Landing() {
    return (
        <>
        <section className='howItWorks'>
            <h2>How it works</h2>
            <p>Petful is a first come first serve pet adoption agency. Those who join the waiting list put into a queue. 
                They can then see the available cats and dogs. When it is their turn they are given 
                the choice between one cat and one dog that is currently available. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link to={'/adopt'}>
                <button>Find your match!</button>
            </Link>
        </section>
        <img id='cageDog' src={cageDog} alt='dog in cage'></img>
        <section className='about'>
            <h2>About us</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        </section>
        <img id='homeCat' src={homeCat} alt='cat at home'></img>
        </>
    )
}
