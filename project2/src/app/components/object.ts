// Object.assign()
const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { c: 5, d: 6 };
 
const result = Object.assign(target, source1, source2);
 
console.log(result); 

// Object.create()
const parent = { x: 1, y: 2 };
const child = Object.create(parent);
 
console.log(child.x); 
console.log(child.y); 
 
child.z = 3;
console.log(child); 
 
// Object.entries()
const object1 = { a: 1, b: 2, c: 3 };
 
const entries = Object.entries(object1);
 
console.log(entries); 
 
// Object.freeze()
const object2 = { a: 1, b: 2 };
 
Object.freeze(object2);
 
object2.a = 3; 
console.log(object2);
 
try {
Object.defineProperty(object1, 'c', { value: 3 });
} catch (e) {
console.log(e); 
}
 
// Object.getPrototypeOf()
const object3 = { a: 1, b: 2 };
const prototype = Object.getPrototypeOf(object3);
 
console.log(prototype); 



// Object.hasOwn()
const object4 = { a: 1, b: 2 };
 
console.log(Object.hasOwn(object4, 'a'));
console.log(Object.hasOwn(object4, 'c'));



// Object.keys()
const object5 = { a: 1, b: 2, c: 3 };
 
const keys = Object.keys(object5);
 
console.log(keys); 



// Object.seal()
// const object6 = { a: 1, b: 2 };
 
// Object.seal(object6);
 
// object6.c = 3; 
// console.log(6); 
 
// try {
// delete object6.a;
// } catch (e) {
// console.log(e); 
// }


