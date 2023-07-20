// Автоматический расчет срока отгрузки
// +28 дней к дате заказа
// Возвращает новую дату в формате 2023-08-18T12:18

function formateDate(date) {
  let month = date.getMonth() + 1
  month = month < 10 ? '0' + month : month

  let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  let minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()

  return date.getFullYear() + '-' + month + '-' + day + 'T' + hours + ':' + minute
}

export const getDueDate = (dateCreate) => {
  let date = new Date(dateCreate)
  date.setDate(date.getDate() + 28);
  const dueDate = formateDate(date)
  return dueDate
}