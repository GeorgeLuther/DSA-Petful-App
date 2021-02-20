const randPeople = [
    "Jimmy Timbo",
    "Janice Taylor",
    "Elvin Kapahoote",
    "Jabe Grimble",
    "Lofliflio Muram",
    "Dan Wimbers",
    "Lane Alexanre",
    "Perry O'Lang",
    "Gabria Yem"
]
const rand=(min,max)=>{  
    min=Math.ceil(min) 
    max=Math.floor(max) 
    return Math.floor(Math.random()*(max-min+1))+min 
}
const randomPerson = () => {
    return randPeople[rand(0,randPeople.length-1)]
}

export default randomPerson