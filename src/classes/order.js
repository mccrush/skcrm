import ClassBasic from './ClassBasic'

export default class order extends ClassBasic {
  type = 'order'
  clientId = ''
  kotelId = ''
  stageId = ''
  price = 0
  prePrice = 0
  dateFinish = ''
}