import client from './../classes/client'
import order from './../classes/order'

export const modelsFactory = (type) => {
  let newObject = {}

  switch (type) {
    case 'client':
      newObject = new client()
      break
    case 'order':
      newObject = new order()
      break
  }

  return Object.assign({}, newObject)
}