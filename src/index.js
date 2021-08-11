import { toArray, camelCase, cloneDeep, forEach, isEqual, debounce } from 'lodash-es';

let foo = 'a-b-c'
console.log(camelCase(foo));

let a  = { b:1, c: 2 }
console.log(cloneDeep(a));

function fun () {
    console.log('');
}
debounce(fun)

let obj = { a:1, b:2, c:3}
forEach(obj, (val, key) => {
    console.log(val, key);
})

let a1 = { b: 1 }
let a2 = { b: 1 }
console.log(isEqual(a1, a2));

console.log(toArray({ 'a': 1, 'b': 2 }));

