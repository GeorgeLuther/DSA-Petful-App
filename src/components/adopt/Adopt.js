import React, { Component } from 'react'

import './Adopt.css';

import PetDisplay from '../pet-display/PetDisplay'
import WaitingList from '../waiting-list/WaitingList'

import PetsApiService from '../../services/pets-api-service'
import PeopleApiService from '../../services/people-api-service'
import randomPerson from '../../services/random-people'

export default class Adopt extends Component {
    state = {
        isLoadingPets: true,
        dog: null,
        cat: null,

        isLoadingPeople: true,
        waitingList: ['Ace Uno'],

        userName: '',
        isWaiting: false,
        canAdopt: false,
    }
    rand=(min,max)=>{  
        min=Math.ceil(min) 
        max=Math.floor(max) 
        return Math.floor(Math.random()*(max-min+1))+min 
    }
    flipCoin=()=> this.rand(0,1)
    handleChangeName=(e)=>{
        if (e.target.value.trim()) {
            this.setState({userName: e.target.value})
        }

    }
    handleClickSignUp=(e)=>{
        //add person to list,
        //when username = top name then adopt is possible
        e.preventDefault()
        if (this.state.userName) {
            PeopleApiService.addPerson(this.state.userName)
            .then(data => {
                this.setState({
                    waitingList: data,
                    isWaiting: true
                })
            })
        }
        else {
            alert('Must type name first')
        }
    }
    componentDidMount(){
        
        this.setState({
            isLoadingPets: true
        })
        PetsApiService.getPets()
            .then(data => {
                this.setState({
                    cat: data.cat,
                    dog: data.dog,
                    isLoading: false
                })
            })
            .catch(err => console.log('no pets'))
        
        PeopleApiService.getPeople()    
            .then(data => {
                this.setState({
                    waitingList: data
                })
            })
            .catch(err => console.log('no people'))
    
        setInterval(()=>{
            //delete a person and pet at a random time
            if (this.state.userName !== this.state.waitingList[0] && this.state.waitingList.length > 1) {
                PeopleApiService.deletePeople()
                    .then(data => {
                        this.setState({waitingList: data})
                        if (this.state.userName === data[0]) {
                            this.setState({canAdopt: true})
                            console.log('can adopt')
                        }
                    })
                    .catch(err => console.log(err))
                let petChoice = this.flipCoin() ? 'cat' : 'dog'
                
                PetsApiService.deletePet(petChoice)
                    .then(data => {
                        this.setState({                  
                            cat: data.cat,
                            dog: data.dog,
                            isLoading: false
                        })
                    })
            }

            if (this.flipCoin()) {
                PeopleApiService.addPerson(randomPerson())
                    .then(data => {
                        this.setState({waitingList: data})
                    })
            }
                
        }, this.rand(2000, 8000))
    
    }
    
    
    render() {
        return (
            <div>
                
                <WaitingList 
                    nameList={this.state.waitingList} 
                    setName={this.handleChangeName}
                    signUp={this.handleClickSignUp}
                />

                <div className='currentPets'>
                    {this.state.isLoading
                        ? <p>We're checking the kenel...</p>
                        : <>
                        <PetDisplay 
                            animal={this.state.cat}
                            canAdopt={this.state.canAdopt}
                        />
                        <PetDisplay 
                            animal={this.state.dog}
                            canAdopt={this.state.canAdopt}
                        />
                    </>}
                </div>
            </div>
        )
    }
}
