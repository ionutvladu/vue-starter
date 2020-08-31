import Client from './client'
import localStorageService from './localStorageService'
class ServicesClass {
  constructor () {
    this.client = Client
  }

  login ({ email, password }) {
    return this.client.post('/login', {
      email: email,
      password: password
    }, {
      authorization: false

    }).then(tokenResp => {
      localStorageService.setToken(tokenResp.data)
      return tokenResp
    })
  }

  register ({ email, password }) {
    return this.client.post('/register',
      {
        email: email,
        password: password
      }).then(tokenResp => {
      localStorageService.setToken(tokenResp.data)
      return tokenResp
    })
  }

  logout () {
  /*  return this.client.post('/logout', {}).then(() => { */
    localStorageService.clearToken()
    // })
    return Promise.resolve()
  }

  getListItems () {
    return this.client.get('/listItems')
  }

  deleteItem (id) {
    return this.client.delete(`/listItems/${id}`)
  }

  addItem ({
    name,
    calories,
    fat,
    carbs,
    protein
  }) {
    return this.client.post('/listItems', {
      name,
      calories,
      fat,
      carbs,
      protein
    })
  }

  updateItem ({
    id,
    name,
    calories,
    fat,
    carbs,
    protein
  }) {
    return this.client.put(`/listItems/${id}`, {
      name,
      calories,
      fat,
      carbs,
      protein
    })
  }
}

export const Services = new ServicesClass()
