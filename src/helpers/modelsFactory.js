import client from './../classes/client'
import kotel from './../classes/kotel'
import order from './../classes/order'
import stage from './../classes/stage'

export const modelsFactory = (type) => {
  let newObject = {}

  switch (type) {
    case 'client':
      newObject = new client()
      break
    case 'kotel':
      newObject = new kotel()
      break
    case 'order':
      newObject = new order()
      break
    case 'stage':
      newObject = new stage()
      break
  }

  return Object.assign({}, newObject)
}