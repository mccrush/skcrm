import ClassBasic from './ClassBasic'

export default class order extends ClassBasic {
  type = 'order'
  clientId = ''
  kotelId = ''
  bunkerPos = ''
  petliPos = ''
  stageId = ''
  price = 0
  prePrice = 0
  dateFinish = ''
}