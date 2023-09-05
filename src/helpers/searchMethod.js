export const searchMethod = (array, type, searchValue) => {
  if (searchValue) {
    if (type === 'client') {
      return array.filter(
        item =>
          item.city.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.phone.toLowerCase().includes(searchValue.toLowerCase())
      )
    }
    else if (type === 'kotel') {
      return array
    }
    else if (type === 'order') {
      return array
    }
    if (type === 'clientStatus') {
      return array.filter(
        item =>
          item.name.split(' ')[0].toLowerCase() === searchValue.toLowerCase() ||
          item.phone.toLowerCase() == searchValue.toLowerCase()
      )
    }
    else if (type === 'status') {
      return array.filter(
        item =>
          item.clientId === searchValue)
    }
    else {
      return array
    }
  }
  return array
}