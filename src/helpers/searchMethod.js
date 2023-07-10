export const searchMethod = (array, fields, searchValue) => {
  if (searchValue) {
    console.log('Fields = ', fields);
    console.log('SV = ', searchValue);
    return array.filter(item => {

      fields.forEach(el => {
        //console.log('el = ', el);
        if (item[el].toLowerCase().includes(searchValue.toLowerCase())) {
          console.log('match item[el]', item[el], ' == ', el);
          return item
        }
      })
    })
  }
  return array
}

// return this.filterItems.filter(
//   item =>
//     item.city.toLowerCase().includes(this.searchValue.toLowerCase()) ||
//     item.name.toLowerCase().includes(this.searchValue.toLowerCase()) ||
//     item.phone.toLowerCase().includes(this.searchValue.toLowerCase())
// )