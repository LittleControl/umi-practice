async function f1() {
  console.log('f1 start');
  await f2();
}
async function f2() {
  await console.log('f2 start');
}
f1();

let f3 = new Promise((resolve, reject) => {
  console.log('f3 start');
  let str = 'noting';
  setTimeout(() => resolve(str), 1000);
}).then(data => {
  console.log(data);
});
setTimeout(() => console.log('f4'), 1000);
console.log('f5');

// f3 f1 f2 f5 nothing f4
