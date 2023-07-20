// Считает количество прошедших с момента заказа дней.
// Возвращает число

export const getCountLastDays = (dateCreate) => {
  let startDay = new Date(dateCreate)
  let toDay = new Date()
  const lastMonths = toDay.getMonth() - startDay.getMonth()
  const lastDays = toDay.getDate() - startDay.getDate() + (lastMonths * 30)
  return lastDays
}