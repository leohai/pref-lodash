import { map } from 'lodash-es';

console.log(map([4, 8], x => x * x)); // => [16, 64]
let users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];
console.log(map(users, 'user')); // => ['barney', 'fred']
map([
    { id: 1, name: '王五' }, 
    { id: 2, name: '李四' }, 
    { id: 3, name: '王五' },
  ], { name: '王五' })  // => [true, false, true]
map([{a: {b: 1}}, {a: {b: 2}}], 'a.b') // => [1, 2]