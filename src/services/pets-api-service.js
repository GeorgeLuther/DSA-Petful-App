import REACT_APP_API_BASE from '../config'

const PetsApiService = {
    getPets() {
        return fetch(`${REACT_APP_API_BASE}/pets`)
        .then((response) => {
          if (!response.ok) {
            return response.json().then((event) => Promise.reject(event));
          } else {
            return response.json();
          }
        })
        .catch((error) => console.error(error));
    },
    deletePet(type) {
        return fetch(`${REACT_APP_API_BASE}/pets/${type}`,{
          method: 'DELETE',
          headers: {
            'content-type':'application/json'
          },
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
      },
}

export default PetsApiService