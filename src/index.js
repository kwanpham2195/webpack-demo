import './style.scss'

import { dog } from './dog';

const obj = {
  foo: 'bar',
}

const extendedObj = {
  ...obj,
  name: 'Quan',
}

console.log([1,2,3].includes('a'))
console.log("ES8 Object.values", Object.values(extendedObj))

console.log(extendedObj);
console.log(dog);

function resolveAfter2s() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('done');
    }, 2000);
  })
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2s();
  console.log(result);
}

asyncCall();