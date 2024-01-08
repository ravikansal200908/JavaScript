const obj = { 'id': 90, 'name': 'test' }

console.log('id is : ', obj['id'])
console.log('id is : ', obj.id)
console.log('name : ', obj['name'])
console.log('name : ', obj.name)
obj['address'] = 'HR'
console.log('address is : ', obj.address)
console.log('address is : ', obj['address'])

obj = {}
const obj = { id: 90, name: 'test' }

console.log(obj)

/*
- only 12 line is invalid, because const obj is already defined
- Updation in key and re-declare is allowed but assign operator for this variable is not allowed.
*/
