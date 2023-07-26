import client from './../classes/client'
import kotel from './../classes/kotel'
import order from './../classes/order'
import stage from './../classes/stage'
import stageObrabotka from './../classes/stageObrabotka'
import user from './../classes/user'
import obrabotka from './../classes/obrabotka'

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
    case 'stageObrabotka':
      newObject = new stageObrabotka()
      break
    case 'user':
      newObject = new user()
      break
    case 'obrabotka':
      newObject = new obrabotka()
      break
  }

  return Object.assign({}, newObject)
}