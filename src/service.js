const API = 'http://www.mocky.io/v2'

const getWOW = (params) => {

  return fetch(`${API}/5bdd28dd32000075008c6227`)
    .then(response => response.json())
    .then(responseJSON => responseJSON)
}

export { getWOW }
