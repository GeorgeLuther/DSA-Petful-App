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
        //add self to waiting list
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
    handleClickAdopt=(e)=>{
        e.preventDefault()
        PeopleApiService.deletePeople()
            .then(data => {
                this.setState({waitingList: data})
        })
        PetsApiService.deletePet(e.target.id)
            .then(data => {
                this.setState({                  
                    cat: data.cat,
                    dog: data.dog,
                    isLoading: false
                })
            })

        this.setState({userName: '', isWaiting: false, canAdopt: false})
        alert(`You have adopted a ${e.target.id}!!`)
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
                    isLoadingPets: false
                })
            })
            .catch(err => {
                console.log('no pets')
                this.setState({isLoadingPets: true})
            })
        
        PeopleApiService.getPeople()    
            .then(data => {
                this.setState({
                    waitingList: data
                })
            })
            .catch(err => {
                console.log('no people')
                this.setState({
                    waitingList: ['Tim Person']
                })
            })
    
        setInterval(()=>{
            //a person and pet are removed from the adoption list roughly every 5 seconds
            if (this.state.userName !== this.state.waitingList[0] && this.state.waitingList.length > 1) {
                PeopleApiService.deletePeople()
                    .then(data => {
                        this.setState({waitingList: data})
                        if (this.state.userName === data[0]) {
                            this.setState({canAdopt: true})
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
                
        }, this.rand(2000, 8000))
        
        setInterval(()=>{
            //a random person is added to the list every 5 seconds
            if (this.flipCoin()) {
                PeopleApiService.addPerson(randomPerson())
                    .then(data => {
                        this.setState({waitingList: data})
                    })
            }
        }, 5000)
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
                            type={'cat'}
                            animal={this.state.cat}
                            canAdopt={this.state.canAdopt}
                            handleClickAdopt={this.handleClickAdopt}
                        />
                        <PetDisplay
                            type={'dog'}
                            animal={this.state.dog}
                            canAdopt={this.state.canAdopt}
                            handleClickAdopt={this.handleClickAdopt}
                        />
                    </>}
                </div>
            </div>
        )
    }
}
