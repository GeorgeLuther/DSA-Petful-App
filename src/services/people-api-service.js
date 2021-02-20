import REACT_APP_API_BASE from '../config'

const PeopleApiService = {
    getPeople() {
        return fetch(`${REACT_APP_API_BASE}/people`)
        .then((response) => {
          if (!response.ok) {
            return response.json().then((event) => Promise.reject(event));
          } else {
            return response.json();
          }
        })
        .catch((error) => console.error(error));
    },
    addPerson(name) {
      return fetch(`${REACT_APP_API_BASE}/people`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ person: name }),
      })
        .then((response) => {
          if (!response.ok) {
            return response.json().then((event) => Promise.reject(event));
          } else {
            return response.json();
          }
        })
        .catch((error) => console.error(error));
    },
    deletePeople() {
      return fetch(`${REACT_APP_API_BASE}/people`, {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' },
      })
        .then((response) => {
          if (!response.ok) {
            return response.json().then((event) => Promise.reject(event));
          } else {
            return response.json();
          }
        })
        .catch((error) => console.error(error));
    },
}
export default PeopleApiService