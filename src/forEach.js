import {forEach} from 'lodash-es';
let obj = { a:1, b:2, c:3}
forEach(obj, (val, key) => {
    console.log(val, key);
})